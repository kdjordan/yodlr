<script>
	import * as Api from '../Api.js';
	import { ref, onMounted } from 'vue';

	export default {
		setup() {
			const data = ref('');

			onMounted(async () => {
				const response = await Api.getUsers();
				data.value = response.data;
			});

			return { data };
		},
		methods: {
			gotoUser(id) {
				this.$router.push(`/users/${id}`);
			},
		},
	};
</script>

<template>
	<div class="container mx-auto w-full min-h-screen pb-10">
		<h2 class="text-3xl text-center mt-8 mb-2">
			WELCOME BACK ADMIN !
		</h2>
		<h2 class="text-xl text-center mb-8 uppercase">
			: Here is all of our Users :
		</h2>
		<div
			class="container flex gap-10 flex-wrap items-center justify-evenly"
		>
			<div
				v-for="(item, index) in data"
				:key="index"
				class="w-2/3 md:w-1/2 lg:w-1/4 p-4 mx-auto bg-gray-400 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20 mt-8 border border-gray-800"
			>
				<div
					class="flex flex-col items-center pb-10 hover:bg-gray-600 cursor-pointer"
					@click="gotoUser(`${item.id}`)"
				>
					<div
						class="flex items-center justify-center mx-auto w-24 h-24 mb-6 mt-6 bg-gray-600 rounded-full shadow-lg text-3xl font-bold text-lime-400"
					>
						{{ item.firstName.slice(0, 1)
						}}{{ item.lastName.slice(0, 1) }}
					</div>
					<h5 class="mb-1 text-xl text-gray-900 dark:text-white">
						{{ item.firstName }} {{ item.lastName }}
					</h5>
					<span class="text-sm text-gray-500 dark:text-gray-400">{{
						item.email
					}}</span>
					<div class="flex mt-4 space-x-3 md:mt-6">
						<span
							class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-600 bg-lime-400 rounded-lg"
							>STATUS : {{ item.state }}</span
						>
						<span
							class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
							>ID: {{ item.id }}</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
