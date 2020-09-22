<template>
  <div class="bg-gray-500 flex flex-col min-h-screen">
    <Header />
    <div class="flex-1 flex w-2/3 mx-auto p-4 text-lg bg-white h-full shadow-lg">
      <div class="w-3/5">
        <router-view :key="$route.fullPath" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/site/header/Header.vue";
export default {
  components: {
    Header
  }
};
</script>