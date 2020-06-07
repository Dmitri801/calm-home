<script>
   import Breathe from "./components/Breathe.svelte";
</script>

<main>
	<Breathe canIBreathe={true} />
</main>

<style>
	main {
		height: 100vh;
		width: 100%;
		background: #333;
		color: #fff;
	}
</style>