<template>
  <label for="country" class="block text-sm font-medium text-gray-100"
    >Sabor</label
  >
  <select
    id="sabores"
    name="sabores"
    autocomplete="sabores-name"
    class="capitalize mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
    @change="updateValue"
  >
    <option class="bg-gray-800 text-gray-400" value="" selected disabled>
      Selecciona una opción
    </option>
    <option
      :class="[
        'bg-gray-600',
        value.cantidad < 1 && 'text-gray-400',
      ]"
      v-for="value in sabores"
      :key="value.id"
      :value="value.id"
      :disabled="value.cantidad < 1 && true"
    >
      ${{ value.precio }} MXN - {{ value.sabor }}
    </option>
  </select>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  props: { modelValue: String },
  setup(props, context) {
    const store = useStore();
    const updateValue = (event) => {
      context.emit("update:modelValue", event.target.value);
      store.commit("agregarPrecioSabor", parseInt(event.target.value));
    };
    const sabores = computed(() => {
      return store.state.saboresPastel;
    });

    return { props, sabores, updateValue };
  },
};
</script>
