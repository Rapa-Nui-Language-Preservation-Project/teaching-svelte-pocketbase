<script lang="ts">
  let { data } = $props();
</script>

<div class="m-16">
  {#each data.posts as post, index}
    <h1 class="font-bold text-xl">Post #{index + 1}</h1>
    <img src={post.image} alt="" class="w-64" />
    <p>{post.description}</p>
  {/each}
</div>
