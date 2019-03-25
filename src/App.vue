<template>
  <div class="app">
    <mdc-layout-app>
      <mdc-toolbar slot="toolbar" waterfall>
        <mdc-toolbar-row>
          <mdc-toolbar-section align-start >
            <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
            <a href="#/" style="text-decoration: none; color: white; margin-top: 10px;"><mdc-toolbar-title>Evolutionary</mdc-toolbar-title></a>
          </mdc-toolbar-section>
        </mdc-toolbar-row>
      </mdc-toolbar>
      <mdc-drawer slot="drawer" toggle-on="toggle-drawer" temporary>
        <mdc-drawer-list>
            <mdc-drawer-item href="#/" start-icon="home">Home</mdc-drawer-item>
            <mdc-drawer-item href="#/about" start-icon="send">About</mdc-drawer-item>
        </mdc-drawer-list>
      </mdc-drawer>
      <main class="content">
        <transition name="route">
          <router-view/>
        </transition>
      </main>
    </mdc-layout-app>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  $mdc-typography-font-family: "Roboto Mono", monospace;
  $mdc-theme-primary: #118855;
  @import "@material/typography/mixins";
  @import "vue-mdc-adapter/dist/toolbar/styles";
  @import "vue-mdc-adapter/dist/drawer/styles";
  @import "vue-mdc-adapter/dist/select/styles";
  @import "vue-mdc-adapter/dist/slider/styles";
  @import "vue-mdc-adapter/dist/button/styles"; 
  @import "vue-mdc-adapter/dist/list/styles";
  @import "vue-mdc-adapter/dist/layout-grid/styles";
  html {
    width: 100%;
    height: 100%;
  }

  body {
    @include mdc-typography(body2);
    width: 100%;
    min-height: 100%;
    margin: 0;
  }

  .route-enter-active {
    animation: 0.75s breezeIn;
  }
  .route-leave-active {
    animation: 0.25s breezeOut;
  }
  @keyframes breezeIn {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes breezeOut {
    from {
      opacity: 1;
      transform: translateY(0px);
    }
    to {
      opacity: 0;
      transform: translateY(100px);
    }
  }
</style>
