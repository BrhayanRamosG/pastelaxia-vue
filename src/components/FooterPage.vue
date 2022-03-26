<template>
  <footer class="bg-sky-900 m-auto mb-0 w-full px-2 py-2">
    <div class="mx-2 my-2">
      <InformacionPasteleria />
      <p class="mt-5 font-bold text-center">{{ year }} | Pastelaxia</p>
    </div>
  </footer>
</template>

<script>
import { computed } from "vue";
import InformacionPasteleria from "@/components/cliente/InfoPasteleria.vue";

export default {
  components: { InformacionPasteleria },
  setup() {
    const year = computed(() => {
      return new Date().getFullYear();
    });
    return { year };
  },
};
</script>
