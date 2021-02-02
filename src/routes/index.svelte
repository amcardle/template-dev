<script lang="ts">
  export function addition(a: number, b: number) {
    return a + b;
  }
</script>

<main>
  <h1>MedTool</h1>
  <p>Written using Svelte</p>
  <p>Built on <a href="https://github.com/amcardle/medtool">GitHub</a></p>
  <p>Hosted on surge.sh</p>
  <p>Work in Progres</p>
</main>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 2rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
