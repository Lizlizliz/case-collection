<template>
  <section class="wrap">
      <aside class="aside">我是侧边栏</aside>
      <main class="main">
          <router-view/>
      </main>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrap{display: flex;}
.aside{width: 300px;}
.main{width:calc(100% - 300px)}
</style>