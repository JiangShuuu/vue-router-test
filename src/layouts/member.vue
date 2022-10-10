<template>
  <main>
    <nav>
      <h1>Member Layout</h1>
      <router-link to="/">to default layout</router-link>
      <div class="nav-contain">
        <router-link to="/member/info">會員資訊</router-link>
        <router-link to="/member/account">會員帳號</router-link>
        <router-link to="/member/payment">會員支付</router-link>
      </div>
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

.nav-contain {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

section {
  padding: 2rem;
}
</style>