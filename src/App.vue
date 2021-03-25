<template>
	<router-view />
</template>

<script>
	export default {
		mounted() {
			this.$store.dispatch("initializeApp");
		},
	};
</script>

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

			#panel {
				position: absolute;
				z-index: 1000;

				// Set Size
				width: 70vw;
				min-width: calc(500px);
				max-width: calc(70vh * 13.4 / 9);

				height: calc(70vw * 9 / 13.4);
				min-height: calc(500px * 0.67);
				max-height: 70vh;

				// Background
				background: url("./assets/panel.png");
				background-size: cover;

				// Display
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;

				text-align: center;

				p {
					padding: 0 5vmin;
					font-size: calc((1.4vmin + 1.4vmax + 1.4vw) / 3);
					white-space: pre-wrap;
				}

				#scoreContainer {
					overflow-y: scroll;
					width: 90%;
					border: 3px solid black;
					border-radius: 5px;
					height: 65%;

					table {
						width: 100%;

						font-size: calc((1.4vmin + 1.4vmax + 1.4vw) / 3);
					}
				}

				.mb-1 {
					margin-bottom: 0.1rem;
				}

				#name {
					min-width: 200px;
					width: 15vw;
					height: 2vh;
					background: #e0f0ff;
					border: calc((0.3vmin + 0.3vmax + 0.3vw) / 5) solid #000;
					border-radius: 5px;
					text-align: center;
					font-size: calc((1.4vmin + 1.4vmax + 1.4vw) / 3);
					font-weight: 700;
					font-family: "Kalam", cursive;
					padding: calc((1vmin + 1vmax + 1vw) / 4)
						calc((1vmin + 1vmax + 1vw) / 3);

					&:focus {
						outline: none;
					}
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
					padding: calc((0.3vmin + 0.3vmax + 0.3vh))
						calc((0.8vmin + 0.8vmax + 0.8vw));
					display: inline-block;
					transition: all 200ms;

					transform: skew(-21deg) rotate(-2deg);

					margin-top: 3vh;
					margin-bottom: 3vh;

					&:visited {
						color: #fff;
					}
					&:hover {
						background: #d74a43;
						transform: skew(3deg);
					}
				}

				.btn-green {
					background: #b0e944 !important;
				}

				.btn-gray {
					background: #b9b9b9 !important;
				}
			}
		}
	}

	/* width */
	::-webkit-scrollbar {
		width: 10px;
		cursor: pointer;
	}

	/* Track */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #0b0708;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #394d5a;
		cursor: pointer;
	}
</style>
