<template>
  <div class="text-4xl font-bold mb-4">All dogs</div>
  <div v-for="dog in dogs" :key="dog.id">
    <div class="bg-gray-200 mb-4 shadow p-2 rounded">
      <div class="text-2xl font-semibold">
        <router-link :to="`/dog/${dog.id}`">{{ dog.regName }}</router-link>
      </div>
      <div class="mt-2 bg-gray-400 p-2 text-gray-700 rounded">
        {{ dog.regNo }}
      </div>
    </div>
  </div>
</template>

<script>
import useDogs from "@/composables/dog/dogs";
import { onMounted } from "vue";

export default {
  setup() {
    const { dogs, fetchDogs } = useDogs();
    onMounted(() => fetchDogs());
    return { dogs };
  }
};
</script>

<style></style>