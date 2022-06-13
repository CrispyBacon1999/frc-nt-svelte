# FRC Network Tables Svelte

This is a library for creating custom dashboards using the modern web framework Svelte. It's still heavily under development, but has several features built in already.

## Components

Currently, all components only register their key watchers on initial mount. On unmount, the listeners still run in the background, so it has potential for memory leaks. This is something that is planned to be addressed soon in the future.

### Autonomous Picker

Provides a selection menu with autonomous menus

### BooleanIndicator

Simple indicator with colors representing a true or false value in a network table key

### ConnectionStatus

Shows whether the NetworkTables server can be accessed

### FieldLayout

WIP: Will show the robot position on the field

## Stores

### Robot State

Provides several properties about the robot's current state

```ts
$robotState;

isEnabled: boolean;
isAutonomous: boolean;
isTest: boolean;
isEStopped: boolean;
isFMSAttached: boolean;
isDSAttached: boolean;
```

### Match Info

Provides information about the current match, according to FMS

```ts
$eventName: string;

$matchType: string[("Unknown", "Practice", "Qualification", "Elimination")];

$matchNumber: number;
```

## Grid

All built in components support a Shuffleboard style grid system for quick UI development. The grid is configurable size, with defaults of 12 columns, 5 rows. This can be changed with the `rows` or `columns` properties on the `Grid` component.

Pass in the `rowSpan` or `colSpan` props on components to change how wide or tall the components are.

## Theming

Currently, all theming is done through CSS variables. There are no default values, so they need to be set manually.

```css
:root {
    --true-boolean: green;
    --false-boolean: red;
}
```

## Custom components

The NetworkTables API is exposed for use in custom components. This uses the pynetworktables2js API, documented at https://robotpy.readthedocs.io/projects/pynetworktables2js/en/stable/api_js.html. The `NetworkTables` variable can be found by using `import { NetworkTables } from "frc-nt-svelte";`

If you want your component to have the same grid capabilities as the built in components, wrap it in a `GridItem` and pass in a `colSpan` and `rowSpan` variable.

### Sample component (BooleanIndicator)

```svelte
<script>
    import NetworkTables from "./utils/networktables";
    import { onMount } from "svelte";
    import GridItem from "./grid/GridItem.svelte";

    let value = false;
    export let ntKey;
    export let rowSpan = 1;
    export let colSpan = 1;

    onMount(() => {
        NetworkTables.addKeyListener(
            ntKey,
            (key, data, isNew) => {
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
```
