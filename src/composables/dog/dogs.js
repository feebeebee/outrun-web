import { ref } from "vue";

export default function useDogs() {
    let dog = ref({});
    let familyTree = ref([]);
    let children = ref([]);
    let siblings = ref([]);

    let dogs = ref([]);

    function fetchDogs() {
        fetch(`http://18.130.210.148:81/dog/all`)
            .then(response => response.json())
            .then(data => (dogs.value = data));
    }

    function fetchDog(dogNum) {
        fetch(`http://18.130.210.148:81/dog/${dogNum}`)
            .then(response => response.json())
            .then(data => (dog.value = data));

        fetchFamilyTree(dogNum);
        fetchChildren(dogNum);
        fetchSiblings(dogNum);
    }

    function fetchFamilyTree(dogNum) {
        fetch(`http://18.130.210.148:81/dog/${dogNum}/familytree`)
            .then(response => response.json())
            .then(data => (familyTree.value = data));
    }

    function fetchChildren(dogNum) {
        fetch(`http://18.130.210.148:81/dog/${dogNum}/children`)
            .then(response => response.json())
            .then(data => (children.value = data));
    }

    function fetchSiblings(dogNum) {
        fetch(`http://18.130.210.148:81/dog/${dogNum}/siblings`)
            .then(response => response.json())
            .then(data => (siblings.value = data));
    }

    return {fetchDogs, fetchDog, fetchFamilyTree, fetchChildren, familyTree, dog, dogs, children, siblings };
}