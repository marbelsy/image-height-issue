<template>
  <HTMLLabel
      class="pre-subline"
      :text="value"
      :maxLines="maxLines ? maxLines : ''"
  />
</template>

<script>
export default {
  name: 'PreSubline',
  props: ['value', 'maxLines'],
};
</script>

<style></style>
