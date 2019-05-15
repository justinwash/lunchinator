'use strict';

let { DateTime } = jest.genMockFromModule('luxon');

DateTime = {
    local: () => {
        return {
            toLocaleString: () => {
                return 'string';
            }
        }
    }
}

module.exports = { DateTime };