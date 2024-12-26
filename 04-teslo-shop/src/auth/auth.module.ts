import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService,JwtStategy],
  imports:[
    ConfigModule,
    TypeOrmModule.forFeature([
      // Se importan todas las entidades del proyecto
      User,
    ]),
    PassportModule.register({ defaultStrategy:'jwt' }),

    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(configService: ConfigService) => {
        // console.log('JWT SECRET', process.env.JWT_SECRET);
        // console.log('JWT SECRET POR CONFIGSERVICE', configService.get('JWT_SECRET'));
        
        // console.log('JWT exprires', process.env.JWT_EXPIRES);
        // console.log('JWT exprires POR CONFIGSERVICE', configService.get('JWT_EXPIRES'));
        
        return{
          secret: configService.get('JWT_SECRET'),
          signOptions:{
            expiresIn:configService.get('JWT_EXPIRES')
          }
        }
      }
    })
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET,
    //   signOptions:{
    //     expiresIn:process.env.JWT_EXPIRES
    //   }
    // }),

  ],
  exports:[TypeOrmModule,JwtStategy,PassportModule,JwtModule]
})
export class AuthModule {}
