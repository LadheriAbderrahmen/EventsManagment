<template>
    <form @submit.prevent="HandleSubmit" action=""
        class="flex flex-col items-center  border-black sm:px-20 py-[1rem] rounded-[20px]">
        <div class="flex flex-wrap w-full">
            <div v-for="(item, index) in CreateEventfield1" :key="index" class="w-1/2 flex flex-col p-3">
                <label :for="item.name">{{ item.label }}</label>
                <input v-model="formData[item.name]" :type="item.type" :name="item.name"
                    class="sm:w-full h-[2rem] rounded border-[1px] border-gray-400 focus:outline-none focus:border-[#0096FF]">
            </div>
        </div>

        <div class="flex w-10/12 sm:w-full flex-col mt-5">
            <label for="Description">Description</label>
            <textarea v-model="formData.descripion" name="descripion" class="border-[1px] rounded border-gray-700 "
                cols="70" rows="3"></textarea>
        </div>


        <div class="flex justify-end w-full mt-5 mr-20 sm:mr-0">
            <button v-if="props.onEdit" type="submit"
                class="border-[1px] font-bold text-base  border-black rounded-[10px] py-1 px-2  w-40  ml-10 mt-5">Edit</button>
            <button v-if="!props.onEdit" type="submit"
                class="border-[1px] font-bold text-base  border-black rounded-[10px] py-1 px-2  w-40  ml-10 mt-5">Submit</button>
        </div>
    </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import store from '../store/store';
import { v4 as uuidv4 } from 'uuid';


const props = defineProps({
    onEdit: Boolean,
    EventId: String,
    EventName: String,
    Eventtype: String,
    EventDate: String,
    Time: String,
    Location: String,
    Capacity: String,
    descripion: String,
    closeModelfnc: Function
});

const id = ref('')

const newid = () => {
    id.value = uuidv4()
}


const formData = ref({
    EventId: props.EventId || '',
    EventName: props.EventName || '',
    Eventtype: props.Eventtype || '',
    EventDate: props.EventDate || '',
    Time: props.Time || '',
    Location: props.Location || '',
    Capacity: props.Capacity || '',
    descripion: props.descripion || ''

})

const events = ref([])

onMounted(() => {
    events.value = store.getState().EventsReducer.Events
    store.subscribe(() => {
        events.value = store.getState().EventsReducer.Events
    })
})
const addEvent = (data) => {
    store.dispatch({
        type: 'AddEvent',
        data: [data]
    })
}
const resetForm = () => {
    formData.value = {
        EventId: '',
        EventName: '',
        Eventtype: '',
        EventDate: '',
        Time: '',
        Location: '',
        Capacity: '',
        descripion: ''
    };
};
const HandleSubmit = () => {
    if (props.onEdit) {
        store.dispatch({
            type: "EditEvent",
            data: {
                EventId: props.EventId,
                EventName: formData.value.EventName,
                Eventtype: formData.value.Eventtype,
                EventDate: formData.value.EventDate,
                Time: formData.value.Time,
                Location: formData.value.Location,
                Capacity: formData.value.Capacity,
                descripion: formData.value.descripion
            }
        })

        props.closeModelfnc();

    } else {
        newid()
        addEvent({
            EventId: id.value,
            EventName: formData.value.EventName,
            Eventtype: formData.value.Eventtype,
            EventDate: formData.value.EventDate,
            Time: formData.value.Time,
            Location: formData.value.Location,
            Capacity: formData.value.Capacity,
            descripion: formData.value.descripion
        });
        resetForm()
    }
}



let CreateEventfield1 = [
    {
        type: 'text',
        label: 'Event Name',
        name: 'EventName'
    },
    {
        type: 'text',
        label: 'Event type',
        name: 'Eventtype'
    },
    {
        type: 'date',
        label: 'Date',
        name: 'EventDate'
    },
    {
        type: 'time',
        label: 'Time',
        name: 'Time'
    },
    {
        type: 'Location',
        label: 'Location',
        name: 'Location'
    },
    {
        type: 'Capacity',
        label: 'Capacity',
        name: 'Capacity'
    }
]



</script>