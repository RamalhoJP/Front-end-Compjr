<!-- eslint-disable prettier/prettier -->
<template>
  <div class = "carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      no-animation
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Primeiro slide"
        img-src="../assets/comp1.png"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Segundo slide"
        img-src="../assets/comp2.png"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Terceiro slide"
        img-src="../assets/comp3.png"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Quarto slide"
        img-src="../assets/comp4.png"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<style>
</style>
<!-- eslint-disable prettier/prettier -->
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
    } 
  }
</script>