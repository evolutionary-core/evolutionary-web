<template>
    <div id="specie">
        <div class="banner">
            <h1>{{ specie.toUpperCase() }}</h1>
        </div>
        <div class="period" v-for="period in evo" :key="period.period" >
          <h1 class="period">{{period.period}} era</h1>
          <center><span>{{period.upper}} to {{period.lower}}</span></center>
          <br>
          <mdc-layout-grid>
            <mdc-layout-cell class="specie" align="top" v-for="specie in period.data" :key="specie.url" desktop=4 tablet=4 phone="4" >
              <img :src="specie.url" :alt="specie.name">
              <h2 v-if="typeof specie.name === 'string'">{{specie.name}}</h2>
              <h2 v-else v-for="name in specie.name" :key="name">{{name}}</h2>
              <p>
                {{specie.description}}
              </p>
            </mdc-layout-cell>
          </mdc-layout-grid>
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
h1.period {
  color: black;
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
.specie {
  border: $mdc-theme-primary solid 2px;
  padding: 2px;
  text-align: center;
  img {
    width: 100%;
  }
}
</style>
<script>

export default {
    data() {
        return {
            specie: this.$route.params.name,
            evo: require(`../data/${this.$route.params.name}.json`).evolution_data,
        }
    }
}
</script>
