<script setup lang="ts">

import CountdownComponent from "@/components/CountdownComponent.vue";
import MapxpressHero from "@/assets/mapxpress-hero.png";

</script>

<template>
  <main class="px-5 pb-10 md:px-16 mx-auto w-full max-w-[1200px]">
    <div class="grid md:grid-cols-2 grid-cols-1 md:min-h-[70vh] items-center gap-5">
      <div class="flex md:scale-150 md:order-1 pt-12 md:pt-0">
        <img :src="MapxpressHero" alt="under construction"/>
      </div>
      <div class="md:pe-16 pt-5 md:pt-10 flex items-center justify-center">
        <div class="text-center md:text-left">
          <div class="text-[#BC457F] font-semibold py-3">COMING SOON</div>
          <div class="text-3xl md:text-4xl font-semibold">Exciting website<br/>launch coming soon!</div>
          <CountdownComponent day="01" month="01" year="2025"/>
        </div>
      </div>
    </div>
  </main>
</template>
