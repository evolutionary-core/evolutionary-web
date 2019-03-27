<template>
    <div>
        <div class="banner">
            <h1>BIBLOGRAPHY</h1>
        </div>
        <div class="list">
          <h4>
            A special thanks to all these websites. We didn't intend to violate any copyright issue and we haven't to our best knowledge.
            This site is for educational purposes only and we know you will appreciate the work done here on this site in the spirit of science.
          </h4>
          <a v-for="thank in thanks" :key="thank" :href="thank">
            {{ thank.split("/")[2] }} > {{ thank.split("/").slice(-1)[0] }}
          </a>
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
.list {
    max-width: 700px;
    padding: 10px;
    position: relative;
    top: -50px;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
    a {
        display: block;
        padding: 10px;
        border-bottom: solid 1px gold
    }
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
</style>
<script>
export default {
    name: "biblography",
    data(){
        return {
          thanks: [
            "https://en.wikipedia.org/wiki/Placentalia",
            "https://www.enchantedlearning.com/subjects/mammals/Evolution.shtml",
            "https://en.wikipedia.org/wiki/Evolution_of_birds",
            "https://en.wikipedia.org/wiki/Bird",
            "https://en.wikipedia.org/wiki/Evolution_of_reptiles",
            "https://en.wikipedia.org/wiki/Evolution_of_dinosaurs",
            "https://en.wikipedia.org/wiki/Evolution_of_insects",
            "https://en.wikipedia.org/wiki/Evolution_of_mammals",
            "https://en.wikipedia.org/wiki/Mammal#Origins",
            "https://www.earthlife.net/mammals/evolution.html",
            "https://www.newscientist.com/article/dn17453-timeline-the-evolution-of-life",
            "https://www.hiliners.org/ourpages/auto/2017/3/20/36285568/Chapter%2043%20Mammals.pdf",
            "https://en.wikipedia.org/wiki/Timeline_of_human_evolution",
            "https://www.enchantedlearning.com/subjects/birds/Birdfossils.html",
            "https://www.enchantedlearning.com/subjects/birds/Earlybirds.shtml",
            "https://www.cell.com/current-biology/pdf/S0960-9822(15)00945-8.pdf",
            "https://www.livescience.com/40352-cenozoic-era.html",
            "https://www.thoughtco.com/the-paleogene-period-1091370",
            "https://courses.lumenlearning.com/wm-biology2/chapter/evolutionary-history-of-birds",
            "http://scienceviews.com/dinosaurs/jurassic.html",
            "https://nhm.org/site/research-collections/dinosaur-institute/dinosaurs/birds-late-evolution-dinosaurs",
          ]
        }
    }
}
</script>
