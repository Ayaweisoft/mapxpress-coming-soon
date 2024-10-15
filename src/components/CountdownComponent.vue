<script setup lang="ts">

import {onMounted, ref} from "vue";

export interface ICountDown {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

const countDown = ref<ICountDown>({days: 0, hours: 0, minutes: 0, seconds: 0});

const props = defineProps<{ dueDate: Date; }>()

onMounted(() => {
  const timerInterval = setInterval(() => {
    const today = new Date();
    const diff = Date.parse(props.dueDate.toISOString()) - Date.parse(today.toISOString());

    if (diff <= 0) {
      clearInterval(timerInterval);
      return;
    }

    countDown.value.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countDown.value.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    countDown.value.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    countDown.value.seconds = Math.floor((diff % (1000 * 60)) / 1000);
  }, 1000);
});

const outerCss = "flex flex-col justify-center bg-[#F5F7FA] px-3 py-2 md:px-5 md:py-3 items-center border rounded-md";
const innerCss = "text-md md:text-xl font-semibold"

</script>
<template>
  <div class="flex gap-x-[14px] my-8 md:my-10 justify-center md:justify-start">

    <div :class="outerCss">
      <div :class="innerCss">{{ (`${countDown.days}`).padStart(2, '0') }}</div>
      <small>Days</small>
    </div>

    <div :class="outerCss">
      <div :class="innerCss">{{ (`${countDown.hours}`).padStart(2, '0') }}</div>
      <small>Hours</small>
    </div>

    <div :class="outerCss">
      <div :class="innerCss">{{ (`${countDown.minutes}`).padStart(2, '0') }}</div>
      <small>Mins</small>
    </div>

    <div :class="outerCss">
      <div :class="innerCss">{{ (`${countDown.seconds}`).padStart(2, '0') }}</div>
      <small>Secs</small>
    </div>

  </div>
</template>