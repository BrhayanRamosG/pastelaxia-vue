<template>
  <div>
    <h1 class="font-bold text-xl mb-2">Adornos</h1>
    <table class="border-collapse border-4 border-slate-500 table-auto w-full">
      <thead class="h-12">
        <tr class="bg-sky-700 text-xl border-x border-y">
          <th>#</th>
          <th>Adorno</th>
          <th>Cantidad restante</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(value, index) in adornos" :key="value.id">
          <tr
            v-if="value.id != 0"
            :class="[
              'h-10 bg-gray-600 capitalize text-center text-lg border-x border-y hover:bg-sky-900 hover:text-white',
              value.cantidad == 0 && 'bg-red-400 hover:bg-red-600',
            ]"
          >
            <td class="font-bold">
              {{ index }}
            </td>
            <td class="">
              {{ value.adorno }}
            </td>
            <td class="font-bold">
              {{ value.cantidad }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup(props) {
    const store = useStore();
    const adornos = computed(() => {
      return store.state.adornosPastel;
    });
    return { props, adornos };
  },
};
</script>
