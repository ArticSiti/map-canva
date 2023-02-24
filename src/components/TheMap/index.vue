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
  data: () => ({
    coords: [
      {
        id: 1,
        center: [21.42506, 39.819982],
        name: "Палатка 1",
        counter: 8,
      },
      {
        id: 2,
        center: [21.424975, 39.833812],
        name: "Палатка 2",
        counter: 12,
      },
      {
        id: 3,
        center: [21.415822, 39.818945],
        name: "Палатка 3",
        counter: 22,
      },
    ],
  }),
  mounted() {
    ymaps.ready(this.mapInit);
  },
  methods: {
    mapInit() {
      let myMap = new ymaps.Map("map", {
        center: [21.422463, 39.825928],
        zoom: 14,
      });

      this.coords.forEach((item) => {
        let pl = new ymaps.Placemark(item.center, {
          balloonContentHeader: item.name,
          balloonContentBody: `${item.counter} мест`,
        });
        myMap.geoObjects.add(pl);
      });

      myMap.controls.remove("geolocationControl"); // удаляем геолокацию
      myMap.controls.remove("searchControl");
    },
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100vh;
  // min-height: 300px;
}
</style>
