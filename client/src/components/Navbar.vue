/**
*	Header navigation component.
*/
<template>
	<div
		class="container mx-auto w-full flex justify-between py-4 align-middle items-center px-4"
	>
		<div>
			<router-link to="/" class="text-3xl hover:text-gray-400 transition-all">YODLR</router-link>
		</div>
		<div class="flex w-32 justify-between">
			<router-link to="/admin" class="hover:text-gray-400 transition-all">ADMIN</router-link>
			<router-link to="/sign-up/" class="hover:text-gray-400 transition-all">SIGN UP</router-link>
		</div>
	</div>
</template>
