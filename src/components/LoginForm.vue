<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <div class = "page">
      <div class = "left">
        <h1 id= "title">Projeto trainee</h1>
        <p>Caso seja sua primeira vez aqui,</p>
        <p>clique <a href="#" @click="goToRegisterPage">aqui</a> para fazer o seu cadastro</p>
      </div>
      <div class="right">
        <h1 id="form-title">Iniciar Sessão</h1>
        <div class="allign-form">
          <form class="submit">
            <div class="input">
              <b-icon-person id="person-icon"></b-icon-person>
              <input type="email" v-model="form.email" class="" placeholder=" E-mail"/>
            </div>  
            <div class="input">
              <b-icon-lock id="lock-icon"></b-icon-lock>
              <input type="password" v-model="form.password" class="" placeholder=" Senha"/>
            </div>
            <div class="button-login">
              <ButtonLogin text="Entrar"/>
            </div>
          </form>
          <p id="forgot-password"><a style="color:#1B2D50" v-on:click="goToHomePage" href="#">Esqueceu a senha?</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<style scoped>
div.page{
  background-color: #C4C4C4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height:100vh;
}

div.left{
  width: 64vw;
  padding: 6vw 5vw 5vw 5vw; 
  font-family: 'Montserrat', Sans-serif;
}

div.right{
  width: 36vw;
  align-items: center;
  background-color: #FAFBFF;
  font-family: 'Montserrat', Sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.allign-form{
  justify-content: center;
  padding:0 9vw;
  width: 100%;
}

input{
  background-color:#E4E4E4;
  color:#1B2D50;
  border: none;
  width: 100%;
  margin: 0 1vw 1vw 0;
  padding: 1vw 0.5vw 1vw 2.2vw;
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

p#forgot-password{
  text-align: center;
  margin: 0 0 5vh 0;
}

p{
  margin:0;
  font-weight: 500;
}

.input-container {
  display: flex;
  width: 100%;
  position: relative;
}

#lock-icon{
  margin: 0.9vw 0.7vw 0 0.5vw;
  position: absolute;
  color: #1B2D50;
}

#person-icon{
  margin: 0.9vw 0.7vw 0 0.5vw;
  position: absolute;
  color: #1B2D50;
}
@media screen and (max-width: 760px){
  div.page {
    flex-direction: column;
  }
  div.left{
    justify-content: space-between;
    width: 100%;
    height: 35vh;
    align-items: flex-start;
  }
  div.right {
    justify-content: center;
    width: 100%;
    height: 65vh;
  }
  .button-login{
  margin: 5vh 20vw;
  width: 30%;
  }
  .allign-form{
    padding: 0 20vw;
    width: 100%;
    align-items: flex-start;
  }
  p#forgot-password{
  margin: 0 0 1vh 0;
  }

  @media screen and (max-width: 600px){
    #title{
      font-size: 10px;
    }
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

  export default{
    name:"LoginForm",

    components:{
      ButtonLogin,
    },

    data: () => ({
      form:{
        email: null,
        password: null
      }
    }),
    
    methods:{
      goToHomePage(){
        this.$router.push('/home');
      },
      goToRegisterPage(){
        this.$router.push('/register');
      }
   }
}
</script>
