<template>
  <div class="text-4xl font-bold mb-4">Dog List</div>
  <div v-for="dog in dogs" :key="dog.dogNum">
    <div class="bg-gray-200 mb-4 shadow p-2 rounded">
      <div class="text-2xl font-semibold"><router-link :to="`/dog/${dog.dogNum}`">{{ dog.regName }}</router-link></div>
      <div class="mt-2 bg-gray-400 p-2 text-gray-700 rounded">{{ dog.regNo }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dogs: []
    };
  },
  methods: {
    fetchDogs() {
      fetch("http://localhost:8081/dog/all")
        .then(response => response.json())
        .then(data => (this.dogs = data));
    }
  },
  mounted() {
    this.fetchDogs();
  }
};
</script>

<style></style>