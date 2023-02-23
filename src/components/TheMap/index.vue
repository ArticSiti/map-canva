<template>
  <div class="map-vue">
    <button id="draw">рисовать</button>
    <div id="container" style="position: relative">
      <div id="map"></div>
      <canvas
        id="draw-canvas"
        style="position: absolute; left: 0; top: 0; display: none"
      ></canvas>
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
    ymaps.ready(this.mapInit);
  },
  methods: {
    mapInit() {
      let i;
      let pl;
      let coords = [
        {
          id: 1,
          center: [21.425060, 39.819982]
        },
        {
          id: 2,
          center: [21.424975, 39.833812]
        },
        {
          id: 3,
          center: [21.415822, 39.818945]
        }
      ];
      let myMap = new ymaps.Map("map", {
        center: [21.422463, 39.825928],
        zoom: 14,
      });

      coords.forEach(item => {
        pl = new ymaps.Placemark(item.center);
        myMap.geoObjects.add(pl);
      })
    },
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
  min-height: 300px;
}
</style>
