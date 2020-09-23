import { ref } from "vue";

export default function useDogs() {
    let dog = ref({});
    let dogs = ref([]);
    
    function fetchDogs() {
        fetch(`http://localhost:8081/dog/all`)
            .then(response => response.json())
            .then(data => (dogs.value = data));
    }

    function fetchDog(dogNum) {
        fetch(`http://localhost:8081/dog/${dogNum}`)
            .then(response => response.json())
            .then(data => (dog.value = data));
    }

    return {fetchDogs, fetchDog, dog, dogs };
}