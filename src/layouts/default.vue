<template>
  <main>
    <nav>
      <h1>Default Layout</h1>
      <div class="nav-box">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/discover">Discover</router-link>
      </div>
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

.nav-box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20rem;
}

section {
  padding: 2rem;
}
</style>