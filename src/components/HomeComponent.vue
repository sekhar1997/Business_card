<template>
  <div>
    <navbar></navbar>
    <Features></Features>
    <contact></contact>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import navbar from "./NavbarComponent";
import contact from "./Contact";
import FooterComponent from "./FooterComponent";
import Features from "./Features";
export default {
  components: {
    navbar,
    contact,
    FooterComponent,
    Features,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
