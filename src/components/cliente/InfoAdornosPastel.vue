<template>
  <div class="flex flex-col justify-center gap-4 mb-5">
    <h1 class="font-bold text-xl">Adornos</h1>
    <div class="flex flex-row columns-2">
      <ul>
        <li
          class="list-inside list-decimal text-lg font-bold capitalize"
          v-for="(value, index) in adornosPastel"
          :key="index"
        >
          {{ value.adorno }}
        </li>
      </ul>
      <ul>
        <li
          class="list-none ml-2 text-lg"
          v-for="(value, index) in adornosPastel"
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
    const adornosPastel = computed(() => {
      return store.state.adornosPastel;
    });
    return { adornosPastel };
  },
};
</script>
