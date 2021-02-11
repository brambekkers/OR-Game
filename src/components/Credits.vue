<template>
	<div id="credits">
		<div>Design: Esseline Keeven</div>
		<div>HMC OR 2020</div>
		<div>Code: Bram Bekkers</div>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	#credits {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 6%;

		display: flex;
		justify-content: space-around;
		align-items: flex-end;

		font-size: calc((0.5vmin + 0.5vmax + 0.5vw) / 3 + 12px);
	}
</style>