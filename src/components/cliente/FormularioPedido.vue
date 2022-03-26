<template>
  <div class="mt-5">
    <div class="md:grid md:grid-cols-2 md:gap-6">
      <div class="mt-5 ml-5 mr-5 md:mt-0 md:col-span-2">
        <form @submit="sendForm">
          <div class="shadow-md overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-gray-600 sm:p-6">
              <h2 class="font-bold text-xl mb-3">Formulario pedido</h2>
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-100"
                    >Nombre(s)</label
                  >
                  <input
                    v-model="pedido.nombre"
                    type="text"
                    name="first-name"
                    id="first-name"
                    class="bg-gray-700 placeholder:text-gray-200 mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Escribe tu nombre"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-100"
                    >Apellidos</label
                  >
                  <input
                    v-model="pedido.apellidos"
                    type="text"
                    name="last-name"
                    id="last-name"
                    class="bg-gray-700 placeholder:text-gray-200 mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Escribe tus apellidos"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-100"
                    >Correo electrónico</label
                  >
                  <input
                    v-model="pedido.email"
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    class="bg-gray-700 placeholder:text-gray-200 mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Escribe tu correo electrónico"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="telephone"
                    class="block text-sm font-medium text-gray-100"
                    >Teléfono</label
                  >
                  <input
                    v-model="pedido.telefono"
                    maxlength="10"
                    type="tel"
                    name="telephone"
                    id="telephone"
                    class="bg-gray-700 placeholder:text-gray-200 mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Escribe tu número de teléfono"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-100"
                    >Descripción</label
                  >
                  <textarea
                    v-model="pedido.descripcion"
                    id="description"
                    class="bg-gray-700 placeholder:text-gray-200 mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Escribe la descripción de tu pastel"
                    name="description"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <SaboresPastel v-model="pedido.idSabor" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <AdornosPastel v-model="pedido.idAdorno" />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-500 text-right sm:px-6">
              <h2 class="text-xl font-bold mb-4">
                Total: {{ getFormatPrice }} MXN
              </h2>
              <button
                @click="sendForm"
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Realizar pedido
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SaboresPastel from "@/components/cliente/SaboresPastel.vue";
import AdornosPastel from "@/components/cliente/AdornosPastel.vue";
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {
    SaboresPastel,
    AdornosPastel,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const initialState = {
      nombre: null,
      apellidos: null,
      email: null,
      telefono: null,
      descripcion: null,
      sabor: null,
      adorno: null,
      precio: null,
      idSabor: null,
      idAdorno: null,
    };
    const pedido = reactive({ ...initialState });

    const getFormatPrice = computed(() => {
      return store.getters.getFormatPrice;
    });

    const getPrice = computed(() => {
      return store.getters.getPrice;
    });

    const getNombreSabor = computed(() => {
      return store.getters.getNombreSabor(pedido.idSabor);
    });

    const getNombreAdorno = computed(() => {
      return store.getters.getNombreAdorno(pedido.idAdorno);
    });

    const checkForm = () => {
      const lengthPedido = Object.keys(pedido).length;
      let contador = 0;
      for (const key in pedido) {
        if (pedido[key] != null) contador++;
      }
      if (lengthPedido == contador) {
        return true;
      } else {
        return false;
      }
    };

    const sendForm = (e) => {
      pedido.precio = getPrice.value;
      pedido.sabor = getNombreSabor.value;
      pedido.adorno = getNombreAdorno.value;
      if (checkForm()) {
        store.commit("agregarPedido", pedido);
        store.commit("actualizarCantidadSabor", pedido.idSabor);
        store.commit("actualizarCantidadAdorno", pedido.idAdorno);
        alert("Pedido registrado con éxito");
        router.push("pastelero");
      } else {
        alert("Debes ingresar todos los datos del formulario");
      }
      e.preventDefault();
    };

    return { pedido, sendForm, getFormatPrice };
  },
};
</script>
