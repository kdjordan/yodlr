<script setup>
	import Navbar from './components/Navbar.vue';
	import './style.css';
</script>

<template>
	<div class="flex flex-col">
		<header class="border-b-2 bg-slate-200">
			<Navbar />
		</header>
		<main className="h-screen">
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</main>
	</div>
</template>

<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
