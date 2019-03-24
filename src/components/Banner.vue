<template>
    <div id="banner">
        <img src="@/assets/logo.png" alt="evolutionary logo" />
        <h2> <span>Dictionary of evolution</span></h2>
    </div>
</template>
<style lang="scss" scoped>
$mdc-theme-primary: #118855;
#banner {
    width: calc(100% - 2em);
    height: 400px;
    color: white;
    background: $mdc-theme-primary url("http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbbd.png");
    background-repeat: no-repeat;
    background-position: right 100px;
    background-attachment: fixed;
    padding: 1em;
    img {
        display: block;
        width: 150px;
        margin: auto;
    }
    h2 {
        padding: 2px;
        margin-top: 20px;
        text-align: center;
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
            border-radius: 10px;
        }
    }
}
</style>
<script>
export default {
    name: "Banner"
}
</script>

