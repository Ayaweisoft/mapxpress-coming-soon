<script setup lang="ts">

import CountdownComponent from "@/components/CountdownComponent.vue";
import UnderConstructionSvg from "@/components/UnderConstructionSvg.vue";

const dueDate = new Date("12-25-2024");

</script>

<template>
  <main class="px-5 pb-10 md:px-16 mx-auto w-full max-w-[1200px]">
    <div class="grid md:grid-cols-2 grid-cols-1 md:min-h-[70vh] items-center gap-5">
      <div class="flex md:scale-150 md:order-1 pt-12 md:pt-0">
        <under-construction-svg/>
      </div>
      <div class="md:pe-16 pt-5 md:pt-10 flex items-center justify-center">
        <div class="text-center md:text-left">
          <div class="text-[#BC457F] font-semibold py-3">COMING SOON</div>
          <div class="text-3xl md:text-4xl font-semibold">Exciting website<br/>launch coming soon!</div>
          <CountdownComponent :due-date="dueDate"/>
        </div>
      </div>
    </div>
  </main>
</template>
