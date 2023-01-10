<template>
  <div class="h-full z-10">
    <div id="map" class="h-auto min-h-2xl"></div>
  </div>
</template>
<script lang="ts">
import { onMounted, defineComponent, PropType, watch } from "vue";
import leaflet from "leaflet";
import { RestaurantResponse } from "../api/restaurants/schema";

export default defineComponent({
  name: "Map",
  props: {
    restaurants: {
      type: Array as PropType<RestaurantResponse[]>,
      require: true,
    },
  },
  setup(props) {
    let myMap: any;
    watch(
      () => props.restaurants,
      (newVal, oldVal) => {
        newVal?.forEach((rest) => {
          leaflet.marker(rest.address.coord).addTo(myMap);
        });
      }
    );

    onMounted(() => {
      myMap = leaflet.map("map").setView([51.505, -0.09], 13);

      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(myMap);
    });
  },
});
</script>
