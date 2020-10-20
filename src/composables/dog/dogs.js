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

    function fetchDog(id) {
        fetch(`http://18.130.210.148:81/dog/${id}`)
            .then(response => response.json())
            .then(data => (dog.value = data));

        fetchFamilyTree(id);
        fetchChildren(id);
        fetchSiblings(id);
    }

    function fetchFamilyTree(id) {
        fetch(`http://18.130.210.148:81/dog/${id}/familytree`)
            .then(response => response.json())
            .then(data => (familyTree.value = data));
    }

    function fetchChildren(id) {
        fetch(`http://18.130.210.148:81/dog/${id}/children`)
            .then(response => response.json())
            .then(data => (children.value = data));
    }

    function fetchSiblings(id) {
        fetch(`http://18.130.210.148:81/dog/${id}/siblings`)
            .then(response => response.json())
            .then(data => (siblings.value = data));
    }

    return {fetchDogs, fetchDog, fetchFamilyTree, fetchChildren, familyTree, dog, dogs, children, siblings };
}