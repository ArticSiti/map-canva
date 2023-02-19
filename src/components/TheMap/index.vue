<template>
	<div class="map-vue">
	<button id="draw">рисовать</button>
	<div id="container" style="position: relative;">
		<div id="map"></div>
		<canvas id="draw-canvas" style="position: absolute; left: 0; top: 0; display: none;"></canvas>
	</div>
	</div>
</template>

<script>
export default {
  name: "index",
  computed: {},
  props: {},
  data: () => ({}),
  mounted() {
  },
  methods:{},

}
</script>

<style lang="scss" scoped>
#map {
	width: 100%;
	height: 100%;
	min-height: 300px;
}
</style>