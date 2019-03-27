<template>
<div>
    <img
    :data-src="lazySrc"
    :data-srcset="lazySrcset"
    :style="style"
    class="LazyImage"
    >
    <mdc-linear-progress v-if="loading" indeterminate></mdc-linear-progress>
</div>
</template>

<script>
import lozad from 'lozad';

export default {
  name: 'LazyImage',
  props: {
    backgroundColor: {
      type: String,
      default: 'gold',
    },
    height: {
      type: Number,
      default: null,
    },
    lazySrc: {
      type: String,
      default: null,
    },
    lazySrcset: {
      type: String,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    aspectRatio() {
      if (!this.width || !this.height) return null;

      return (this.height / this.width) * 100;
    },
    style() {
      const style = { backgroundColor: this.backgroundColor };
      if (this.width) style.width = `${this.width}px`;
      const applyAspectRatio = this.loading && this.aspectRatio;
      if (applyAspectRatio) {
        style.height = 0;
        style.paddingTop = `${this.aspectRatio}%`;
      }

      return style;
    },
  },
  mounted() {
    const setLoadingState = () => {
      this.loading = false;
    };
    this.$el.querySelector("img").addEventListener('load', setLoadingState);
    this.$once('hook:destroyed', () => {
      this.$el.querySelector("img").removeEventListener('load', setLoadingState);
    });
    const observer = lozad(this.$el.querySelector("img"));
    observer.observe();
  },
};
</script>

<style lang="scss">
.LazyImage {
  min-height: 200px;
  width: 100%;
  height: auto;
  vertical-align: middle;
}
</style>