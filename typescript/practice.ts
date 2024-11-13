import { name } from "../01-typescript-intro/src/bases/01-types";

//? tipar arrow function

// const arrowfunction = (parametros): LoQueRetorna =>{
//     Funcion
// }
const sumar = (a: number, b: number): number => {
  return a + b;
};

//? never
function throwError(message: string): never {
  throw new Error(message);
}

//? inferencia funciones anonimas segun el contexto

const avengers = ["spider-man", "Hulk", "Iron-man"];

avengers.forEach((avenger) => {
  console.log(avenger.toUpperCase);
});


//? Objetos
//? type alias
//? template union type
type HeroId = `${string}-${string}-${string}-${string}-${string}`


type Hero = {
  readonly id?: HeroId
  name: string
  age: number
  //? optional properties
  isActive?: boolean
};

let hero: Hero = {
  name: "Thor",
  age: 1500,
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(),
    name,
    age,
    isActive: true
  };
}

const thor = createHero({ name: "thor", age: 1500 });

thor.id?.toString();


//? template union type
type HexadecimalColor = `#${string}`

// const colo: HexadecimalColor = '0033ff'
const color2: HexadecimalColor = '#0033ff'