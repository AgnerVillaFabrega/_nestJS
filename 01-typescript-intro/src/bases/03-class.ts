import axios from "axios";
import { Move, PokeapiReponse } from "../interfaces/pokeapi-response-interface";

export class Pokemon {

    get imgUrl(): string{
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id:number, 
        public name: string,
        // public imgUrl: string,
    ){}

    public scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
        this.speak();
    }

    private speak(){
        console.log(`${this.name}, ${this.name}!!`);
    }

    async getMoves(): Promise<Move[]>{
        // const moves = 10;
        const {data} = await axios.get<PokeapiReponse>('https://pokeapi.co/api/v2/pokemon/25');
        console.log(data.moves);

        return data.moves;
    }
}


export const pikachu = new Pokemon(1,'Pikachu');

// pikachu.id = 10;
// pikachu.name = 'Pikachu 2';
// console.log(pikachu);

// pikachu.speak();
// pikachu.scream();
// console.log(pikachu.getMoves());

pikachu.getMoves();
