export const arr2enum = (arr: any[], valueKey: string = 'id', labelKey: string = 'name'): object => arr.reduce(
    (pre: object, cur: any) => ({
        ...pre,
        [cur[valueKey]] : cur[labelKey]
    }),
    {}
)
