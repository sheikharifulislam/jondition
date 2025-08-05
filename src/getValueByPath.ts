import { isPlainObject } from "es-toolkit";
import { isVariable } from "./isVariable";
import { normalizePath } from "./normalizePath";

export const getValueByPath = (path: string, data: any) => {
    const updatePath = normalizePath(path).split(".");
    return updatePath.reduce((acc, path) => {
        if (isVariable(path)) {
            const updatePath = normalizePath(path);
            const dynamicPath = getValueByPath(updatePath, data) as string;
            if (isPlainObject(acc)) {
                return acc[dynamicPath];
            }

            return undefined;
        }

        if (isPlainObject(acc)) {
            return acc[path];
        }

        return undefined;
    }, data);
};
