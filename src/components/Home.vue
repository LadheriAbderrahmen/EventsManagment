<template>
        <div v-if="EventDataRedux.length === 0" class="h-[80vh]  flex items-center justify-center ">
            <div class="flex flex-col gap-3 justiy-center items-center">
            <font-awesome-icon icon="calendar-days" class="w-[13rem] h-[13rem] text-orange-400"/>
                <p class="text-gray-700 font-semibold">create you event Here !</p>
        </div>
        </div>

    <div v-for="(item , index) in EventDataRedux" class="flex flex-col mt-5 ">
        <EventCard :EventId="item.EventId" :name='item.EventName' :date="item.EventDate" :desc="item.descripion" :loco="item.Location" :cap="item.Capacity"/>
    </div>
</template>

<script setup>

    import EventCard from './EventCard.vue';
    import {ref , onMounted} from 'vue';
    import store from '../store/store'

    let EventDataRedux=ref([])

    onMounted(()=>{
        EventDataRedux.value = store.getState().EventsReducer.Events
        store.subscribe(()=>{
            EventDataRedux.value = store.getState().EventsReducer.Events
        })
    })


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