<script lang="ts">
  import { onMount } from 'svelte';
  import { createScene } from './lib/scene';
  let el: HTMLCanvasElement | null = null;

  onMount(() => {
   if(el) {
     createScene(el)
   }
  });
</script>

<canvas id="house_background" bind:this={el}></canvas>
