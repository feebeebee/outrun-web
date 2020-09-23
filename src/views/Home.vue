<template>
  <div class="home">
    <DogList />
  </div>
</template>

<script>
import DogList from '@/components/dog/DogList.vue';

export default {
  name: "Home",
  components: {
    DogList
  }
};
</script>