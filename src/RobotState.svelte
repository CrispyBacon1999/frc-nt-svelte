<script>
    import { robotState } from ".";
    import IoIosCheckmarkCircle from "svelte-icons/io/IoIosCheckmarkCircle.svelte";
    import IoIosCloseCircleOutline from "svelte-icons/io/IoIosCloseCircleOutline.svelte";
</script>

<div>
    Enabled:
    {#if $robotState.isEnabled}
        <div class="icon true">
            <IoIosCheckmarkCircle />
        </div>
    {:else}
        <div class="icon false">
            <IoIosCloseCircleOutline />
        </div>
    {/if}
</div>

<style>
    .icon {
    }

    .true {
        color: var(--true-boolean);
    }

    .false {
        color: var(--false-boolean);
    }
</style>
