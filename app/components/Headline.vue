<template>
  <HTMLLabel
      class="headline1"
      :text="value"
      :maxLines="maxLines ? maxLines : ''"
  />
</template>

<script>
export default {
  name: 'Headline',
  props: ['value', 'maxLines'],
};
</script>

<style></style>
