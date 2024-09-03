<template>
    <div class="bg-white relative h-[100vh] w-[14rem] h-full border-r-[1px] border-gray-200">
        <div class="flex border-[black] items-center  text-xl font-bold h-[5rem] pl-5">
            Logo
        </div>
        <div class="border-[red] flex flex-col gap-5 mt-10  px-5">

            <router-link to="/Home">
                <div class="text-lg font semibold cursor-pointer">
                    Home
                </div>
            </router-link>

            <router-link to="/CreateEvent">
                <div class="text-lg font semibold cursor-pointer">
                    Create Evenet
                </div>
            </router-link>

            <router-link to="#">
            <div class="text-lg font semibold cursor-pointer">
                About
            </div>
            </router-link>
        </div>

    </div>
</template>

<script>

</script>

<style></style>