<template>
  <div>
    <div class="text-4xl font-bold">{{ dog.regName }}</div>
    <div>{{ dog.regNo }}</div>
    <img v-bind:src="dog.dogImg[0].url"/>
    <div class="italic mt-4">Owner: <span class="text-red-500">Victoria Maciver</span></div>
  </div>
</template>

<script>
import useDogs from "@/composables/site/dogs";
import router from "@/router";

export default {
  setup() {
    const { currentRoute } = router;
    const { fetchDog, dog } = useDogs();
    fetchDog(currentRoute.value.params.id);
    return { dog };
  }

};
</script>

<style></style>