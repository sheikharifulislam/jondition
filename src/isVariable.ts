export const isVariable = (value: string): boolean => {
    return /^{{|}}$/g.test(value);
};
