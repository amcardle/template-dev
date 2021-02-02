<script lang="ts">
  import ExampleComponent from "../components/ExampleComponent.svelte";
  // function for demonstration of testing
  export function addition(a: number, b: number) {
    return a + b;
  }
</script>

<main>
  <h1>Template</h1>
  <p>{addition(1, 2)}</p>
  <ExampleComponent />
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
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
