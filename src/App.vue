<template>
  <c-theme-provider>
    <c-reset />
    <!--Your application goes here -->
    <c-simple-grid :columns="4" zIndex="base">
      <c-box :bg="`palettes.${currentPalette}.primary-1`" height="100vh"></c-box>
      <c-box :bg="`palettes.${currentPalette}.primary-2`" height="100vh"></c-box>
      <c-box :bg="`palettes.${currentPalette}.primary-3`" height="100vh"></c-box>
      <c-box :bg="`palettes.${currentPalette}.primary-4`" height="100vh"></c-box>
    </c-simple-grid>
    <c-box zIndex="sticky" pos="absolute" top="50%" left="50%">
      <c-box pos="relative" top="-50%" left="-50%">
        <c-button variant-color="blue" variant="outline" @click="changePalette">
          Switch palette
        </c-button>
      </c-box>
    </c-box>
  </c-theme-provider>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      currentPalette: 'rosettesCream' // default palette to start with
    }
  },
  methods: {
    changePalette () {
      this.currentPalette = 'bambooBeach'
    }
  }
}
</script>
