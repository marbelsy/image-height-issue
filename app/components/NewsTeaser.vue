<template>
  <GridLayout
      :class="[
      'news-teaser-alt2-el touchable',
      hasImage ? 'image' : '',
      first ? 'first' : '',
    ]"
      @tap="tapEvent"
  >
    <GridLayout class="complete-text-content-wrapper">
      <Date :value="item.dateDisplayValue" class="headline1" />
      <HTMLLabel text="chevron_right" class="icon" />
      <GridLayout class="content-wrapper" ref="clipping-reference">
        <Headline :value="item.news_title" />
        <PreSubline :value="item.news_title" />
        <HTMLLabel
            :text="item.category"
            class="info-box-el category"
            v-if="useCategoryEl"
        />
      </GridLayout>
    </GridLayout>
    <Picture :value="item.imageSource" v-if="hasImage && first" />
    <NSImg
        :src="item.imageSource"
        class="teaser-img"
        v-if="hasImage && !first"
    />
  </GridLayout>
</template>

<script>
import Headline from './Headline.vue';
import PreSubline from './PreSubline.vue';
import Picture from './Picture.vue';
import Date from './Date.vue';
import Vue from 'nativescript-vue';

const vClipTest = {
  bind: (el, binding, vnode) => {
    el.nativeView.on('layoutChanged', (event) => {
      const nativeView = event.object;
      const parent = nativeView.parent;
      if (!parent) return;
      const size = parent.getActualSize();
      console.warn(size);
      console.error(nativeView.getActualSize());
      nativeView.height = size.height;
    });
  },
};
const vRemoveClipping = {
  bind: (el, binding, vnode) => {
    if (__ANDROID__) {
      el.nativeView.on('loaded', (event) => {});
    } else if (__IOS__) {
      el.nativeView.on('loaded', (event) => {
        const nativeView = event.object;
        const parent = vnode?.context;
        if (!parent) return;
        const ref = parent.$refs[binding.value];
        if (!ref) return;
        setTimeout(() => {
          const size = ref.nativeView.getActualSize();
          nativeView.height = size.height + 15;
        }, 1);
      });
      el.nativeView.on('finalImageSet', (event) => {
        const nativeView = event.object;
        const parent = vnode?.context;
        if (!parent) return;
        const ref = parent.$refs[binding.value];
        if (!ref) return;
        setTimeout(() => {
          const size = ref.nativeView.getActualSize();
          nativeView.height = size.height + 15;
        }, 1);
      });
    }
  },
};

export default {
  name: 'NewsTeaser',
  props: ['item', 'hasImage', 'hasSubtitle', 'first', 'useCategoryEl'],
  components: { Date, Picture, PreSubline, Headline },
  directives: {
    removeClipping: vRemoveClipping,
    clipTest: vClipTest,
  },
  methods: {
    tapEvent() {
      this.$emit('emitTap');
    },
    finalImageSet(data) {
      this.$emit('finalImageSet', data);
    },
  },
};
</script>

<style></style>
