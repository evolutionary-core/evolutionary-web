<template>
    <div id="hb">
        <img src="@/assets/hb.png" alt="hulk buster's logo" />
        <h2> <span> We are HULK BUSTERS</span></h2>
    </div>
</template>
<style lang="scss" scoped>
$mdc-theme-primary: #118855;
#hb {
    width: calc(100% - 2em);
    height: 300px;
    color: white;
    background: $mdc-theme-primary;
    background-repeat: no-repeat;
    background-position: right 50px;
    background-attachment: fixed;
    padding: 1em;
    margin-top: -100px;
    padding-top: 100px;
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
</style>
<script>
export default {
    name: "about"
}
</script>

