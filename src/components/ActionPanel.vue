<template>
	<div id="panel">
		<h1>{{ playerPos }} - {{ tile.title }}</h1>

		<p class="description">
			<span class="tileImages">
				<img :src="`/tileImages/${playerPos + 1}.png`" />
			</span>
			{{ tile.description }}
		</p>
		<a class="btn" @click="click">Oke dan!</a>
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
			...mapGetters(["playerPos"]),
			tile() {
				return this.tiles[this.playerPos];
			},
		},
		methods: {
			...mapMutations([
				"addTries",
				"actionPanel",
				"choosePanel",
				"chooseAction",
				"throwButton",
			]),
			...mapActions(["movePlayer"]),
			async click() {
				const action = this.tiles[this.playerPos].action;
				clickSound.play();
				this.actionPanel(false);

				if (action) {
					if (action.type === "wait") {
						this.addTries(action.amount);
						this.showThrowButton();
					}
					if (action.type === "move") {
						await this.movePlayer(action.amount);
					}
					if (action.type === "choose") {
						this.chooseAction(action);
						this.choosePanel(true);
					}
				} else {
					this.showThrowButton();
				}
			},
			showThrowButton() {
				setTimeout(() => {
					this.throwButton(true);
				}, 500);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.description {
		text-align: left;
	}
	.tileImages {
		float: right;
		display: inline;
		margin-right: 3vh;
		margin-left: 2vw;

		// Size
		min-height: 8vh;
		max-height: 15vh;
		min-width: 10%;
		max-width: 50%;

		img {
			-o-object-fit: cover;
			object-fit: cover;
			overflow: hidden;
			max-width: 100%;
			max-height: 15vh;
		}
	}
</style>
