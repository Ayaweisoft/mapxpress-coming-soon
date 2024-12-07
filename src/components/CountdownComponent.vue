<script setup lang="ts">

import {onMounted, ref} from "vue";

export interface ICountDown {
  days: number,
  hours: number,
  minutes: number,
  seconds: number
}

const countDown = ref<ICountDown>({days: 0, hours: 0, minutes: 0, seconds: 0});

const props = defineProps<{ day: string | number; month: string | number; year: string | number }>();

onMounted(() => {

  const dueDate = createDate(props.day, props.month, props.year);

  if (isNaN(dueDate.getTime())) {
    console.error("Invalid dueDate format");
    return;
  }

  // Initialize the countdown values
  const now = new Date();
  let remainingSeconds = Math.floor((dueDate.getTime() - now.getTime()) / 1000);

  if (remainingSeconds <= 0) {
    return;
  }

  // Calculate initial countdown
  updateCountdown(remainingSeconds);

  const timerInterval = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      return;
    }

    remainingSeconds--; // Decrement seconds
    updateCountdown(remainingSeconds);
  }, 1000);
});

function createDate(day: string | number, month: string | number, year: string | number): Date {
  // Convert inputs to numbers
  const dayNum = parseInt(day.toString(), 10);
  const monthNum = parseInt(month.toString(), 10) - 1; // JavaScript months are 0-based
  const yearNum = parseInt(year.toString(), 10);

  // Create and return the Date object
  return new Date(yearNum, monthNum, dayNum);
}

// Function to update the countdown values
const updateCountdown = (remainingSeconds: number) => {
  countDown.value.days = Math.floor(remainingSeconds / (60 * 60 * 24));
  countDown.value.hours = Math.floor((remainingSeconds % (60 * 60 * 24)) / (60 * 60));
  countDown.value.minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
  countDown.value.seconds = remainingSeconds % 60;
};

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