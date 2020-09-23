<template>
  <div class="home">
    <DogList />
  </div>
</template>

<script>
import DogList from '@/components/site/DogList.vue';

export default {
  name: "Home",
  components: {
    DogList
  }
};
</script>