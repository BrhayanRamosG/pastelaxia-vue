<template>
  <label for="street-address" class="block text-sm font-medium text-gray-100"
    >Adorno</label
  >
  <select
    id="adornos"
    name="adornos"
    autocomplete="adornos-name"
    class="capitalize mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
    @change="updateValue"
  >
    <option class="bg-gray-800 text-gray-400" value="" selected disabled>
      Selecciona una opción
    </option>

    <option
      v-for="value in adornos"
      :key="value.id"
      :class="[
        value.precio == 0 ? 'bg-yellow-600' : 'bg-gray-600',
        value.cantidad < 1 && value.id != 0 && 'text-gray-400',
      ]"
      :value="value.id"
      :disabled="value.cantidad < 1 && value.id != 0 && true"
    >
      ${{ value.precio }} MXN - {{ value.adorno }}
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
      store.commit("agregarPrecioAdorno", parseInt(event.target.value));
    };
    const adornos = computed(() => {
      return store.state.adornosPastel;
    });
    return { props, updateValue, adornos };
  },
};
</script>
