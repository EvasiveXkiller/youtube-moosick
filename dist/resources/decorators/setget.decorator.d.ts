import type { Class } from 'type-fest';
/**
 * Adds a callback to when a property is set.
 * @param onSet Called when a property is set. Returns the value to be set by the setter.
 */
export declare function set<T, Context extends InstanceType<Class<any, any>>>(onSet: (this: Context, value: T) => T): (target: Context, name: string) => void;
/**
 * Adds a callback to when a property is get.
 * @param onGet Called when a property is get. Returns the value to be gotten by the getter.
 */
export declare function get<T, Context extends InstanceType<Class<any, any>>>(onGet: (this: Context, value: T) => T): (target: Context, name: string) => void;
