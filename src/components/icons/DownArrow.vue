<script>
export default {
  emits: ['change-order'],
  data() {
    return {
      order: "asc"
    }
  },
  methods: {
    changeOrder() {
      if (this.order === "asc") {this.order = "desc"}
      else {this.order = "asc"}
      this.$emit('change-order', this.order);
    }
  },
  mounted() {
    this.$emit('change-order', this.order);
  }
}
</script>

<template>
  <svg
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="changeOrder()"
    :class="this.order"
  >
    <path d="M10.9999 1.17019C10.8126 0.983936 10.5591 0.879395 10.2949 0.879395C10.0308 0.879395 9.77731 0.983936 9.58995 1.17019L5.99995 4.71019L2.45995 1.17019C2.27259 0.983936 2.01913 0.879395 1.75495 0.879395C1.49076 0.879395 1.23731 0.983936 1.04995 1.17019C0.95622 1.26315 0.881826 1.37375 0.831057 1.49561C0.780288 1.61747 0.75415 1.74818 0.75415 1.88019C0.75415 2.0122 0.780288 2.1429 0.831057 2.26476C0.881826 2.38662 0.95622 2.49722 1.04995 2.59019L5.28995 6.83019C5.38291 6.92392 5.49351 6.99831 5.61537 7.04908C5.73723 7.09985 5.86794 7.12599 5.99995 7.12599C6.13196 7.12599 6.26267 7.09985 6.38453 7.04908C6.50638 6.99831 6.61699 6.92392 6.70995 6.83019L10.9999 2.59019C11.0937 2.49722 11.1681 2.38662 11.2188 2.26476C11.2696 2.1429 11.2957 2.0122 11.2957 1.88019C11.2957 1.74818 11.2696 1.61747 11.2188 1.49561C11.1681 1.37375 11.0937 1.26315 10.9999 1.17019Z"/>
  </svg>
</template>

<style lang="scss" scoped>
.asc {
  transform: rotateZ(0deg);
}
.desc {
  transform: rotate(180deg);
}
</style>
