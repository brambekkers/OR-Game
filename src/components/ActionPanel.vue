<template>
	<div id="panel">
		<h1>{{ playerPos }} - {{ tile.title }}</h1>
		<p class="description">
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
			...mapMutations(["addTries", "actionPanel"]),
			...mapActions(["movePlayer"]),
			async click() {
				const action = this.tiles[this.playerPos].action;
				clickSound.play();
				this.actionPanel(false);

				if (action) {
					if (action.type === "wait") {
						this.addTries(action.amount);
					}
					if (action.type === "move") {
						await this.movePlayer(action.amount);
					}
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>
