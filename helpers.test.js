const timeHelper = require('./helpers');

jest.mock('luxon');

test('testing luxon', () => {
    const expectedValue = {
        days: undefined,
        time: 0
    }

    expect(timeHelper.getTimeUntilTekken('time')).toEqual(expectedValue);
});

describe('testing sooshDay', () => {
    var date1 = new Date('2019-05-15T12:00:00'); // true: 15th and weekday
    var date2 = new Date('2019-06-01T12:00:00'); // false: 1st and saturday
    var date3 = new Date('2019-06-03T12:00:00'); // true: 3rd and monday
    var date4 = new Date('2019-06-15T12:00:00'); // false: 15th and saturday
    var date5 = new Date('2019-06-17T12:00:00'); // true: 17th and monday

    test('true: 15th and weekday', () => {
        expect(timeHelper.sooshDay(date1)).toBe(true);
    });

    test('false: 1st and saturday', () => {
        expect(timeHelper.sooshDay(date2)).toBe(false);
    });

    test('true: 3rd and monday', () => {
        expect(timeHelper.sooshDay(date3)).toBe(true);
    });

    test('false: 15th and saturday', () => {
        expect(timeHelper.sooshDay(date4)).toBe(false);
    });

    test('true: 17th and monday', () => {
        expect(timeHelper.sooshDay(date5)).toBe(true);
    });

});
