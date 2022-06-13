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
        (key, data, isNew) => {
            console.log(data);
            set(data);
        },
        true
    );
    return () => {};
});

export let matchType = readable(matchTypes[0], (set) => {
    NetworkTables.addKeyListener(
        "/FMSInfo/MatchType",
        (key, data, isNew) => {
            set(matchTypes[data]);
        },
        true
    );
    return () => {};
});
export let matchNumber = readable(1, (set) => {
    NetworkTables.addKeyListener(
        "/FMSInfo/MatchNumber",
        (key, data, isNew) => {
            set(data);
        },
        true
    );
    return () => {};
});
