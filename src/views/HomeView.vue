<script setup>
import InfoSaboresPastel from "@/components/cliente/InfoSaboresPastel.vue";
import InfoAdornosPastel from "@/components/cliente/InfoAdornosPastel.vue";
import FormularioPedido from "@/components/cliente/FormularioPedido.vue";
import Logo from "@/assets/img/logo.png";
</script>

<template>
  <div
    class="flex flex-col bg-gray-600 justify-end rounded-md shadow-md mx-5 my-5"
  >
    <h1 class="font-bold text-2xl md:text-4xl text-center px-5 py-5">Bienvenido a pastelaxia</h1>
    <h2 class="font-bold text-xl md:text-3xl text-center px-5 py-5">
      Pasteles hechos con los ingredientes más deliciosos de toda la vía láctea.
    </h2>
    <img
      :src="Logo"
      alt="Logo pastelaxia"
      class="w-full h-full object-center object-cover px-5 py-5"
    />
  </div>
  <div class="bg-gray-600 rounded-md shadow-md mx-5 my-5">
    <h1 class="font-bold text-2xl text-center mt-5">-----Menú-----</h1>
    <div
      class="flex flex-col columns-2 lg:flex-row gap-12 mx-5 my-5 justify-center"
    >
      <InfoSaboresPastel />
      <hr
        class="border-sky-400 justify-center lg:h-auto border-2 lg:mx-5 lg:my-5"
      />
      <InfoAdornosPastel />
    </div>
  </div>
  <hr class="border-sky-700 border-2 mx-5 my-5" />
  <FormularioPedido />
</template>
