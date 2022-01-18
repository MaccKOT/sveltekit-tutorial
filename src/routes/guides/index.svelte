<script context="module">
  // script running at server and return props for use by frontend
  export async function load({ fetch }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const guides = await res.json();
    // console.log(guides);

    if (res.ok) {
      return {
        props: {
          guides,
        },
      };
    }

    return {
      status: res.status,
      error: new Error('Could not fetch the guides'),
    };
  }
</script>

<script>
  // normal frontend scripts
  export let guides;
</script>

<div class="guides">
  <ul>
    {#each guides as guide}
      <li>
        <a sveltekit:prefetch class="guides_link" href={`/guides/${guide.id}`}
          >{guide.title}</a
        >
      </li>
    {/each}
  </ul>
</div>

<style>
  .guides {
    margin-top: 20px;
    padding-left: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a.guides_link {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
    text-decoration: none;
  }
  a.guides_link:hover,
  a.guides_link:focus {
    border: 1px dotted rgba(255, 255, 255, 0.8);
  }
</style>
