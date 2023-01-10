<template>
  <nav class="flex flex-row h-10 w-full bg-blue-300 items-center">
    <li
      v-for="{ name, href } in navs"
      class="text-md font-semibold list-none p-4"
    >
      <a :href="href" class="">
        {{ name }}
      </a>
    </li>
  </nav>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

interface Navs {
  name: string;
  href: string;
}

export default defineComponent({
  name: "Navbar",
  setup() {
    const navs = ref<Navs[]>([
      {
        name: "Home",
        href: "/",
      },
    ]);

    return {
      navs,
    };
  },
});
</script>
