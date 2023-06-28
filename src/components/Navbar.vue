<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <div>
      <b-navbar id ="nav-comp" toggleable="lg" fixed="top" class="shadow p-3 mb-5 bg-white rounded">
        <b-navbar-brand href="#">
          <img src="../assets/Logo1 Com Fundo.png" v-on:click="goToLoginPage" width="50vw" height="50vh">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
                <b-nav-item id = "quem-somos">Quem somos?</b-nav-item>
                <b-nav-item href="#">Projetos</b-nav-item>
                <b-nav-item href="#">Fórum</b-nav-item>
                <b-nav-item href="#" style="padding:0 4vw 0 0">Contato</b-nav-item>
            </b-navbar-nav>
            <b-nav-form>
              <b-icon-search style="margin: 0 0 0.5 1vw" ></b-icon-search>
              <b-form-input style="padding: 0 0 0 3vw" placeholder="Pesquisar"></b-form-input>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>  
</template>
<!-- eslint-disable prettier/prettier -->
<style>

.nav-item{
  margin: 1vh 0.75vw;
  font: 'Noto Sans';
  padding: 0;
  font-family: 'Montserrat',Sans-serif;
}

.form-control{
  background: transparent;
  border-color: #000000;
  margin:0;
  font-family: 'Montserrat',Sans-serif;
}
#nav-comp{
  background-color: #B5B6B9;
}

b-nav-form{
  background: transparent;
  border-color: #000000;
}

#quem-somos{
  text-decoration: underline;
}

.b-icon{
  position: absolute;
  color: #000000;
}

b-form-input{
  padding: 0 0 0 5vw;
  position: relative;
}

</style>
<!-- eslint-disable prettier/prettier -->
<script>
  export default {
    name: "NavBar",
    methods:{
      goToLoginPage(){
          this.$router.push('/');
      },
    }
  };
</script>