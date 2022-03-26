<template>
  <div>
    <h1 class="font-bold text-xl mb-2">Pedidos</h1>
    <div v-if="pedidos.length > 0" class="overflow-x-auto">
      <table
        class="border-collapse border-4 border-slate-500 table-auto min-w-full"
      >
        <thead class="h-12">
          <tr class="bg-sky-700 text-xl border-x border-y">
            <th>#</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Descripción</th>
            <th>Sabor</th>
            <th>Adorno</th>
            <th>Costo MXN</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(value, index) in pedidos"
            :key="value.id"
            class="h-10 bg-gray-600 text-center text-lg border-x border-y hover:bg-green-700 hover:text-white"
          >
            <td class="font-bold">
              {{ index + 1 }}
            </td>
            <td class="capitalize">
              {{ value.nombre }}
            </td>
            <td class="capitalize">
              {{ value.apellidos }}
            </td>
            <td class="">
              {{ value.telefono }}
            </td>
            <td class="">
              {{ value.email }}
            </td>
            <td class="">
              {{ value.descripcion }}
            </td>
            <td class="capitalize">
              {{ value.sabor }}
            </td>
            <td class="capitalize">
              {{ value.adorno }}
            </td>
            <td class="capitalize">
              {{
                new Intl.NumberFormat("es-MX", {
                  style: "currency",
                  currency: "MXN",
                  minimumFractionDigits: 2,
                }).format(value.precio)
              }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Total: {{ getTotalGanancia }} MXN</th>
          </tr>
        </tfoot>
      </table>
    </div>
    <div v-else>
      <h2 class="text-center text-2xl font-bold">
        No hay pedidos registrados.....
      </h2>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup(props) {
    window.scrollTo(0,0);
    const store = useStore();
    const getTotalGanancia = computed(() => {
      return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2,
      }).format(store.getters.getTotalGanancia);
    });
    const pedidos = computed(() => {
      return store.state.pedidos;
    });
    return { props, pedidos, getTotalGanancia };
  },
};
</script>
