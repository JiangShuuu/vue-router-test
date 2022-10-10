<template>
  <main>
    <nav>
      <h1>Default Layout</h1>
      <router-link to="/member">to member layout</router-link>
    </nav>
    <section>
      <router-view></router-view>
    </section>
  </main>
</template>
<style scoped>
main {
  width: 100%;
  height: 100%;
}

nav {
  border: solid 1px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

section {
  padding: 2rem;
}
</style>