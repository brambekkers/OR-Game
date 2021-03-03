<template>
	<div id="panel">
		<h1>OR Jaar(verslag)spel</h1>
		<p>
			Welkom bij het OR-Jaarverslag spel. Met dit spel willen we jullie op een
			leuke manier mee terug nemen naar het 2020 jaar. Het was een roerig jaar door
			Corona. Dit w<br /><br />
			Speel het spel en probeer 2020 te verslaan.
		</p>
		<a class="btn" @click="$store.commit('gameStarted', true)">Start het spel</a>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#panel {
	position: absolute;

	// Set Size
	width: 70vw;
	max-width: calc(70vh * 13.4 / 9);
	height: calc(70vw * 9 / 13.4);
	max-height: 70vh;

	// Background
	background: url("../assets/panel.png");
	background-size: cover;

	// Display
	display: flex;
	flex-direction: column;
	align-items: center;

	text-align: center;

	p {
		padding: 0 5vmin;
		font-size: calc((1.4vmin + 1.4vmax + 1.4vw) / 3);
	}

	.btn {
		color: #000000;
		font-size: calc((1.4vmin + 1.4vmax + 1.4vw) / 3);
		background: #fff;
		font-weight: 700;
		text-align: center;
		text-decoration: none;
		cursor: pointer;
		border: calc((0.3vmin + 0.3vmax + 0.3vw) / 3) solid #000;
		border-radius: 5px;
		outline: 0;
		padding: calc((0.3vmin + 0.3vmax + 0.3vh)) calc((0.8vmin + 0.8vmax + 0.8vw));
		display: inline-block;
		transition: all 200ms;

		transform: skew(-21deg) rotate(-2deg);

		margin-top: auto;
		margin-bottom: 3vh;

		&:visited {
			color: #fff;
		}
		&:hover {
			background: #e05f41;
			transform: skew(3deg);
		}
	}
}
</style>
