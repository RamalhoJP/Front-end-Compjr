<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <Navbar/>
    <CarouselComponent/>
    <div class="text">
      <h1 class="title">Comp Júnior</h1>
      <div class="content">
        <p style=" text-align: justify;">A Comp Júnior é uma empresa sem fins lucrativos que atua no mercado de tecnologia há mais de 20 anos em Lavras e região, prestando serviço de desenvolvimento web, mobile e multiplataforma.
        Nossa missão é oferecer a transformação digital aos nossos clientes, expandindo os seus negócios para o mercado digital e alcançando um potencial desconhecido.
        A Comp Júnior também faz parte do Movimento Empresa Júnior e visa por acolher e desenvolver seus membros, oferecendo a primeira oportunidade profissional e contato com o mercado de trabalho, suas metodologias e estruturas.</p>  
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<style>
.page{
  justify-content: center;
  font-family: 'noto-sans';
}
.title{
  text-align: center;
  font-size: 20px;
  margin: 5vh 0;
}
.content{
  margin: 5vh 30vw;
}

</style>
<!-- eslint-disable prettier/prettier -->
<script>
  import CarouselComponent from "../components/CarouselComponent.vue";
  import Navbar from "../components/Navbar.vue";

  export default{
    name:"CarouselView",
    components: {
      CarouselComponent, Navbar
    }, 
  }
</script>