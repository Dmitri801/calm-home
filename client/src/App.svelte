<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import Breathe from "./components/Breathe.svelte";
 
  let randomImage = {};
  let randomImageLoading = true;

  onMount(() => {
    axios
      .get("http://localhost:3000/api/unsplash/get-random-meditative")
      .then(res => {
		randomImageLoading = false;
		randomImage = res.data;
      });
  });

</script>

<div>
  {#if !randomImageLoading}
    <main>
	  <img class="App-bgImage" src={randomImage.urls.full} alt="Random" />
      <Breathe />
    </main>
  {:else}
    <h1>Loading....</h1>
  {/if}

</div>

<style>
  main {
    height: 100vh;
    width: 100%;
    background: #333;
    color: #fff;
  }

  .App-bgImage {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
  }
</style>
