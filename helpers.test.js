const timeHelper = require('./helpers');

jest.mock('luxon');

test('testing luxon', () => {
    const expectedValue = {
        days: '0',
        time: '1:30'
    }

    expect(timeHelper.getTimeUntilTekken('time')).toBe(expectedValue);
});

describe('testing sooshDay', () => {
    var date1 = new Date('2019-05-15T12:00:00'); // true: 15th and weekday
    var date2 = new Date('2019-06-01T12:00:00'); // false: 1st and saturday
    var date3 = new Date('2019-06-03T12:00:00'); // true: 3rd and monday
    var date4 = new Date('2019-06-15T12:00:00'); // false: 15th and saturday
    var date5 = new Date('2019-06-17T12:00:00'); // true: 17th and monday

    it('true: 15th and weekday', () => {
        expect(timeHelper.sooshDay(date1)).toBe(true);
    });

    it('false: 1st and saturday', () => {
        expect(timeHelper.sooshDay(date2)).toBe(false);
    });

    it('true: 3rd and monday', () => {
        expect(timeHelper.sooshDay(date3)).toBe(true);
    });

    it('false: 15th and saturday', () => {
        expect(timeHelper.sooshDay(date4)).toBe(false);
    });

    it('true: 17th and monday', () => {
        expect(timeHelper.sooshDay(date5)).toBe(true);
    });

});
