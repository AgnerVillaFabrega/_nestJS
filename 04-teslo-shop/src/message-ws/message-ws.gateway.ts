import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { MessageWsService } from './message-ws.service';
import { Socket , Server} from 'socket.io';
import { NewMessageDto } from './dto/new-message.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interfaces';

@WebSocketGateway({cors:true})
export class MessageWsGateway implements OnGatewayConnection, OnGatewayDisconnect{

  @WebSocketServer() wss:Server;
  constructor(
    private readonly messageWsService: MessageWsService,
    private readonly jwtService:JwtService,
  ) {}
  
  async handleConnection(client: Socket) {

    const token = client.handshake.headers.authentication as string;
    let payload: JwtPayload;

    try {
      payload = this.jwtService.verify(token);
      await this.messageWsService.registerClient(client,payload.id);

    } catch (e) {
      client.disconnect()
      return;
    }
    // console.log({payload});
    // console.log({conectados: this.messageWsService.getConnectedClients()});
    
    this.wss.emit('clients-updated',this.messageWsService.getConnectedClients())
  }

  handleDisconnect(client: Socket) {
    // console.log('Cliente desconectado', client.id);
    this.messageWsService.removeClient(client.id);
    // console.log({conectados: this.messageWsService.getConnectedClients()});
    this.wss.emit('clients-updated',this.messageWsService.getConnectedClients())
  }

  // message-from-client
  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket, payload: NewMessageDto){

    // //! Emite unicamente al cliente
    // client.emit('messages-from-server',{
    //   fullName:'ME',
    //   message: payload.message || 'no-message'
    // });

    //! Emitir a todos menos al cliente inicial
    // client.broadcast.emit('messages-from-server',{
    //   fullName:'ME',
    //   message: payload.message || 'no-message'
    // });

    //! Emit a todos incluyendo el ciente inicial
    this.wss.emit('messages-from-server',{
      fullName:this.messageWsService.getUserFullName(client.id),
      message: payload.message || 'no-message'
    });
  }





}
