<template>
    <ul class="w-64">
        <transition-group name="flip-list">
            <li
                v-for="(user, index) in sortedUsers"
                :key="user.name"
                class="text-left cursor-pointer bg-yellow-50 px-6 mx-2 mt-2 py-2 rounded-full"
                @click="swapElement(user, index)"
            >
                {{ user.name }} - {{ user.age }}
            </li>
        </transition-group>
    </ul>
</template>

<script>
export default {
    name: "Users",
    props: {
        sortBy: {
            type: String,
            default: "",
        },
        sortDirection: {
            type: Boolean,
            default: false,
        },
        users: {
            type: Array,
            default: () => [],
        },
        type: {
            type: String,
            default: "",
        },
    },
    computed: {
        sortedUsers() {
            let sortedUsers = this.users;
            return sortedUsers.sort((p1, p2) => {
                let modifier = 1;
                if (this.sortDirection == true) modifier = -1;
                if (p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier;
                if (p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier;
                return 0;
            });
        },
    },
    methods: {
        swapElement(user, index) {
            this.$emit("swapElement", { index, user, type: this.type });
        },
    },
};
</script>

<style>
.flip-list-move {
    transition: all 0.5s;
}
</style>