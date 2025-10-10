<template>
  <GridLayout columns="*, 105" rows="auto, *" marginBottom="10" backgroundColor="yellow">
    <HTMLLabel text="Some text goes here"
               row="0" col="0" backgroundColor="blue"
               verticalAlignment="bottom"
    />
    <GridLayout row="1" col="0" colSpan="4"
                backgroundColor="#F5F5F5"
                paddingTop="10" paddingBottom="10"
                paddingLeft="15" paddingRight="15"
                columns="*, 105"
                minHeight="85"
    >
      <HTMLLabel :text="item.news_title+item.news_title+item.news_title+item.news_title+item.news_title"
                 textWrap="true"
                 row="0"/>
    </GridLayout>
    <Image row="0" col="1"
           rowSpan="2"
           stretch="aspectFill" :src="item.imageSource"
           verticalAlignment="bottom"
    />
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
