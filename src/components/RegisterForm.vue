<!-- eslint-disable prettier/prettier -->
<template>
  <div class="page">
    <div class="right">
      <h1 id="form-title">Cadastro</h1>
      <div class="allign-form">
        <form @submit.prevent="onSubmit">
          <div class="input">
            <b-icon-person id="person-icon"></b-icon-person>
            <input type="email" v-model="form.email" id="input-email" placeholder=" E-mail"/>
          </div>
          <div class="input">
            <b-icon-lock id="lock-icon"></b-icon-lock>
            <input type="password" v-model="form.password" id="input-password"  placeholder=" Senha"/>
          </div>
          <div id="validar" class="button-login">
            <ButtonLogin text="Registrar" v-on:click="onSubmit"/>
          </div>
        </form>
        <p id="forgot-password1"><a style="color:#1B2D50" href="#" v-on:click="goToAboutPage">Retorne ao Login</a></p>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<style scoped>
.allign-form{
  justify-content: center;
  padding:0 9vw;
  width: 100%;
}
div.page{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  height:100vh;
  margin: auto;
  background-color: #E4E4E4;
}

div.right{
  display:flex;
  flex-direction: column;
  width: 480px;
  align-items: center;
  background-color: #FAFBFF;
  font-family: 'Montserrat',Sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

input{
  background-color:#E4E4E4;
  color:#1B2D50;
  border-radius: 2x;
  border: none;
  width: 100%;
  margin: 0 1vw 1vw 0;
  padding: 1vw 0.5vw 0.75vw 2.2vw;
  font-size: 12px;
  font-family:'Roboto', sans-serif ;
  border-radius: 4px;
}

h1#form-title{
  text-align: center;
  font-size: 35px;
  font-style: normal;
  color:#1B2D50;
  margin: 7vw 0 7vw 0;
  font-weight: 300;
}

h1#title{
  margin: 1vw 0 4vw 0;
  color:#000000;
  font-weight: 700;
  font-size: 35px
}

.button-login{
  margin: 3.5vw 0 1vw 1vw;
  width: 90%;
}

.input-container {
  display: flex;
  width: 100%;
  position: relative; 
}

p#forgot-password1{
  margin: 0 0 1vh 1vw;
  text-align: center;
  align-items: center;
  align-content: center;
  }

.b-icon{
  margin: 0.9vw 0 0 0.7vw;
  position: absolute;
  color: #1B2D50;
}

@media screen and (max-width: 760px){
  p#forgot-password{
  margin: 0 0 1vh 0;
  }
  @media screen and (max-width: 600px){
    #lock-icon{
      display: none;
    }
    #person-icon{
      display: none;
    }
  }
}
</style>
<!-- eslint-disable prettier/prettier -->
<script>
  import ButtonLogin from "../components/ButtonLogin.vue";
  import {apiPublic} from '@/services/api';

  export default{
    name:"RegisterForm",

    components:{
      ButtonLogin,
    },
    
    data: () => ({
      form:{
        email: null,
        password: null,
      },
    }),
    
    methods:{
      goToAboutPage(){
        this.$router.push('/');
      },

      async onSubmit(){
        await apiPublic.post('/auth/register', this.form)
        .then(resposta => {
          console.log(resposta);
          alert("Cadastro realizado com sucesso!");
        })
        .catch(erro => console.log(erro))
      }
   }

}
</script>