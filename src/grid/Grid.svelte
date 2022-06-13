<script lang="ts">
    export let columns: number = 12;
    export let rows: number = 5;
</script>

<div
    style:grid-template-columns={`repeat(${columns}, 1fr`}
    style:grid-template-rows={`repeat(${rows}, 1fr)`}
    class="grid"
>
    <slot />
</div>

<style>
    .grid {
        width: 100%;
        height: 100%;
        display: grid;
    }
</style>
