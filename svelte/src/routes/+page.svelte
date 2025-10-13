<script lang="ts">
  let { data } = $props();
</script>

<posts class="m-16 flex flex-row gap-4">
  {#each data.posts as post, index}
    <post>
      <h1 class="font-bold text-xl">Post #{index + 1}</h1>
      <img src={post.image} alt="" class="w-64" />
      <p>{post.description}</p>
    </post>
  {/each}
</posts>
