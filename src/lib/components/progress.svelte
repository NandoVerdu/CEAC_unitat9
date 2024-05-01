<!-- src/progress.svelte -->
<script>
   import { Slide } from '@components'
   import { animate, signal } from '@motion'
	import { expoIn, expoOut, sineInOut } from 'svelte/easing'
 
   export let progress = signal(0)
   
   async function progreso(){
    await progress
    .to(10_000,{delay:2000,duration:4000,easing:expoOut})
  }

async function reinicio(){
  progress.reset();
  progreso()
}  
 </script>
 
 <Slide on:in={progreso} on:out={()=>progress.reset()}>
  <button on:click={reinicio}> {$progress.toLocaleString('es', { maximumFractionDigits: 0 })}</button>
 </Slide>