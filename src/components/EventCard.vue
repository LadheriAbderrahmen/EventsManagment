<template>
    <div class="flex flex-col p-4 border-[1px] border-gray-200 gap-3 rounded-[10px] px-10 ">
        <div class="flex items-center">
            <div class="text-2xl font-semibold">{{ name }}</div>
            <div class=" text-gray-3OO text-sm grow flex justify-end">
                <div class=" gap-3 flex">
                    <div class="cursor-pointer" @click="HandleEdite(EventId)">
                        <font-awesome-icon icon="pen-to-square" class="text-[green]" />
                    </div>
                    <div class="cursor-pointer" @click="handledelete(EventId)">
                        <font-awesome-icon icon="trash" class="text-[red]" />
                    </div>
                </div>
            </div>
        </div>
        <div class="text-sm font-medium text-gray-400 ">{{ desc }}</div>
        <div class="flex text-xs">
            <div class="flex-1 ">
                {{ date }}
            </div>
            <div class="flex-1 flex justify-end gap-5">
                <div>
                    <font-awesome-icon icon="location-dot" />
                    {{ loco }}
                </div>
                <div><span class="text-[10px]">Capacite:</span> {{ cap }}</div>
            </div>
        </div>
    </div>
    <div v-show="showEditModel" @click.self="closeModel"
        class="absolute flex items-center justify-center top-0 bottom-0 right-0 left-0 h-screen backdrop-blur">
        <div class="flex flex-col w-2/3 border-2 rounded-[20px] border-black  ">
            <FormEvent :closeModelfnc="closeModel" :onEdit="true" :EventId="EventId" :EventName="name" :Eventtype="type" :EventDate="date" Time="" :Location="loco" :Capacity="cap" :descripion="desc" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import store from '../store/store';
import FormEvent from './FormEvent.vue';

const props = defineProps({
    EventId: String,
    name: String,
    date: String,
    desc: String,
    loco: String,
    cap: String,
})

let EventsData = ref([])
let showEditModel = ref(false)
onMounted(() => {
    EventsData.value = store.getState().EventsReducer.Events
    store.subscribe(() => {
        EventsData.value = store.getState().EventsReducer.Events
    })
})
const closeModel = () => {
    showEditModel.value = false
}
const HandleEdite = (id) => {
    showEditModel.value = true
}
const handledelete = (id) => {
    console.log(id)
    store.dispatch({
        type: 'DeleteEvent',
        Id: id
    })
}
</script>