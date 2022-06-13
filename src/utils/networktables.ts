import "../../pynetworktables2js/pynetworktables2js/js/networktables";

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

export default NetworkTables;
