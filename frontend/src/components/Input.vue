<template>
  <div
    class="flex flex-row h-20 w-full bg-gray-200 justify-center items-center"
  >
    <input
      @input="onSearchQuery"
      class="h-12 w-full max-w-xl p-2 border-none rounded-md indent-2"
      ref="inputRef"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, defineEmits, ref, onMounted } from "vue";

export default defineComponent({
  name: "Input",
  setup(_, { emit }) {
    const inputRef = ref<HTMLInputElement>();

    const onSearchQuery = (e: Event) => {
      emit("onSearch", (e.target as HTMLInputElement).value);
    };

    const onFocus = () => {
      inputRef.value?.focus();
    };

    onMounted(() => {
      onFocus();
    });

    return {
      onSearchQuery,
      inputRef,
    };
  },
});
</script>
<style scoped></style>
