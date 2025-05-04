import { formatQueryParams } from './Results';

describe('La fonction formatQueryParams', () => {
    it('should format answers into a query string with multiple answers', () => {
        const answers = { "1": true, "2": false, "3": true };
        const expected = 'a1=true&a2=false&a3=true';
        expect(formatQueryParams(answers)).toEqual(expected);
    });

    it('should format a single answer into a query string', () => {
        const answers = { "1": false };
        const expected = 'a1=false';
        expect(formatQueryParams(answers)).toEqual(expected);
    });
});