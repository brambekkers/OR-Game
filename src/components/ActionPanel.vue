<template>
	<div id="panel">
		<h1>{{ playerPos }} - {{ tile.title }}</h1>
		<p>
			{{ tile.description }}
		</p>
		<a class="btn" @click="click">Oke dan!</a>
	</div>
</template>

<script>
	import TilesConfig from "@/config/tiles";
	import { mapGetters } from "vuex";
	const clickSound = new Audio(require("@/assets/sounds/click.ogg"));

	export default {
		computed: {
			...mapGetters(["playerPos"]),
			tile() {
				return TilesConfig[this.playerPos];
			},
		},
		methods: {
			click() {
				clickSound.play();
				this.$store.commit("actionPanel", false);
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>
