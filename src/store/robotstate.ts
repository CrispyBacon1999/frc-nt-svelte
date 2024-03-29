import { readable } from "svelte/store";

const ENABLED_FLAG = 0x01;
const AUTO_FLAG = 0x02;
const TEST_FLAG = 0x04;
const EMERGENCY_STOP_FLAG = 0x08;
const FMS_ATTACHED_FLAG = 0x10;
const DS_ATTACHED_FLAG = 0x20;

export let robotState = readable(
    {
        isEnabled: false,
        isAutonomous: false,
        isTest: false,
        isEStopped: false,
        isFMSAttached: false,
        isDSAttached: false,
    },
    (set) => {
        NetworkTables.addKeyListener(
            "/FMSInfo/FMSControlData",
            (_, data: number) => {
                set({
                    isEnabled: Boolean(data & ENABLED_FLAG),
                    isAutonomous: Boolean(data & AUTO_FLAG),
                    isTest: Boolean(data & TEST_FLAG),
                    isEStopped: Boolean(data & EMERGENCY_STOP_FLAG),
                    isFMSAttached: Boolean(data & FMS_ATTACHED_FLAG),
                    isDSAttached: Boolean(data & DS_ATTACHED_FLAG),
                });
            },
            true
        );
        return () => {};
    }
);
