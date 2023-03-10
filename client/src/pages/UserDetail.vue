/**
 * UserDetail Component that is rendered when dynamic path ('/users/:id') is visited
 * Shows user details and allows for updating of user information 
 * If successfull, pushes user back to Admin component
 */
<script>
	import * as Api from '../Api.js';
	import { ref, onMounted } from 'vue';
	import { useRoute } from 'vue-router';

	export default {
		setup() {
			const data = ref('');
			const route = useRoute();
			const id = ref(null);

			onMounted(async () => {
				try {
					id.value = route.params.id;
					const response = await Api.getUser(id.value);
					data.value = response.data;
				} catch (error) {
					this.$router.push('/error');
				}
			});

			return { data, id };
		},
		methods: {
			async deleteUser() {
				try {
					await Api.deleteUser(this.data, this.data.id);
					this.$router.push('/admin');
				} catch (e) {
					this.$router.push('/error');
				}
			},
			async updateUser() {
				try {
					await Api.updateUser(this.data, this.data.id);
					this.$router.push('/admin');
				} catch (e) {
					this.$router.push('/error');
				}
			},
		},
	};
</script>

<template>
	<div class="container mx-auto w-full h-screen mt-8">
		<div class="flex flex-col">
			<div
				class="w-5/6 md:w-3/4 lg:w-1/3 p-4 mx-auto bg-gray-400 rounded-md backdrop-filter backdrop-blur-md bg-opacity-50"
			>
				<form class="space-y-6" @submit.prevent="updateUser">
					<h5
						class="text-xl font-medium dark:text-white text-center uppercase tracking-widest"
					>
						Edit User ID :: {{ data.id }}
					</h5>
					<div>
						<label
							for="firstName"
							class="block mb-2 text-sm font-medium dark:text-white"
							>First Name</label
						>
						<input
							type="text"
							name="firstName"
							id="firstName"
							class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							v-model="data.firstName"
						/>
					</div>
					<div>
						<label
							for="lastName"
							class="block mb-2 text-sm font-medium dark:text-white"
							>Last Name</label
						>
						<input
							type="text"
							name="lastName"
							id="lastName"
							class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							v-model="data.lastName"
						/>
					</div>
					<div>
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>Password</label
						>
						<input
							type="password"
							name="password"
							id="password"
							v-model="data.password"
							placeholder="Enter New Password"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
						/>
					</div>
					<div class="flex w-1/2 self-start gap-2">
						<button
							type="submit"
							class="py-2 px-4 bg-gray-600 rounded shadow-md border border-transparent text-zinc-200 tracking-wider text-xl transition-all hover:bg-transparent hover:text-lime-600 hover:border hover:border-lime-600"
						>
							UPDATE
						</button>
						<button
							class="py-2 px-4 bg-gray-400 rounded shadow-md border border-transparent text-zinc-200 tracking-wider text-xl transition-all hover:bg-transparent hover:text-red-600 hover:border hover:border-red-600"
							@click.prevent="deleteUser"
						>
							DELETE
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
