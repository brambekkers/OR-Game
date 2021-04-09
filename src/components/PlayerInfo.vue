<template>
	<div id="info">
		<p>
			Naam: <span>{{ name }}</span>
		</p>
		<p>
			Worpen: <span> {{ tries }} </span>
		</p>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		computed: {
			...mapGetters(["name", "tries"]),
		},
	};
</script>

<style lang="scss" scoped>
	#info {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 6%;
		z-index: 9999;

		display: flex;
		justify-content: space-around;
		align-items: flex-end;

		font-size: calc((0.5vmin + 0.5vmax + 0.5vw) / 3 + 12px);
		// background-color: red;

		P {
			margin: 0;

			span {
				font-weight: 800;
			}
		}
	}
</style>