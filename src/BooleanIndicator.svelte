<script lang="ts">
    import { onMount } from "svelte";
    import GridItem from "./grid/GridItem.svelte";

    let value = false;
    export let ntKey: string;
    export let rowSpan = 1;
    export let colSpan = 1;

    onMount(() => {
        NetworkTables.addKeyListener<boolean>(
            ntKey,
            (_, data) => {
                value = data;
            },
            true
        );
    });
</script>

<GridItem {colSpan} {rowSpan}>
    <div class="indicator" class:true={value}>
        <slot />
    </div>
</GridItem>

<style>
    .indicator {
        background-color: var(--false-boolean);
        padding: 20px;
        width: 100%;
        height: 100%;
    }

    .true {
        background-color: var(--true-boolean);
    }
</style>
