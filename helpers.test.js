const timeHelper = require('./helpers');

jest.mock('luxon');

test('testing luxon', () => {
    const expectedValue = {
        days: '0',
        time: '1:30'
    }

    expect(timeHelper.getTimeUntilTekken('time').toBe(expectedValue));
});