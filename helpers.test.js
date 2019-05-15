const timeHelper = require('./helpers');

jest.mock('luxon');

test('testing luxon', () => {
    expect(timeHelper.getTimeUntilTekken('time')).toStrictEqual({ days: undefined, time: 0 });
});