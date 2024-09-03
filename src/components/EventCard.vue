<template>
    <div class="flex flex-col p-4 border-[1px] border-gray-200 gap-3 rounded-[10px] ">
        <div class="flex items-center">
            <div class="text-2xl font-bold">{{ name }}</div>
            <div class=" text-gray-3OO  grow flex justify-end">{{ date }}</div>
        </div>
        <div class="text-base font-semibold text-gray-200 ">{{ desc }}</div>
    </div>
</template>

<script >
export default {
    name:'EventCard',
    props:{
        name:{
            type: String
        },
        date:{
            type: String
        },
        desc:{
            type: String
        },
    }
}
</script>