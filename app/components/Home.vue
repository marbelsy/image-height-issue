<template>
  <Page>
    <ActionBar>
      <Label text="Home" class="font-bold text-lg" />
    </ActionBar>

    <GridLayout rows="auto, auto" backgroundColor="violet">
      <NewsTeaser :item="item" :has-image="true" verticalAlignment="top"/>
      <NewsTeaserInline :item="item" row="1"/>
    </GridLayout>
  </Page>
</template>

<script>
import NewsTeaser from './NewsTeaser.vue';
import Vue from 'nativescript-vue';
import NewsTeaserInline from "~/components/NewsTeaserInline.vue";

export default {
  components: {NewsTeaserInline, NewsTeaser },
  data() {
    return {
      item: {
        news_title: 'Sturzflut-Risikokonzept',
        dateDisplayValue: '29.07.25',
        imageSource:
            'https://files1.sqronline.de/files/thumbnail/8108671469?thumbsize=520x',
      },
    };
  },
  computed: {
    message() {
      return 'Blank {N}-Vue app';
    },
  },

  methods: {
    logMessage() {
      console.log('You have tapped the message!');
    },
  },
};
</script>

<style>
/* .info {
    font-size: 20;
  } */
</style>
