<template>
	<div id="game">
		<transition-group
			mode="out-in"
			enter-active-class="animate__animated animate__fadeInDown"
			leave-active-class="animate__animated animate__bounceOutUp"
		>
			<NewGamePanel v-if="!gameStarted" />

			<ActionPanel v-if="actionPanel && gameStarted && !gameFinished" />

			<FinishGamePanel
				v-if="gameStarted && gameFinished && !highscorePanel"
			/>
			<Highscores v-if="gameStarted && gameFinished && highscorePanel" />
		</transition-group>

		<transition
			mode="out-in"
			enter-active-class="animate__animated animate__fadeIn"
			leave-active-class="animate__animated animate__bounceOutUp"
		>
			<Board v-show="gameStarted && !gameFinished" />
		</transition>
		<Throw v-if="gameStarted && !gameFinished" />

		<Credits />
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	import Board from "@/components/Board.vue";
	import Credits from "@/components/Credits.vue";
	import NewGamePanel from "@/components/NewGamePanel.vue";
	import FinishGamePanel from "@/components/FinishGamePanel.vue";
	import ActionPanel from "@/components/ActionPanel.vue";
	import Highscores from "@/components/Highscores.vue";
	import Throw from "@/components/Throw.vue";

	export default {
		name: "Home",
		components: {
			Board,
			Credits,
			NewGamePanel,
			Throw,
			ActionPanel,
			FinishGamePanel,
			Highscores,
		},
		computed: {
			...mapGetters([
				"gameStarted",
				"gameFinished",
				"actionPanel",
				"highscorePanel",
			]),
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
