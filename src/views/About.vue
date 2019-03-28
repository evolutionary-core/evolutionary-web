<template>
<div>
  <mdc-layout-grid style="background: #118855;">
    <mdc-layout-cell desktop=6 tablet=8 phone=4 align="middle">
    <div id="hb">
        <img src="@/assets/hb.png" alt="hulk buster's logo" />
        <h2> <span> We are HULK BUSTERS</span></h2>
    </div>
    </mdc-layout-cell>
    <mdc-layout-cell desktop=6 tablet=8 phone=4 align="middle">
        <h2 style="color: white;">Our Introduction</h2>
        <hr />
        <p style="color: white;">
        A Team of friends from Delhi Technological University, with a vision. We love to solve complex problems and develop relible solutions of industry standards.
        Apart for code being common interest, we can be found talking about Marvel stories and doing university assignments.  
      </p>
    </mdc-layout-cell>
  </mdc-layout-grid>
    <mdc-layout-grid>
          <mdc-layout-cell class="card" desktop=6 tablet=8 phone=4 align="middle">
            <img class="person" src="@/assets/rishabh.png" alt="rishabh chawla">
            <h1> Rishabh Chawla </h1>
            <mdc-button href="https://github.com/rishabh3112"> Github </mdc-button>
            <mdc-button href="https://linkedin.com/in/rishabh3112">LinkedIn </mdc-button>
            <mdc-button href="https://rishabh3112.github.io/#/"> Website</mdc-button>
            <p>
              Full-stack developer, designer, open-source contributor and competitive coder.
            </p>
          </mdc-layout-cell>
          <mdc-layout-cell class="card" desktop=6 tablet=8 phone=4 align="middle">
            <img class="person" src="@/assets/dev.png" alt="Dev Gupta">
            <h1> Dev Gupta </h1>
            <mdc-button href="https://github.com/devgupta2607"> Github </mdc-button>
            <mdc-button href="https://www.linkedin.com/in/devgupta2607/">LinkedIn </mdc-button>
            <p>
              I am a front-end developer, Python enthusiast and open-source contributor.
            </p>
          </mdc-layout-cell>
        </mdc-layout-grid>
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
.card.mdc-layout-cell {
  background: #441155;
  color: white;
  padding: 10px;
  margin-bottom: 50px;
  margin-top: 50px;
}
.person {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
  margin-top: -50px;
}
</style>
<script>
export default {
    name: "about"
}
</script>

