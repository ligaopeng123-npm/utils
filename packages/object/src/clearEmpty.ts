export const clearEmpty = (origin: any) => Object.keys(origin).reduce(
    (res: object, key: string) => [null, undefined, ''].includes(origin[key])
        ? res
        : ({ ...res, [key]: origin[key]}),
    {}
)
