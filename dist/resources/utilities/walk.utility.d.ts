export declare class WalkUtility {
    static walkAlongChildren<T>(object: T, childKey: keyof T, callback: (object: T[typeof childKey]) => boolean): void;
    static walkAndReturnObject(object: any, callback: (object: any) => any): any;
    static walkAndReturnVoid(object: any, callback: (objectPart: any) => void): void;
    static mirror<T extends Record<string, any>>(from: T, to: T): void;
}
