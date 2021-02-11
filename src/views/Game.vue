<template>
	<div id="game">
		<transition
			mode="out-in"
			enter-active-class="animate__animated animate__fadeInDown"
			leave-active-class="animate__animated animate__bounceOutUp"
		>
			<NewGamePanel v-if="!gameStarted" />
		</transition>

		<transition
			mode="out-in"
			enter-active-class="animate__animated animate__fadeIn"
			leave-active-class="animate__animated animate__bounceOutUp"
		>
			<Board v-show="gameStarted" />
		</transition>
		<Throw v-if="gameStarted" />

		<Credits />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	import Board from "@/components/Board.vue";
	import Credits from "@/components/Credits.vue";
	import NewGamePanel from "@/components/NewGamePanel.vue";
	import Throw from "@/components/Throw.vue";

	export default {
		name: "Home",
		components: {
			Board,
			Credits,
			NewGamePanel,
			Throw,
		},
		computed: {
			...mapGetters(["gameStarted"]),
		},
	};
</script>

<style lang="scss" scoped>
	#game {
		position: relative;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
