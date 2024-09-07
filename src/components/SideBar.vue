<template>
    <div class="bg-white relative h-[100vh] w-[14rem] h-full border-r-[1px] border-gray-200">
        <div class="flex items-center justify-center text-3xl font-extrabold  h-[5rem] pl-5">
            Best<span class="text-orange-400">Event</span>
        </div>
        <div class="flex flex-col gap-5 mt-10 mx-5">
            <div v-for="(item) in Menu">
                <router-link :to="item.link">
                    <div class="text-lg font-semibold cursor-pointer ">
                        <button @click="currelement(item.label)" :class="{
                            ' rounded-[10px] px-5 py-[1px]': true,
                            'bg-gray-100 text-orange-400':item.label === curr

                        }">
                            <font-awesome-icon :icon="item.icon" class="mr-2 "/>
                            <span class="text-black">{{ item.label }}</span>
                        </button>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref , onMounted} from 'vue'
import store from '../store/store'

let curr = ref('')

console.log(curr.value)
onMounted(()=>{
    curr.value = store.getState().SideBarReducer.CurrElem
    store.subscribe(()=>{
        curr.value = store.getState().SideBarReducer.CurrElem
    })
})

const currelement=(label)=>{
    store.dispatch({
        type:'CurrElement',
        data: label
    })
}
let Menu = [
    {
        label: 'Home',
        link: '/Home',
        icon : 'house'
    },
    {
        label: 'Create Event',
        link: '/CreateEvent',
        icon : 'plus'
    },
]
</script>

<style></style>