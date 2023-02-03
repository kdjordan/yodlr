<script>
	import { ref } from 'vue';
	import * as Api from '../Api.js';

	export default {
		setup() {
			const firstName = ref('');
			const lastName = ref('');
			const email = ref('');
			const password = ref('');

			return { firstName, lastName, email, password };
		},
		methods: {
			async submitForm() {
				try {
					await Api.addUser({
						firstName: firstName.value,
						lastName: lastName.value,
						email: email.value,
						password: password.value,
					});
					this.$router.push('/admin');
				} catch (error) {
					this.$router.push('/error');
				}
			},
		},
	};
</script>

<template>
	<div class="container mx-auto w-full">
		<div class="flex flex-col h-screen">
			<h2 class="text-3xl text-center mt-16 mb-8">SIGN UP</h2>
			<div
				class="w-5/6 md:w-3/4 lg:w-1/3 p-4 mx-auto bg-gray-400 rounded-md backdrop-filter backdrop-blur-md bg-opacity-50"
			>
				<form @submit.prevent="submitForm">
					<div class="mb-6">
						<label
							for="firstName"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>First Name</label
						>
						<input
							id="firstName"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							v-model="firstName"
							required
						/>
					</div>
					<div class="mb-6">
						<label
							for="lastName"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Last Name</label
						>
						<input
							id="lastName"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							v-model="lastName"
							required
						/>
					</div>
					<div class="mb-6">
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Email</label
						>
						<input
							id="email"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							v-model="email"
							type="email"
							required
						/>
					</div>
					<div class="mb-6">
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Password</label
						>
						<input
							id="password"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							v-model="password"
							type="password"
							required
						/>
					</div>
					<div>
						<button
							type="submit"
							class="py-2 px-4 bg-gray-600 rounded shadow-md border border-transparent text-zinc-200 tracking-wider text-xl hover:bg-transparent hover:text-lime-600 hover:border hover:border-lime-600"
						>
							SIGN UP
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
