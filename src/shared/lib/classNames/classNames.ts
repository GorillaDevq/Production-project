type Mods = Record<string, boolean | string>

export function classNames(className: string, mods: Mods = {}, additional: string[] = []): string {
    const resultModes = Object.entries(mods)
        .filter(([className, boolean]) => boolean === true)
        .map(([className, boolean]) => className)
        .join(' ');

    return [
        className,
        ...additional.filter(Boolean),
        resultModes,
    ].join(' ');
}
