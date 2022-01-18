<script context="module">
  export async function load({ page, fetch }) {
    const id = page.params.id;
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // const guide = await res.json();

    //our own api
    const res = await fetch(`/guides/${id}.json`);
    const { guide } = await res.json();

    if (res.ok) {
      return {
        props: {
          guide,
        },
      };
    }

    // in case of error - redirect to guides page
    return {
      status: 301,
      // error: new Error('Could not fetch that guide'),
      redirect: '/guides',
    };
  }
</script>

<script>
  export let guide;
</script>

<div class="guide">
  <h2>{guide.title}</h2>
  {#if guide.imageUrl}
    <img src={guide.imageUrl} alt="" />
  {/if}
  <p>{guide.body}</p>
</div>

<style>
  h2::before {
    content: '>> ';
  }
  .guide {
    margin-top: 40px;
    margin: 10px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }
  img {
    max-height: 350px;
  }
</style>
