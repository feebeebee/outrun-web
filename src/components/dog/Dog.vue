<template>
  <div>
    <div class="text-4xl font-bold">{{ dog.regName }}</div>
    <div>{{ dog.regNo }}</div>
    <!-- <img :src="dogImg"/> -->
    <img v-bind:src="getImg(dog.dogImg)" class="dog-img">
    <div><b>Registered Name: </b>{{ dog.regName }}</div>
    <div><b>Call Name: </b>{{ dog.callName }}</div>
    <div><b>Sex: </b>{{ dog.sex }}</div>
    <div><b>Date of Birth: </b>{{ dog.dateOfBirth }}</div>
    <div><b>Country of Birth: </b>{{ dog.landOfBirth }}</div>
    <div><b>Country of Standing: </b>{{ dog.landOfStanding }}</div>
    <div><b>Coat type: </b>{{ dog.coat }}</div>
    <br>
    <div><b>Sire: </b><span v-if="familyTree[1] != null"> <router-link :to="`/dog/${dog.sireId}`">{{ familyTree[1].regName }}</router-link></span></div>
    <div><b>Dam: </b><span v-if="familyTree[2] != null"> <router-link :to="`/dog/${dog.damId}`">{{ familyTree[2].regName }}</router-link></span></div>
    <br>

    <div v-if="children != undefined && children.length >= 1"><b>Children:</b><br>
      <ul>
        <li v-for="child in children" :key="child.id">
          <router-link :to="`/dog/${child.id}`">{{ child.regName }}</router-link>
        </li>
      </ul>
    </div>
    <br>

    <div v-if="siblings != undefined && siblings.length >= 1"><b>Siblings:</b><br>
      <ul>
        <li v-for="sibling in siblings" :key="sibling.id">
          <router-link :to="`/dog/${sibling.id}`">{{ sibling.regName }}</router-link>
        </li>
      </ul>
    </div>
    <!-- <img :src="getPhotoUrl()"> -->
    <!-- <div class="italic mt-4">Owner: <span class="text-red-500"></span></div> -->
  </div>
</template>

<script>
import useDogs from "@/composables/dog/dogs";
import router from "@/router";
// import { ref } from 'vue';
// import DogImg from '@/models/dogimg';

export default {
  setup() {
    const { currentRoute } = router;
    const { fetchDog, familyTree, dog, children, siblings } = useDogs();
    const PATH_PREFIX = "/images/";

    fetchDog(currentRoute.value.params.id);

    function getImg(url) {
      return PATH_PREFIX + url;
    }

    return { familyTree, dog, getImg, children, siblings };
  }

};
</script>

<style></style>