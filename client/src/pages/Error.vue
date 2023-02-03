<template>
    <div class="container mx-auto w-full flex flex-col items-center h-screen mt-24">
        <div class="flex flex-col gap-4 md:gap-8 items-center p-6 border border-1-gray-700 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-md mb-8">
            <h3 class="lg:text-9xl md:text-7xl text-5xl">404</h3>
            <h3 class="lg:text-9xl md:text-7xl text-5xl">No such route</h3>
            <button 
            @click="() => this.$router.push('/')"
            class="py-2 px-4 w-2/3 bg-gray-600 rounded shadow-md border border-transparent text-zinc-200 tracking-wider text-xl hover:bg-transparent hover:text-lime-600 hover:border hover:border-lime-600"
            >GO SAFELY
            </button>
        </div>
	</div>
</template>

