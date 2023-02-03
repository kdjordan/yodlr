<template>
	<div>
		<div
			class="container mx-auto w-full flex flex-col items-center h-screen mt-24"
		>
			<div
				class="flex flex-col items-center p-6 border border-1-gray-700 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-md mb-8"
			>
				<div class="text-3xl uppercase text-gray-600">Welcome to</div>
				<h1
					class="text-8xl lg:text-[20rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-zinc-200 to-stone-600 mb-2"
				>
					YODLR
				</h1>
				<div class="text-xl text-gray-200 italic">
					Your Journey begins Here...
				</div>
			</div>
			<div class="flex w-2/3 m:w-1/2 justify-around">
				<button
					@click="goTo('sign-up')"
					class="py-2 px-4 bg-gray-600 rounded shadow-md border border-transparent text-zinc-200 tracking-wider text-xl hover:bg-transparent hover:text-lime-600 hover:border hover:border-lime-600"
				>
					SIGN UP
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			goTo(path) {
				this.$router.push(`/${path}`);
			},
		},
	};
</script>
