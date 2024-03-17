<script setup>
import { useRouter, useRoute } from "vue-router";
import { data, fn } from "../../data.js"
import {watch, ref} from "vue";

const route = useRoute();
const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");

const registerUser = () => {
  // console.log(name.value, email.value, password.value);
  const res = fn.fetchPublicApi(
      "/api/register",
      { name: name.value, email: email.value, password: password.value },
      "POST"
  );
  res.then((response) => {
    router.push("/user/login");
  });
}

</script>
<template>
  <div class="mx-auto w-4/12 mt-10">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Name"
        >
          Name
        </label>
        <input
            v-model="name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
        />
      </div>
      <div class="mb-4">
        <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="email"
        >
          Email
        </label>
        <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
        />
      </div>
      <div class="mb-6">
        <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
        >
          Password
        </label>
        <input
            v-model="password"
            class="shadow appearance-none borde rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
            @click="registerUser()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
        >
          Sign Up
        </button>
        <router-link
            :to="{name:'Login'}"
            class="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
        >
          Sign In
        </router-link>
      </div>
    </form>
  </div>
</template>