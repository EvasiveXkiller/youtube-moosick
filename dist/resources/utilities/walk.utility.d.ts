export declare class WalkUtility {
    static walkAlongChildren<T>(object: T, childKey: keyof T, callback: (object: T[typeof childKey]) => boolean): void;
    static walkAndReturnObject(object: any, callback: (object: any) => any): any;
    static walkAndReturnVoid(object: any, callback: (objectPart: any) => void): void;
    static mirror<T extends Record<string, any>>(from: T, to: T): void;
    static walkAndCompare<T1 extends Record<string, any>, T2 extends Record<string, any>>(obj1: T1, obj2: T2, comparator: (v1: T1[keyof T1], v2: T2[keyof T2], key: keyof T1) => boolean): boolean;
}
