<script lang="ts">
    import GridItem from "./grid/GridItem.svelte";
    import { onMount } from "svelte";

    export let ntKey = "/SmartDashboard/SendableChooser[0]";

    let options = [];
    let currentSelection: string | undefined;

    export let colSpan = 1;
    export let rowSpan = 1;

    onMount(() => {
        NetworkTables.addKeyListener(
            `${ntKey}/selected`,
            (_, value: string) => {
                currentSelection = value;
            }
        );
        console.log(`${ntKey}/options`);
        NetworkTables.addKeyListener(
            `${ntKey}/options`,
            (_, value: string[]) => {
                options = value;
            }
        );
    });

    const changeValue = (event) => {
        const newValue = event.target.value;
        NetworkTables.setValue(`${ntKey}/selected`, newValue);
        currentSelection = newValue;
    };
</script>

<GridItem {colSpan} {rowSpan}>
    <select on:change={changeValue} value={currentSelection}>
        {#each options as option}
            <option value={option}>
                {option}
            </option>
        {/each}
    </select>
</GridItem>
