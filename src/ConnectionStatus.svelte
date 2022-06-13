<script lang="ts">
    import NetworkTables from "./utils/networktables";
    import { onMount } from "svelte";
    import GridItem from "./grid/GridItem.svelte";

    let connected = false;
    export let rowSpan = 1;
    export let colSpan = 1;

    onMount(() => {
        NetworkTables.addRobotConnectionListener(() => {
            connected = NetworkTables.isRobotConnected();
        });
    });
</script>

<GridItem {rowSpan} {colSpan}>
    <div class="connection-status" class:true={connected} />
</GridItem>

<style>
    .connection-status {
        background-color: var(--false-boolean);
        padding: 40px;
    }

    .true {
        background-color: var(--true-boolean);
    }
</style>
