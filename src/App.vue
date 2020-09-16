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
      currentPalette: 'rosettesCream', // default palette to start with
      paletteList: [
        'rosettesCream',
        'foilSneakers',
        'bambooBeach'
      ],
      lastRandom: 0
    }
  },
  methods: {
    changePalette () {
      let random = Math.floor(Math.random() * (this.paletteList.length - 1))
      console.log(random)
      if (random >= this.lastRandom) random += 1

      this.lastRandom = random
      this.currentPalette = this.paletteList[this.lastRandom]
    }
  }
}
</script>
