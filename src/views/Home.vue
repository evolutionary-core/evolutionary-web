<template>
  <div class="home">
    <Banner />
    <div class="selection">
      <mdc-select v-model="selected" label="I want to know about" class="mdc-select--outlined">
        <option v-for="animal in animals" :key="animal">
          {{animal}}
        </option>
      </mdc-select>
      <mdc-button unelevated :href="`#/species/${selected}`">Explore!</mdc-button>
    </div>
    <mdc-layout-grid>
      <mdc-layout-cell desktop=8 tablet=4 phone=4 align="middle">
        <h1> What is evolution ? </h1>
        <p>
          Evolution is change in the heritable characteristics of biological populations over successive generations.
          These characteristics are the expressions of genes that are passed on from parent to offspring during reproduction.
          Different characteristics tend to exist within any given population as a result of mutation,
          genetic recombination and other sources of genetic variation. 
        </p>
      </mdc-layout-cell>
      <mdc-layout-cell desktop=4 tablet=4 phone=4>
        <img class="title" src="../assets/evolution.jpg" alt="human evolution" style="width: 100%;">
      </mdc-layout-cell>
    </mdc-layout-grid>
    <mdc-layout-grid>
      <mdc-layout-cell desktop=4 tablet=4 phone=4>
        <img class="title" src="../assets/alien.png" alt="human evolution" style="width: 100%;">
      </mdc-layout-cell>
      <mdc-layout-cell desktop=8 tablet=4 phone=4 align="middle">
        <h1 style="line-height: 30px;"> Why should we study evolution ? </h1>
        <p>
          We study evolution for the same reasons that we study any subject — the thirst for knowledge, to understand the past and predict the future, and to organize our world. But the subject of evolution also has huge relevance to our world and current issues that concern all of us. Evolution was happening 150 million years ago when dinosaurs dominated the Earth, was happening in the 1830s when Charles Darwin landed on the Galapagos Islands during the voyage of the HMS Beagle, and it is happening today. It is occurring in every living species on the planet, right now !!
        </p>
      </mdc-layout-cell>
    </mdc-layout-grid>
    <br>
    <center>
      <i>Made by Team Hulk Busters</i>
    </center>
    <br>
    <br>
  </div>
</template>

<style lang="scss" scoped>
.selection{
  display: block;
  max-width: 400px;
  height: 50px;
  margin: 0 auto;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
  position: relative;
  top: -25px;
  padding: 5px;
  padding-bottom: 7.5px;
  background: #ffffff;
  border-radius: 5px;
}
.mdc-select {
  width: 60%;
  margin-left: 5px;
}
.mdc-button {
  float: right;
  margin: 10px;
  margin-right: 4px;
  width: 30%;
}
.mdc-layout-grid {
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
img.title {
  transition: 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
    transition: 0.5s ease-in-out;
  }
}
@keyframes long {
  0% {
    border-right: 5px solid;
    border-left: 0px;
  }
  60% {
    border-right: 0px;
    border-left: 5px solid;
  }
  100% {
    border-right: 5px solid;
    border-left: 0px;
  }
}
</style>

<script>
import Banner from "@/components/Banner.vue";
export default {
  name: 'home',
  data(){
    return {
      selected: "fish",
      animals: [
        "fish",
        "reptiles",
        "mammals",
        "birds",
        "insects",
      ]
    }
  },
  components: {
    Banner,
  }
}
</script>
