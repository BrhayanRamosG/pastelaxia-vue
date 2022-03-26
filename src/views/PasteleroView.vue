<template>
  <section class="mx-5 my-5">
    <InfoPedidos />
    <hr class="border-sky-700 border-2 my-5" />
    <InfoCantidadAdornos />
    <hr class="border-sky-700 border-2 my-5" />
    <InfoCantidadSabores />
  </section>
</template>

<script>
import InfoPedidos from "@/components/pastelero/InfoPedidos.vue";
import InfoCantidadAdornos from "@/components/pastelero/InfoCantidadAdornos.vue";
import InfoCantidadSabores from "@/components/pastelero/InfoCantidadSabores.vue";

export default {
  components: { InfoPedidos, InfoCantidadAdornos, InfoCantidadSabores },
  setup() {},
};
</script>
