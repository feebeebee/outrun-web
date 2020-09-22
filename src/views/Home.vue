<template>
  <div class="home">
    <DogList />
  </div>
</template>

<script>
import DogList from '@/components/dogs/DogList.vue';

export default {
  name: "Home",
  components: {
    DogList
  }
};
</script>