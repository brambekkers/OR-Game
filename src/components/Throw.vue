<template>
	<div class="throw">
		<transition
			mode="out-in"
			style="transition-delay: 1.5s"
			enter-active-class="animate__animated animate__bounceIn"
			leave-active-class="animate__animated animate__bounceOut"
		>
			<a class="btn" @click="throwDices()" v-if="throwButtonVal"
				>Gooi de dobbelsteen</a
			>
			<div class="dices" v-else>
				<img src="@/assets/dices/dieWhite1.png" v-if="dieEye === 1" />
				<img
					src="@/assets/dices/dieWhite2.png"
					v-if="dieEye === 2 && !throwButtonVal"
				/>
				<img
					src="@/assets/dices/dieWhite3.png"
					v-if="dieEye === 3 && !throwButtonVal"
				/>
				<img
					src="@/assets/dices/dieWhite4.png"
					v-if="dieEye === 4 && !throwButtonVal"
				/>
				<img
					src="@/assets/dices/dieWhite5.png"
					v-if="dieEye === 5 && !throwButtonVal"
				/>
				<img
					src="@/assets/dices/dieWhite6.png"
					v-if="dieEye === 6 && !throwButtonVal"
				/>
			</div>
		</transition>
	</div>
</template>

<script>
	import { mapActions, mapGetters, mapMutations } from "vuex";
	const dieShuffle = new Audio(require("@/assets/sounds/dieShuffle1.ogg"));
	const dieThrow = new Audio(require("@/assets/sounds/dieThrow3.ogg"));

	export default {
		data() {
			return {
				dieEye: 0,
			};
		},
		computed: {
			...mapGetters(["throwButtonVal"]),
		},
		methods: {
			...mapActions(["movePlayer"]),
			...mapMutations(["actionPanel", "addTrie", "throwButton"]),
			async throwDices() {
				this.throwButton(false);
				const eys = await this.rollDices();
				this.addTrie();
				await this.movePlayer(eys);
			},
			rollDices() {
				return new Promise((resolve, reject) => {
					dieShuffle.play();
					setTimeout(() => {
						dieThrow.play();

						const interval = setInterval(() => {
							this.dieEye = Math.floor(Math.random() * 6) + 1;
							// this.dieEye = 28;
						}, 100);

						setTimeout(() => {
							clearInterval(interval);
							resolve(this.dieEye);
						}, 1000);
					}, 1500);
				});
			},
		},
		mounted() {
			setTimeout(() => {
				this.throwButton(true);
			}, 1000);
		},
	};
</script>

<style lang="scss" scoped>
	.throw {
		position: absolute;
		transition: all 200ms;

		.btn {
			color: #000000;
			font-size: calc((1.4vmin + 1.4vmax + 1.4vw) / 3);
			background: #d74a43;
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

			margin-top: auto;
			margin-bottom: 3vh;

			&:visited {
				color: #fff;
			}
			&:hover {
				background: #fff;
				transform: skew(3deg);
			}
		}

		img {
			width: calc((1.3vmin + 1.3vmax + 1.3vw));
		}
	}
</style>
