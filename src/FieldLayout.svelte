<script>
    import { onMount } from "svelte";
    import GridItem from "./grid/GridItem.svelte";

    export let ntKey = "/SmartDashboard/Field";
    let xPos = 0;
    let yPos = 0;
    let rotation = 0;

    export let rowSpan = 1;
    export let colSpan = 1;

    onMount(() => {
        NetworkTables.addKeyListener(`${ntKey}/Robot`, (key, value) => {
            console.log(value);
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
