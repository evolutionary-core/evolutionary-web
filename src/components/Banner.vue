<template>
    <div id="banner">
        <img src="@/assets/logo.png" alt="evolutionary logo" />
        <h2> <span>Evolution's Dictionary</span></h2>
    </div>
</template>
<style lang="scss" scoped>
$mdc-theme-primary: #118855;
#banner {
    width: calc(100% - 2em);
    height: 350px;
    color: white;
    background: $mdc-theme-primary url("../assets/trex.png");
    background-repeat: no-repeat;
    background-position: right 50px;
    background-attachment: fixed;
    padding: 1em;
    margin-top: -100px;
    padding-top: 150px;
    img {
        display: block;
        width: 150px;
        margin: auto;
    }
    h2 {
        padding: 2px;
        margin-top: 20px;
        text-align: center;
        line-height: 35px;
        &::after{
            content: "";
            display: block;
            margin: 10px auto;
            width: 100px;
            height: 5px;
            background: gold;
        }
        span {
            background: $mdc-theme-primary;
            padding: 5px;
            padding-right: 20px;
            padding-left: 20px;
            border-radius: 20px;
        }
    }
}
@media only screen and (max-width: 480px) {
  #banner {
      background: #118855;
      height: 300px;
  }
}
</style>
<script>
export default {
    name: "Banner"
}
</script>

