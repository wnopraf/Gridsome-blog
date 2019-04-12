<template>
  <div id="app">

    <header class="header">
      <img src="../favicon.png" alt="">
      <h1>Gridsome Blog</h1>
    </header>

    <main class="main content-box">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Powered by <a href="//gridsome.org"> Gridsome </a></span>
    </footer>

  </div>
</template>

<script>


export default {
  
  components: {
    
  }
}
</script>

<style lang="scss">
.header {
  padding: 2rem 0;
  text-align: center;
  background-color: var(--bg-header-color);
  img {
    max-width: 150px;
  }
  h1 {
    margin-top: 1rem;
    color: var(--contrast-main-color);
    font-weight: 900;
  } 
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
  position: relative;
}

.footer {
  display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    font-size: .8em;
    background-color: var(--contrast-main-color);
    color: var(--bg-header-color);

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
