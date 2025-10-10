<template>
  <Page>



    <StackLayout>


    <!-- #1 here the first htmllabel cuts off after 1 line, second using css is correctly using 2 lines and ends with ... -->
    <GridLayout rows="auto, 10, auto" marginBottom="50">
      <HTMLLabel row="0" maxLines="2" textWrap="true" lineBreak="end" text="some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here"/>
      <HTMLLabel row="2" class="html-label" text="some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here"/>
    </GridLayout>



    <!-- #2 here to first HTMLLabel has only one line, whereas the second has 2 lines but is cut off instead of ... at the end -->

    <GridLayout rows="auto, 10, auto" marginBottom="50">
      <HTMLLabel row="0" class="html-label" text="some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here"/>
      <HTMLLabel row="2" maxLines="2" textWrap="true" lineBreak="end" text="some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here"/>
    </GridLayout>


    <!-- #3 for whatever reason using an empty htmllabel first contrary to #1 at least displayes both labels as 2 lines, lineBreak end is still ignored on direct props --->

    <GridLayout rows="auto, 10, auto, 10, auto" marginBottom="50">
      <HTMLLabel row="0"/>
      <HTMLLabel row="2" maxLines="2" textWrap="true" lineBreak="end" text="some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here"/>
      <HTMLLabel row="4" class="html-label" text="some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here.some text that is here"/>
    </GridLayout>

    </StackLayout>

  </Page>
</template>

<script>

export default {
  components: {},
  data() {
    return {

    };
  },
  computed: {

  },

  methods: {

  },
};
</script>

<style>
  .html-label {
    max-lines: 2;
  }
</style>
