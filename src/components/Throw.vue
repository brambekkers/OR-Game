<template>
	<div class="throw">
		<transition
			mode="out-in"
			enter-active-class="animate__animated animate__bounceIn"
			leave-active-class="animate__animated animate__bounceOut"
		>
			<a class="btn" @click="throwDices()" v-if="button">Gooi de dobbelsteen</a>
			<div class="dices" v-else>
				<img src="@/assets/dices/dieWhite1.png" v-if="dieEye === 1" />
				<img src="@/assets/dices/dieWhite2.png" v-if="dieEye === 2 && !button" />
				<img src="@/assets/dices/dieWhite3.png" v-if="dieEye === 3 && !button" />
				<img src="@/assets/dices/dieWhite4.png" v-if="dieEye === 4 && !button" />
				<img src="@/assets/dices/dieWhite5.png" v-if="dieEye === 5 && !button" />
				<img src="@/assets/dices/dieWhite6.png" v-if="dieEye === 6 && !button" />
			</div>
		</transition>
	</div>
</template>

<script>
import { mapActions } from "vuex";
var dieShuffle = new Audio(require("@/assets/sounds/dieShuffle1.ogg"));
var dieThrow = new Audio(require("@/assets/sounds/dieThrow3.ogg"));

export default {
	data() {
		return {
			button: false,
			dieEye: 0,
		};
	},
	methods: {
		...mapActions(["movePlayer"]),
		async throwDices() {
			this.button = false;
			const eys = await this.rollDices();
			await this.movePlayer(eys);
			this.$store.commit("actionPanel", true);
			this.button = true;
		},
		rollDices() {
			return new Promise((resolve, reject) => {
				dieShuffle.play();
				setTimeout(() => {
					dieThrow.play();

					const interval = setInterval(() => {
						this.dieEye = Math.floor(Math.random() * 6) + 1;
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
			this.button = true;
		}, 2000);
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
		background: #e05f41;
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
			background: #fff;
			transform: skew(3deg);
		}
	}

	img {
		width: calc((1.3vmin + 1.3vmax + 1.3vw));
	}
}
</style>
