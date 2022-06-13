import { readable } from "svelte/store";
import NetworkTables from "../utils/networktables";

const matchTypes = {
    0: "Unknown",
    1: "Practice",
    2: "Qualification",
    3: "Elimination",
};

export let eventName = readable("Some Event", (set) => {
    NetworkTables.addKeyListener<string>(
        "/FMSInfo/EventName",
        (_, data) => {
            set(data);
        },
        true
    );
    return () => {};
});

export let matchType = readable(matchTypes[0], (set) => {
    NetworkTables.addKeyListener<number>(
        "/FMSInfo/MatchType",
        (_, data) => {
            set(matchTypes[data]);
        },
        true
    );
    return () => {};
});
export let matchNumber = readable(1, (set) => {
    NetworkTables.addKeyListener<number>(
        "/FMSInfo/MatchNumber",
        (_, data) => {
            set(data);
        },
        true
    );
    return () => {};
});
