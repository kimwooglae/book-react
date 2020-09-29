import {addNumber} from './util';

it('add two numbers', () => {
    const result = addNumber(2,3);
    expect(result).toBe(5);
});