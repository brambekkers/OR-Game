<template>
	<div id="choosePanel">
		<h1>Je moet kiezen</h1>
		<p class="description">
			{{ chooseAction.description }}
		</p>
		<div class="mb-1">
			<a class="btn btn-red" @click="click(false)"
				>Nee <span>{{ chooseAction.no }}</span></a
			>
			<a class="btn btn-green" @click="click(true)"
				>Ja <span>+{{ chooseAction.yes }}</span></a
			>
		</div>
	</div>
</template>

<script>
	import TilesConfig from "@/config/tiles";
	import { mapMutations, mapGetters, mapActions } from "vuex";
	const clickSound = new Audio(require("@/assets/sounds/click.ogg"));

	export default {
		data() {
			return {
				tiles: TilesConfig,
			};
		},
		computed: {
			...mapGetters(["chooseAction"]),
			tile() {
				return this.tiles[this.playerPos];
			},
		},
		methods: {
			...mapMutations(["addTries", "choosePanel", "throwButton"]),
			...mapActions(["movePlayer"]),
			async click(val) {
				clickSound.play();
				this.choosePanel(false);

				if (val) {
					await this.movePlayer(this.chooseAction.yes);
				} else {
					await this.movePlayer(this.chooseAction.no);
				}

				setTimeout(() => {
					this.throwButton(true);
				}, 500);
			},
		},
	};
</script>

<style lang="scss" scoped>
	#choosePanel {
		position: absolute;
		z-index: 1000;

		// Set Size
		width: 30vw;
		min-width: calc(500px);
		max-width: calc(30vh * 13.4 / 9);

		height: calc(30vw * 9 / 13.4);
		min-height: calc(500px * 0.67);
		max-height: 30vh;

		// Background
		background: url("../assets/panel.png");
		background-size: cover;

		// Display
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		text-align: center;

		p {
			padding: 0;
			font-size: calc((1.4vmin + 1.4vmax + 1.4vw) / 3);
			white-space: pre-wrap;
		}

		.mb-1 {
			margin-bottom: 0.1rem;
		}

		div {
			margin-bottom: 2rem;
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
				margin: calc(0.8vw + 35px);
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

			.btn-red {
				background: #d84841 !important;
			}
		}
	}
</style>
