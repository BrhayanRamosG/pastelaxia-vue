<template>
  <div class="flex flex-col md:flex-row justify-center gap-8">
    <section>
      <h1 class="font-bold text-xl">Dirección</h1>
      <p class="text-base">
        Avenida Saturno número 89 esquina con Júpiter 58932F
      </p>
    </section>
    <section>
      <h1 class="font-bold text-xl">Teléfono</h1>
      <p class="text-base">01-800-pastelaxia</p>
    </section>

    <section>
      <h1 class="font-bold text-xl">Horarios</h1>
      <div class="flex flex-row columns-2">
        <ul>
          <li
            class="list-inside list-none font-bold capitalize"
            v-for="(horario, index) in horarios"
            :key="index"
          >
            {{ horario.dia }}
          </li>
        </ul>

        <ul>
          <li
            class="list-none ml-2"
            v-for="(horario, index) in horarios"
            :key="index"
          >
            {{ horario.hora }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    const horarios = [
      { dia: "lunes", hora: "08:00 - 22:00" },
      { dia: "martes", hora: "08:00 - 22:00" },
      { dia: "miércoles", hora: "08:00 - 22:00" },
      { dia: "jueves", hora: "08:00 - 22:00" },
      { dia: "viernes", hora: "08:00 - 22:00" },
      { dia: "sábado", hora: "10:00 - 18:00" },
      { dia: "domingo", hora: "10:00 - 14:00" },
    ];
    return {
      horarios,
    };
  },
};
</script>
