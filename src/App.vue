<template>
	<router-view />
</template>

<style lang="scss">
	body {
		@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap");
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		font-family: "Kalam", cursive;
		font-size: calc((0.8vmin + 0.8vmax + 0.8vw) / 3);

		#app {
			min-height: 100vh;
			min-width: 100vw;
			height: 100vh;
			width: 100vw;

			overflow: hidden;

			h1 {
				font-size: calc((2vmin + 2vmax + 3vw) / 3);
				font-weight: 400;
			}
		}
	}
</style>
