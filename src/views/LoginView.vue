<!-- eslint-disable prettier/prettier -->
<template>
  <div>
		<LoginForm/>
	</div>
		
</template>
<!-- eslint-disable prettier/prettier -->

<script>
	import LoginForm from "../components/LoginForm.vue";
	export default{
		name:"LoginView",
		components: {
			LoginForm, 
		}	
	}
</script>