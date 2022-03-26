<template>
  <div class="flex flex-col justify-center gap-4 mb-5">
    <h1 class="font-bold text-xl">Sabores</h1>
    <div class="flex flex-row columns-2">
      <ul>
        <li
          class="list-inside list-decimal font-bold capitalize"
          v-for="(value, index) in saboresPastel"
          :key="index"
        >
          {{ value.sabor }}
        </li>
      </ul>
      <ul class="ml-2">
        <li
          class="list-none"
          v-for="(value, index) in saboresPastel"
          :key="index"
        >
          ----------- ${{ value.precio }} MXN
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const saboresPastel = computed(() => {
      return store.state.saboresPastel;
    });
    return { saboresPastel };
  },
};
</script>
