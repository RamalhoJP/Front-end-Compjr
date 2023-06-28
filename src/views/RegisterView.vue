<!-- eslint-disable prettier/prettier -->
<template>
  <div>
		<RegisterForm/>
	</div>
		
</template>
<!-- eslint-disable prettier/prettier -->

<script>
	import RegisterForm from "../components/RegisterForm.vue";
	export default{
		name:"RegisterView",
		components: {
			RegisterForm, 
		}
	}
</script>