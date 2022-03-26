<script setup>
import InfoSaboresPastel from "@/components/cliente/InfoSaboresPastel.vue";
import InfoAdornosPastel from "@/components/cliente/InfoAdornosPastel.vue";
import FormularioPedido from "@/components/cliente/FormularioPedido.vue";
</script>

<template>
  <div class="bg-gray-600 rounded-md shadow-md mx-5 my-5">
    <h1 class="font-bold text-2xl text-center mt-5">-----Menú-----</h1>
    <div
      class="flex flex-col columns-2 sm:flex-row gap-12 mx-5 my-5 justify-center"
    >
      <InfoSaboresPastel />
      <hr class="border-sky-400 justify-center sm:h-auto border-2 sm:mx-5 sm:my-5" />
      <InfoAdornosPastel />
    </div>
  </div>
  <hr class="border-sky-700 border-2 mx-5 my-5" />
  <FormularioPedido />
</template>
