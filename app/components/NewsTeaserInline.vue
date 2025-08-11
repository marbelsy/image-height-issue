<template>
  <GridLayout columns="*, 105" marginBottom="10">
    <GridLayout rows="auto, auto"
                columns="auto, auto, *, 105"
                col="0"
                colSpan="2"
    >
      <HTMLLabel :text="item.dateDisplayValue" row="0" col="0" marginLeft="15"/>
      <GridLayout row="1" col="0" colSpan="4"
                  backgroundColor="#F5F5F5"
                  rows="auto, auto, auto"
                  paddingTop="10" paddingBottom="10"
                  paddingLeft="15" paddingRight="15"
                  columns="*, 105"
                  minHeight="85"
      >
        <HTMLLabel :text="item.news_title" maxLines="2" row="0"/>
        <HTMLLabel :text="item.news_title" maxLines="1" row="1"/>
      </GridLayout>
    </GridLayout>
    <NSImg row="0" col="1" stretch="aspectFill" :src="item.imageSource"/>
  </GridLayout>
</template>

<script>
export default {
  name: "NewsTeaserInline",
  props: ['item']
}
</script>

<style scoped>

</style>
