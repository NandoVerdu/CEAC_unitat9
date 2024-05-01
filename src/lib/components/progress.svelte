<!-- src/progress.svelte -->
<script>
   import { Slide } from '@components'
   import { animate, signal } from '@motion'
 
   export let progress = signal(0)
   
   animate(async() => {
     await progress.to(10000)
   })
 </script>
 
 <Slide>
   {$progress.toLocaleString('es', { maximumFractionDigits: 0 })}
 
 </Slide>