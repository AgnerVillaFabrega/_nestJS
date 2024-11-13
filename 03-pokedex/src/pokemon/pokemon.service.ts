import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { Model, isValidObjectId } from 'mongoose';


@Injectable()
export class PokemonService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ){}


  async create(createPokemonDto: CreatePokemonDto) {
    
    createPokemonDto.name = createPokemonDto.name.toLowerCase()
    
    try {
      
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;

    } catch (error) {
      this.handleExeptions(error);
    }
  }

  findAll() {
    return `This action returns all pokemon`;
  }

  async findOne(term: string) {
    
    let pokemon: Pokemon;

    //num del pokemon
    if ( !isNaN(+term) ) {
      pokemon = await this.pokemonModel.findOne({ no: term });
    }

    // MongoID
    if ( !pokemon && isValidObjectId( term ) ) {
      pokemon = await this.pokemonModel.findById( term );
    }

    // Name
    if ( !pokemon ) {
      pokemon = await this.pokemonModel.findOne({ name: term.toLowerCase().trim() })
    }

    if ( !pokemon ) 
      throw new NotFoundException(`Pokemon with id, name or no "${ term }" not found`);
    

    return pokemon;
  }


  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    
    //Consultamos pokemon con la funcion findOne
    const pokemon = await this.findOne(term);
    //Convertimos el nombre a toLowerCase
    if(updatePokemonDto.name) 
      updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
    
    try {
      //Guardamos en BD
      await pokemon.updateOne(updatePokemonDto, { new: true });
      return {...pokemon.toJSON(), ...updatePokemonDto };

    } catch (error) {
      //En caso de que exista un registro con el mismo id retorna el mansaje de duplicado
      this.handleExeptions(error);
    }
    
  }

  async remove(id: string) {
    // const pokemon = await this.findOne(id);
    // // this.pokemonModel.findByIdAndDelete(id);
    // await pokemon.deleteOne();

    // const result = await this.pokemonModel.findByIdAndDelete(id);
    const {deletedCount} = await this.pokemonModel.deleteOne({ _id: id });
    
    if(deletedCount ===0 )
      throw new BadRequestException(`Pokemon with id "${id}" not found`)
    
    return;
  }


  //funcion de manejo de errores, en caso de tener mas errores los anexamos aqui
  private handleExeptions(error: any){
    if (error.code === 11000) {
      throw new BadRequestException(`Pokemon exist in BD ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't update pokemon - Check server logs`);
  }
}
