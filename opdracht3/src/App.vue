<template>
    <div id="app">
        <p class="text-2xl font-bold mb-6">Beelders opdracht 3 (Vue)</p>
        <div class="buttons">
            <button
                @click="sort('name')"
                type="button"
                class="bg-blue-50 px-6 mx-2 py-2 rounded-full"
                :class="sortBy == 'name' ? 'bg-blue-100' : ''"
            >
                Naam
            </button>
            <button
                @click="sort('age')"
                type="button"
                class="bg-blue-50 px-6 mx-2 py-2 rounded-full"
                :class="sortBy == 'age' ? 'bg-blue-100' : ''"
            >
                Leeftijd
            </button>
        </div>
        <div class="lists flex w-300 mt-4 justify-center">
            <Users
                :users="users"
                :sortBy="sortBy"
                :sortDirection="sortDirection"
                type="original"
                @swapElement="swapElement"
            />
            <Users
                :users="selectedUsers"
                :sortBy="sortBy"
                :sortDirection="sortDirection"
                type="selected"
                @swapElement="swapElement"
            />
        </div>
    </div>
</template>

<script>
import Users from "./components/Users";
import data from "./data";

export default {
    name: "App",
    components: {
        Users,
    },
    data() {
        return {
            sortBy: "name",
            sortDirection: false,
            users: [],
            selectedUsers: [],
        };
    },
    mounted() {
        this.users = data;
    },
    methods: {
        sort(type) {
            this.sortBy == type
                ? (this.sortDirection = !this.sortDirection)
                : (this.sortBy = type);
        },
        swapElement(payload) {
            const { index, user, type } = payload;
            if (type == "original") {
                this.users.splice(index, 1);
                this.selectedUsers.push(user);
            } else {
                this.selectedUsers.splice(index, 1);
                this.users.push(user);
            }
        },
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
button:focus {
    outline: none !important;
}
</style>
