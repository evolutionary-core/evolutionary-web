<template>
    <div id="era">
        <div class="banner">
            <h2 style="color: white;">{{ name.toUpperCase() }} in</h2>
            <h1>{{era.toUpperCase()}} ERA</h1>
            <b style="color: white;">Between {{eraData.upper}} and {{eraData.lower}}</b>
        </div>
        <center>
            <mdc-button style="margin-top: -20px; background: gold; color: black;" raised :href="`#/species/${name}`">{{`< BACK`}}</mdc-button>
        </center>
        <mdc-layout-grid>
            <mdc-layout-cell class="specie" align="top" v-for="specie in eraData.data" :key="specie.url" desktop=4 tablet=4 phone="4" >
                <img :src="specie.url" :alt="specie.name">
                <h2 v-if="typeof specie.name === 'string'">{{specie.name}}</h2>
                <h2 v-else>{{specie.name[0]}}</h2>
                <p>
                {{specie.description}}
                </p>
            </mdc-layout-cell>
        </mdc-layout-grid>
    </div>
</template>
<style lang="scss" scoped>
$mdc-theme-primary: #118855;
.banner {
    width: calc(100% - 50px);
    height: 150px;
    padding: 25px;
    background: $mdc-theme-primary;
    text-align: center;
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
            name: this.$route.params.name,
            era: this.$route.params.era,
            evo: require(`../data/${this.$route.params.name}.json`).evolution_data,
        }
    },
    computed: {
        eraData(){
            let data = [];
            this.evo.forEach(e => {
                if (e.period === this.era) {
                    data = e;
                }
            });
            return data;
        }
    }
    
}
</script>

