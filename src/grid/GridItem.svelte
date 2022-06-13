<script>
    export let rowSpan = 1;
    export let colSpan = 1;
</script>

<div
    style:border="1px solid black"
    style:grid-row={`span ${rowSpan}`}
    style:grid-column={`span ${colSpan}`}
>
    <slot />
</div>
