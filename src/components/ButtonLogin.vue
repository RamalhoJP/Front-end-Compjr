<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <button type="submit">
      {{text}}
    </button>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->

<style scoped>
button{
  background-color: #343842;
  color: #FFFFFF;

  font-family: 'Roboto';
  font-size: 1.0em;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  border: none;
  padding: 0.75vw 0 0.75vw;
  border-radius: 2px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
button:hover {
  background-color:#13151b;
  color: white;
}

</style>
<!-- eslint-disable prettier/prettier -->
<script>
  export default{
    name:"ButtonLogin",
    props:['text'],
  }
</script>