<template>
	<div id="panel">
		<h1>HighScores</h1>
		<div id="scoreContainer">
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Naam</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(score, i) of sortScore" :key="i">
						<td>{{ i }}</td>
						<td>{{ score.name }}</td>
						<td>{{ score.score }}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<a class="btn" @click="click()">Nog een keer spelen</a>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	const clickSound = new Audio(require("@/assets/sounds/click.ogg"));

	export default {
		computed: {
			...mapGetters(["scores"]),
			sortScore() {
				return this.scores.sort((a, b) => b.score - a.score);
			},
		},
		methods: {
			click() {
				clickSound.play();
				this.$store.dispatch("resetGame");
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>
