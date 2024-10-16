
export let name:string = 'John';
export const age:number = 24;
export const isValid:boolean = true;

name = 'Carca';

// Permite definir caracteres multilineas ``
export const tamplateString =`
    Esto es un string
    Multilinea
    "" dobles
    '' simples
    inyectar valores ${name}
    expresiones ${age + 1}
    bool ${isValid}   
`
console.log(tamplateString);

