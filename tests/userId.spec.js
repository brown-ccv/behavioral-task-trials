const userId = require('../trials/userId.js');
const {init} = require('../app.js');
const jsPsych = require('jspsych-react')

describe('userId trial', () => {
    it('check for set ID message', () => {
        const config = init({USE_MTURK: true});
        const setIdMessage = "Setting User ID"
        const result = userId(jsPsych, 100, config, setIdMessage, false);
        expect(result.stimulus).toContain(setIdMessage);
    });
  });