<template>
    <div id="specie">
        <div class="banner">
            <h1>{{ specie.toUpperCase() }}</h1>
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
    data() {
        return {
            specie: this.$route.params.name
        }
    }
}
</script>
