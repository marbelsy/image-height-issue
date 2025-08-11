<template>
  <GridLayout class="picture-el-wrapper">
    <NSImg
        :class="['picture', touchable ? 'touchable' : '']"
        :src="value"
        :sharedTransitionTag="sharedTransitionTag"
        :aspectRatio="aspectRatio ? aspectRatio : null"
        @tap="emitTap"
        @finalImageSet="$emit('finalImageSet')"
    />
  </GridLayout>
</template>

<script>
export default {
  name: 'Picture',
  props: [
    'value',
    'touchable',
    'decodeHeight',
    'decodeWidth',
    'sharedTransitionTag',
    'aspectRatio',
  ],
  mounted() {},
  methods: {
    emitTap() {
      this.$emit('emitTap');
    },
  },
};
</script>

<style></style>
