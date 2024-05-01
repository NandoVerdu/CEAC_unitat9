<!-- src/progress.svelte -->
<script>
   import { Slide } from '@components'
   import { animate, signal } from '@motion'
 
   export let progress = signal(0)
   
   animate(async() => {
     await progress.to(10_000)
   })
 </script>
 
 <Slide>
   {$progress.toLocaleString('en', { maximumFractionDigits: 0 })}
 </Slide>