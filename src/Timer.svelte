<script lang="ts">
    import { onMount } from "svelte";
    import GridItem from "./grid/GridItem.svelte";

    let timeRemaining: number = 135;
    $: timeRemainingFormatted = new Date(timeRemaining * 1000)
        .toISOString()
        .substring(14, 19);
    export let ntKey: string;
    export let rawTime: boolean = false;
    export let colorEndgame: boolean = false;
    export let rowSpan: number = 1;
    export let colSpan: number = 1;

    onMount(() => {
        NetworkTables.addKeyListener(
            ntKey,
            (_, data: number) => {
                timeRemaining = data;
            },
            true
        );
    });
</script>

<GridItem {colSpan} {rowSpan}>
    <span class="timer" class:endgame={colorEndgame}>
        {#if rawTime}
            {timeRemaining}
        {:else}
            {timeRemainingFormatted}
        {/if}
    </span>
</GridItem>

<style>
    .timer {
        padding: 20px;
        color: var(--timer);
    }

    .endgame {
        color: var(--endgame-timer);
    }
</style>
