<script lang="ts">
    import { onMount } from "svelte";
    import GridItem from "./grid/GridItem.svelte";

    export let ntKey: string = "/SmartDashboard/Field";
    let xPos: number = 0;
    let yPos: number = 0;
    let rotation: number = 0;

    export let rowSpan: number = 1;
    export let colSpan: number = 1;

    onMount(() => {
        NetworkTables.addKeyListener(`${ntKey}/Robot`, (_, value: number[]) => {
            if (value.length === 3) {
                xPos = value[0];
                yPos = value[1];
                rotation = value[2];
            }
        });
    });
</script>

<GridItem {rowSpan} {colSpan}>
    <div>
        {xPos}
        {yPos}
        {rotation}
    </div>
</GridItem>
