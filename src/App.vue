<template>
  <div class="app">
    <mdc-layout-app>
      <mdc-toolbar drawer-type="temporary" slot="toolbar">
        <mdc-toolbar-row>
          <mdc-toolbar-section align-start >
            <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
            <mdc-toolbar-title>Evolutionary</mdc-toolbar-title>
          </mdc-toolbar-section>
        </mdc-toolbar-row>
      </mdc-toolbar>
      <mdc-drawer slot="drawer" toggle-on="toggle-drawer" temporary>
        <mdc-drawer-list>
            <mdc-drawer-item href="/" start-icon="home">Home</mdc-drawer-item>
            <mdc-drawer-item href="/about" start-icon="send">About</mdc-drawer-item>
        </mdc-drawer-list>
      </mdc-drawer>
      <main class="content">
        <router-view />
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
  @import "vue-mdc-adapter/dist/list/styles";
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
</style>
