<template>
    <div class="flex">
        <div class="sm:hidden"><font-awesome-icon icon="bars" /></div>
        <div class="hidden sm:block">
            <SideBar />
        </div>
        <div class="bg-white w-full h-screen ">
            <div class="mt-10 sm:mx-10 max-h-[80vh] overflow-auto">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script setup>

import SideBar from '../components/SideBar.vue'

</script>

<style></style>