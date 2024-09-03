<template>
  <div class="flex items-center justify-center h-screen bg-[url('../assets/manageEvenets.jpg')] bg-cover">
    <div class="border-[1px] border-[black] py-20 pt-[4rem] px-10 rounded-[10px] bg-transparent">
      <div class="font-bold text-2xl">Login</div>
      <form @submit.prevent="handlesubmit" class="mt-5">
        <div v-for="(item, index) in LoginForm" class="flex flex-col gap-2 mt-2">
          <label v-if="item.type !== 'submit'" :for="item.name" class="font-bold text-gray-500">{{ item.name }}</label>

          <input v-if="item.type !== 'submit'" :type="item.type" v-model="userInfo[item.name]" :name="item.name"
            class="self-start sm:w-[20rem] sm:h-[2rem] rounded border-[1px] border-gray-400 focus:outline-none focus:border-[#0096FF] bg-transparent px-3 font-semibold" />

          <input v-if="item.type === 'submit'" type="submit" :name="item.name" :value="item.name"
            class="mt-5 sm:w-[20rem] h-[2rem] rounded border-[1px] border-gray-400 focus:outline-none focus:border-[#0096FF] ">
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';

import { ref } from 'vue';

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
  }
]
const userInfo = ref({
  email: '',
  password: ''
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
