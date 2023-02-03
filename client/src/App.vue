<script setup>
	import Navbar from './components/Navbar.vue';
	import './style.css';
</script>

<template>
	<div class="flex flex-col min-w-full">
		<header class="border-b-2 bg-slate-200 w-full">
			<Navbar />
		</header>
		<main className="h-screen">
			<router-view></router-view>
		</main>
	</div>
</template>
