<template>
    <div id="specie" style="text-align: center;">
        <div class="banner">
            <h1>{{ specie.toUpperCase() }}</h1>
            
        </div>
        <div class="selection">
          <b> DRAG SLIDER TO SELECT ERA </b>
          <mdc-slider min=0 :max='evo.length - 1' step=1 display-markers v-model="index" />
          <span style="float: left;"> PAST </span> <span style="float: right">PRESENT</span>
        </div>
        <div class="card">
          <h4>{{evo[index].period.toUpperCase()}} ERA </h4>
          <h1 style="color: black;">{{evo[index].upper.split(" ")[0]}} to {{evo[index].lower.split(" ")[0]}}</h1>
          <h4>MILLION YEARS AGO</h4>
          <hr>
          <mdc-button unelevated :href="`#/species/${specie}/${selected}`">Explore!</mdc-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$mdc-theme-primary: #118855;
.banner {
    width: calc(100% - 50px);
    height: 150px;
    padding: 25px;
    background: $mdc-theme-primary;
}
h1{
    text-align: center;
    color: white;
    &::after
  {
    content: "";
    display: block;
    margin: 10px auto;
    width: 100px;
    height: 5px;
    background: gold;
    animation: long infinite 1s ease-in;
  }
}
.card{
  max-width: 300px;
  border:#118855 solid 2px;
  margin: 0 auto;
  padding-bottom: 10px;
}
@keyframes long {
  0% {
    border-right: 5px solid darken($mdc-theme-primary, 50%);
    border-left: 0px darken($mdc-theme-primary, 50%);
  }
  60% {
    border-right: 0px darken($mdc-theme-primary, 50%);
    border-left: 5px solid darken($mdc-theme-primary, 50%);
  }
  100% {
    border-right: 5px solid darken($mdc-theme-primary, 50%);
    border-left: 0px darken($mdc-theme-primary, 50%);
  }
}
.selection{
  display: block;
  max-width: 900px;
  height: 100px;
  margin: 0 auto;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
  position: relative;
  top: -25px;
  padding: 5px;
  padding-bottom: 7.5px;
  background: #ffffff;
  border-radius: 5px;
  span {
    color: white;
    background: $mdc-theme-primary;
    padding: 5px;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 20px;
  }
}
.mdc-slider {
  width: 90%;
  margin: auto;
  margin-left: 5%;
  margin-right: 5%;
}
.mdc-button{
  margin: 0 auto;
}
</style>
<script>

export default {
    data() {
        return {
            index: 0,
            specie: this.$route.params.name,
            evo: require(`../data/${this.$route.params.name}.json`).evolution_data,
        }
    },
    computed: {
      selected(){
        return this.evo[this.index].period;
      }
    }
}
</script>
