'use strict';

let { DateTime } = jest.genMockFromModule('luxon');

DateTime = {
    local: () => {
        return '0-000-00';
    },
    toLocaleString: () => {

    }
}

module.exports = { DateTime };