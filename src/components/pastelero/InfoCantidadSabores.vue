<template>
  <div class="my-2">
    <h1 class="font-bold text-xl mb-2">Sabores</h1>
    <table class="border-collapse border-4 border-slate-500 table-auto w-full">
      <thead class="h-12">
        <tr class="bg-sky-700 text-xl border-x border-y">
          <th>#</th>
          <th>Sabor</th>
          <th>Cantidad restante</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :class="[
            'h-10 bg-gray-600 capitalize text-center text-lg border-x border-y hover:bg-sky-900 hover:text-white',
            value.cantidad == 0 && 'bg-red-400 hover:bg-red-600',
          ]"
          v-for="(value, index) in sabores"
          :key="value.id"
        >
          <td class="font-bold">
            {{ index + 1 }}
          </td>
          <td class="">
            {{ value.sabor }}
          </td>
          <td class="font-bold">
            {{ value.cantidad }}
          </td>
        </tr>
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
    const sabores = computed(() => {
      return store.state.saboresPastel;
    });
    return { props, sabores };
  },
};
</script>
