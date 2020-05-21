<script>
	export let segment;
	let height = window.screen.height;
	let width = window.screen.width;
	let url = `https://picsum.photos/${width}/${height}`;
</script>

<style>
	div {
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
	}

	h1,p {
		color: black;
		text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;
	}

	h1 {
		font-size: 4em;
	}

	p {
		font-size: 2em;
	}
</style>

<div style="background: url({url})">
<h1>Just my best</h1>
<p>I am still settiling in, so no content for now.<br/>If you have any question for me: 42!</p>
</div>