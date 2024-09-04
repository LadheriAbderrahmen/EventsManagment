<template>
    <div class="flex items-center justify-center">
        <div class="w-3/4">
            <form action="" class="flex flex-col items-center border-2 border-black px-20 py-[4rem] rounded-[20px]">
                <div class="flex w-full gap-3">
                    <div v-for="(item) in CreateEventfield1" class="flex flex-col flex-1">
                        <label :for="item.label">{{ item.label }}</label>
                        <input :type="item.type" :name="item.name"
                            class=" sm:w-full h-[2rem] rounded border-[1px] border-gray-400 focus:outline-none focus:border-[#0096FF]">
                    </div>
                </div>
                <div class="flex flex-col mt-5  w-full gap-5">
                    <div v-for="(item) in CreateEventField2" class="flex flex-col">
                        <label :for="item.label">{{ item.label }}</label>
                        <input :type="item.type" :name="item.name"
                            class=" sm:w-full h-[2rem] rounded border-[1px] border-gray-400 focus:outline-none focus:border-[#0096FF]">
                    </div>
                </div>
                <div class="flex w-full flex-col mt-5">
                    <label for="Description">Description</label>
                    <textarea name="descripion" class="border-[1px] rounded border-gray-700 " cols="70"
                        rows="3"></textarea>
                </div>
                <div class="flex justify-end w-full mt-5">
                    <button
        class="border-[1px] font-bold text-base  border-black rounded-[10px] py-1 px-2  w-40  ml-10 mt-5">Submit</button>
      
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

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


]
let CreateEventField2 = [
    {
        type: 'date',
        label: 'Date',
        name: 'EventDate'
    },
    {
        type: 'text',
        label: 'Music',
        name: 'Music'
    },
]



</script>