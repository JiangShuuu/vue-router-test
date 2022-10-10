<template>
  <main>
    <div class="nav-contain">
      <nav>
        <h1>Member Layout</h1>
        <router-link to="/">to default layout</router-link>
      </nav>
    </div>
    <section>
      <router-view></router-view>
    </section>
  </main>
</template>
<style scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
}

nav {
  border: solid 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100vh;
}

section {
  padding: 2rem;
}
</style>