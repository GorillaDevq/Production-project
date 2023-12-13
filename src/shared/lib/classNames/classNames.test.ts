import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('Function with 3 parameters', () => {
        const received = classNames('App', { collapsed: true, hidden: false }, ['opened']);
        const expected = 'App opened collapsed';
        expect(received).toBe(expected);
    });

    test('Function with 3 parameters, mods: undefined', () => {
        const received = classNames('App', { collapsed: undefined, hidden: undefined }, ['opened']);
        const expected = 'App opened ';
        expect(received).toBe(expected);
    });
});
