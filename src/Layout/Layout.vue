<template>
    <div class="flex ">
        <div>
            <SideBar />
        </div>
        <div class="bg-white w-full h-screen ">
            <div class="mt-10 mx-10">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script setup>

import SideBar from '../components/SideBar.vue'

</script>

<style></style>