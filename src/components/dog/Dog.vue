<template>
  <div>
    <div class="text-4xl font-bold">{{ dog.regName }}</div>
    <div>{{ dog.regNo }}</div>
    <!-- <img :src="dogImg"/> -->
    <img v-bind:src="getImg(dog.dogImg)">
    <!-- <img :src="getPhotoUrl()"> -->
    <!-- <div class="italic mt-4">Owner: <span class="text-red-500"></span></div> -->
  </div>
</template>

<script>
import useDogs from "@/composables/dog/dogs";
import router from "@/router";
// import ref from 'vue';
// import DogImg from '@/models/dogimg';

export default {
  setup() {
    const { currentRoute } = router;
    const { fetchDog, dog } = useDogs();
    const PATH_PREFIX = "/images/";

    fetchDog(currentRoute.value.params.id);

    function getImg(url) {
      return PATH_PREFIX + url;
    }


    // function getPhotoUrl() {
    //   console.log(dog.dogImg);
    //   return process.env.BASE_URL + "/" + dogNum.value, dogImg.value;
    // }

    // const dogImg = require("./assets/dogs/" + dog.dogNum + "-" + dog.dogImg[0].url);
    // const lolimg = process.cwd();

    return { dog, getImg };
  }

};
</script>

<style></style>