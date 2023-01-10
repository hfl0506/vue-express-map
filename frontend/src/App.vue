<template>
  <div class="flex flex-col w-full h-full">
    <Navbar />
    <Input @onSearch="onHandleSearch" />
    <Map :restaurants="restaurants"></Map>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import Input from "./components/Input.vue";
import Map from "./components/Map.vue";
import Navbar from "./components/Navbar.vue";
import { RestaurantResponse } from "./api/restaurants/schema";
import { getRestaurants } from "./api/restaurants";

export default defineComponent({
  name: "App",
  components: {
    Input,
    Map,
    Navbar,
  },
  setup() {
    const inputRef = ref<string>("");
    const restaurants = ref<RestaurantResponse[]>([]);

    const onHandleSearch = async (emit: any) => {
      console.log(emit);
    };

    const getData = async () => {
      const resp = await getRestaurants();
      console.log(resp);
      restaurants.value = resp;
    };

    onBeforeMount(() => {
      getData();
    }),
      onMounted(() => {});

    return { inputRef, onHandleSearch, restaurants };
  },
});
</script>
