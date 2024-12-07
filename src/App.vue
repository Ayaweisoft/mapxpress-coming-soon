<script setup lang="ts">
import {RouterView} from 'vue-router';
import {Notifications} from "@kyvg/vue3-notification";

import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import {useHead} from "@vueuse/head";
import IconWhatsApp from "@/components/icons/IconWhatsApp.vue";
import IconLogo from "@/components/icons/IconLogo.vue";

const socials = [
  {title: 'WhatsApp', icon: IconWhatsApp, url: 'https://api.whatsapp.com/send?phone=2348068270783'},
  {title: 'Instagram', icon: IconInstagram, url: 'https://www.instagram.com/map.xpress/profilecard/'},
  {title: 'Facebook', icon: IconFacebook, url: 'https://www.facebook.com/Maplg247?mibextid=ZbWKwL'},
];

useHead({
  title: 'Mapxpress Ltd - Powered by Zebitech Global Services Ltd',
  meta: [
    {
      name: 'description',
      content: 'Mapxpress Ltd is a leading delivery company in Nigeria.'
    },
    {
      name: 'keywords',
      content: 'delivery, courier, package',
    },
    {
      name: 'og:title',
      content: 'Mapxpress Ltd is a leading delivery company in Nigeria.',
    }
  ]
})

</script>
<template>
  <div class="flex flex-col w-full min-h-screen">
    <div class="border-b">
      <header class="px-5 md:px-16 m-auto w-full py-5 max-w-[1200px]">
        <div class="flex items-center justify-center md:justify-between">
          <RouterLink to="/">
            <div class="flex items-end">
              <div>
                <IconLogo class="h-12 w-auto"></IconLogo>
              </div>
            </div>
          </RouterLink>
          <div class="gap-x-5 justify-center hidden md:flex">
            <a :href="social.url" target="_blank" v-for="(social, i) in socials" :key="i" :title="social.title"
               class="bg-[#F5F7FA] hover:bg-[#F5F7FA] border rounded h-10 w-10 flex items-center justify-center">
              <component :is="social.icon" class="w-4 scale-125"/>
            </a>
          </div>
        </div>
      </header>
    </div>
    <RouterView/>
    <notifications/>
    <div class="border-t">
      <footer class="py-5 md:px-16 m-auto w-full max-w-[1200px] text-sm flex items-center justify-center md:justify-between flex-wrap gap-4">
        <div class="flex-wrap sm:order-1">
          <div class="mb-3 text-center hidden md:block">Contact us on:</div>
          <div class="flex gap-x-5 justify-center">
            <a :href="social.url" target="_blank" v-for="(social, i) in socials" :key="i" :title="social.title"
               class="bg-[#F5F7FA] hover:bg-[#F5F7FA] border rounded h-10 w-10 flex items-center justify-center">
              <component :is="social.icon" class="w-4 scale-125"/>
            </a>
          </div>
        </div>
        <div class="text-center sm:text-left">&copy; Mapxpress Ltd. <br/>Designed by:
          <a class="underline" href="https://zebitech.com" target="_blank">Zebitech Global Services Ltd</a>.
        </div>
      </footer>
    </div>
  </div>
</template>
