import { readable } from "svelte/store";

const matchTypes = {
    0: "Unknown",
    1: "Practice",
    2: "Qualification",
    3: "Elimination",
};

export let eventName = readable("Some Event", (set) => {
    NetworkTables.addKeyListener(
        "/FMSInfo/EventName",
        (_, data: string) => {
            set(data);
        },
        true
    );
    return () => {};
});

export let matchType = readable(matchTypes[0], (set) => {
    NetworkTables.addKeyListener(
        "/FMSInfo/MatchType",
        (_, data: number) => {
            set(matchTypes[data]);
        },
        true
    );
    return () => {};
});
export let matchNumber = readable(1, (set) => {
    NetworkTables.addKeyListener(
        "/FMSInfo/MatchNumber",
        (_, data: number) => {
            set(data);
        },
        true
    );
    return () => {};
});
