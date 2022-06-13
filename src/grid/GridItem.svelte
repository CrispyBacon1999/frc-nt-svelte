<script lang="ts">
    export let rowSpan: number = 1;
    export let colSpan: number = 1;
</script>

<div
    style:border="1px solid black"
    style:grid-row={`span ${rowSpan}`}
    style:grid-column={`span ${colSpan}`}
>
    <slot />
</div>
