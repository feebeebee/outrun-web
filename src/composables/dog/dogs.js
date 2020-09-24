import { ref } from "vue";

export default function useDogs() {
    let dog = ref({});
    let familyTree = ref([]);

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

    function fetchFamilyTree(dogNum) {
        fetch(`http://localhost:8081/dog/${dogNum}/familytree`)
            .then(response => response.json())
            .then(data => (familyTree.value = data));
    }

    function fetchAnother(dogNum) {
        let another = ref({});
        fetch(`http://localhost:8081/dog/${dogNum}`)
            .then(response => response.json())
            .then(data => (another.value = data));
        
        return another;
    }

    return {fetchDogs, fetchDog, fetchAnother, fetchFamilyTree, familyTree, dog, dogs };
}