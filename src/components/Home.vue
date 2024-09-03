<template>
    <div v-for="(item , index) in Eventsdata" class="flex flex-col mt-4">
        <EventCard :name='item.name' :date="item.date" :desc="item.desc"/>
    </div>
</template>

<script setup>

    import EventCard from './EventCard.vue';

    const Eventsdata=[
        {
            name : "beach party",
            date: "03/09/2024",
            desc:'beach party in gammarth '
        },
        {
            name : "pool party",
            date: "03/09/2024",
            desc:'beach party in dubai '
        },
        {
            name : "party",
            date: "03/09/2024",
            desc:'beach party in hammamet '
        },
    ]
</script>

<style></style>