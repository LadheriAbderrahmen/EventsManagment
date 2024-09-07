<template>
  <div class="flex  items-center justify-center h-screen   bg-[url('../assets/cover.jpg')] bg-cover ">

    <div class="flex flex-col  items-center sm:items-start sm:flex-row w-full sm:h-[25rem]">
      <div class="flex-1 flex flex-col gap-5 ">
        <div class="sm:text-5xl font-extrabold text-orange-400  mt-10 ml-10">
          Plan Your Perfect Event with Ease <br />
          <span class="text-orange-700"> PlanMaster </span>
        </div>
        <button @click="showLogin = true"
          class="border-[1px] font-bold text-base  border-orange-400 rounded-[10px] py-1 px-2  w-40 text-orange-700 ml-10 mt-5">Planifier</button>
      </div>
      <div class="flex-1 flex justify-center mt-5 sm:mt-0">
        <div v-show="showLogin"
          class="border-[1px] border-[black] py-20 pt-[4rem] px-10 rounded-[10px] backdrop-blur  ">
          <div class="font-bold text-2xl">Login</div>
          <form @submit.prevent="handlesubmit" class="mt-5">
            <div v-for="(item, index) in LoginForm" class="flex flex-col gap-2 mt-2">
              <label v-if="item.type !== 'submit'" :for="item.name" class="font-semibold text-gray-900">{{ item.name
                }}</label>

              <input v-if="item.type !== 'submit'" :type="item.type" v-model="userInfo[item.name]" :name="item.name"
                class="self-start sm:w-[17rem] sm:h-[2rem] rounded border-[1px] border-gray-400 focus:outline-none focus:border-[#0096FF] bg-transparent px-3 font-semibold" />

              <input v-if="item.type === 'submit'" type="submit" :name="item.name" :value="item.name"
                class="mt-5 sm:w-[17rem] h-[2rem] rounded border-[1px] border-gray-400 focus:outline-none focus:border-[#0096FF] ">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';

import { ref } from 'vue';

const showLogin = ref(false)
const router = useRouter()
const LoginForm = [
  {
    type: 'text',
    name: 'email'
  },
  {
    type: 'password',
    name: 'password'
  },
  {
    type: 'submit',
    name: 'Login'
  }
]

const users = [
  {
    email: "abderrahmen@gmail.com",
    password: 'abdou123'
  },
  {
    email: 'oussema@gmail.com',
    password: 'oussema123'
  }
]
const userInfo = ref({
  email: 'oussema@gmail.com',
  password: 'oussema123'
})

const handlesubmit = () => {
  const user = users.find((u) => u.email === userInfo.value.email && u.password === userInfo.value.password)
  if (user) {
    console.log("connected successfuly")
    router.push('/Home')
  } else {
    console.log("email or password is incorrect ")
  }
}
</script>

<style scoped></style>
