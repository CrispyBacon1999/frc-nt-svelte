/// <reference types="svelte" />
// import type { SvelteComponentTyped } from "svelte";
// declare module "frc-nt-svelte" {
//     // Components
//     export interface GridItemProps {
//         colSpan: number;
//         rowSpan: number;
//     }

//     export interface NetworkTableIndicator {
//         ntKey: string;
//     }

//     export interface AutonomousPickerProps
//         extends GridItemProps,
//             NetworkTableIndicator {}

//     export class AutonomousPicker extends SvelteComponentTyped<
//         AutonomousPickerProps,
//         {},
//         {}
//     > {}

//     export interface BooleanIndicatorProps
//         extends GridItemProps,
//             NetworkTableIndicator {}

//     export class BooleanIndicator extends SvelteComponentTyped<
//         BooleanIndicatorProps,
//         {},
//         {}
//     > {}

//     //Utils
//     export interface NetworkTablesInstance {
//         addKeyListener<T>(
//             key: string,
//             callback: (key: string, data: T, isNew: boolean) => void,
//             immediateNotify?: boolean
//         ): () => void;
//         addConnectionListener(
//             callback: (connected: boolean) => void,
//             immediateNotify?: boolean
//         ): () => void;
//         addRobotConnectionListener(callback: () => void): () => void;
//         addGlobalListener<T>(
//             callback: (key: string, data: T, isNew: boolean) => void,
//             immediateNotify?: boolean
//         ): () => void;
//         getValue(key: string): any;
//         setValue<T>(key: string, value: T): void;
//         isRobotConnected(): boolean;
//     }

//     export const NetworkTables: NetworkTablesInstance;

//     // Grid

//     // Stores
// }

declare global {
    export const NetworkTables = {};
}

declare const NetworkTables: {
    addKeyListener<T>(
        key: string,
        callback: (key: string, data: T, isNew: boolean) => void,
        immediateNotify?: boolean
    ): () => void;
    addConnectionListener(
        callback: (connected: boolean) => void,
        immediateNotify?: boolean
    ): () => void;
    addRobotConnectionListener(callback: () => void): () => void;
    addGlobalListener<T>(
        callback: (key: string, data: T, isNew: boolean) => void,
        immediateNotify?: boolean
    ): () => void;
    getValue(key: string): any;
    setValue<T>(key: string, value: T): void;
    isRobotConnected(): boolean;
};
