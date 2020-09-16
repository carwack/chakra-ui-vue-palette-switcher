<template>
  <c-theme-provider>
    <c-reset />
    <!--Your application goes here -->
    <c-simple-grid :columns="4" zIndex="base">
      <c-box bg="palettes.rosettesCream.primary-1" height="100vh"></c-box>
      <c-box bg="palettes.rosettesCream.primary-2" height="100vh"></c-box>
      <c-box bg="palettes.rosettesCream.primary-3" height="100vh"></c-box>
      <c-box bg="palettes.rosettesCream.primary-4" height="100vh"></c-box>
    </c-simple-grid>
    <c-box zIndex="sticky" pos="absolute" top="50%" left="50%">
      <c-box pos="relative" top="-50%" left="-50%">
        <c-button variant-color="blue" variant="outline">
          Switch palette
        </c-button>
      </c-box>
    </c-box>
  </c-theme-provider>
</template>

<script>

export default {
  name: 'App'
}
</script>
