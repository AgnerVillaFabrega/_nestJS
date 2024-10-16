import './style.css'
// import { name, age } from './bases/01-types.ts'
import { setupCounter } from './counter.ts'
import { pikachu } from './bases/03-class.ts'
// import { bulbasor, pokemons } from './bases/02-objects.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello${pikachu.name} ${pikachu.id}Vite!!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
