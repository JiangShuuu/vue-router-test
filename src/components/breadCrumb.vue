<template>
  <div class="bread">
    <li v-for="(item, i) in breadcrumbList" :key="i" class="bread-contain">
      <router-link :to="item.path">{{ item.meta.title }}</router-link>
    </li>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbList = ref()

watch(route, () => {
  getBreadcrumbs()
})

onMounted(() => {
  getBreadcrumbs()
})

const getBreadcrumbs = () => {
  let matched: any = route.matched

  matched = [{ path: '/', meta: { title: '首頁' } }].concat(matched)

  breadcrumbList.value = matched
}

</script>

<style scoped>
.bread {
  display: flex;
  align-items: center;
  margin: 20px 12px;
  color: grey;
}

.bread-contain {
  margin: 0 8px 0 0;
}

li {
  list-style: none;
}

li::after {
  content: '/';
  margin: 0 0 0 12px;
}

li:last-child::after {
  content: '';
}
</style>
