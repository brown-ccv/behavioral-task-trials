const showMessage = require('../trials/showMessage.js');
const {init} = require('../app.js');
const jsPsych = require('jspsych-react')

describe('showMessage trial', () => {
    it('showMessage without photodiode box', () => {
        const config = init({USE_PHOTODIODE: false});
        const message = 'Experiment Start'
        const result = showMessage('html_keyboard_response',100, config, message, false);
        expect(result.stimulus).toContain(message);
        expect(result.stimulus).not.toContain('photodiode-spot');
        expect(result.on_load()).toEqual(null);
        expect(result.on_finish()).toEqual(null);
    });


    it('showMessage with photodiode box and task code', () => {
        const config = init({USE_PHOTODIODE: true});
        const message = 'Experiment Start'
        let data = { code: null }
        const result = showMessage('html_keyboard_response',100, config, message, false,10,10);
        expect(result.stimulus).toContain(message);
        expect(result.stimulus).toContain('photodiode-spot');
        expect(result.on_load()).not.toEqual(null);
        expect(result.on_finish(data)).toEqual(10);
    });

    it('showMessage with jsPsych.NO_KEYS', () => {
        const config = init({USE_PHOTODIODE: false});
        const result = showMessage('html_button_response',100, config, false, undefined, undefined, undefined, jsPsych.NO_KEYS);
        expect(result.choices).toEqual(undefined);
    });

    it('showMessage with choices', () => {
        const config = init({USE_PHOTODIODE: false});
        const choices = ['p','q']
        const result = showMessage('html_button_response',100, config, false, undefined, undefined, undefined, choices);
        expect(result.choices).toEqual(choices);
    });

    it('showMessage with on start message', () => {
        const config = init({USE_PHOTODIODE: false});
        const message = 'Experiment Start'
        let trial = { stimulus: null }
        console.log(showMessage('html_button_response',undefined, config,'<h1>Hello</h1>', false, true, undefined, undefined, ['Continue']))
        const result = showMessage('html_button_response',100, config, message, true, false,10,10);
        expect(result.on_start(trial)).not.toEqual('');
    });
  });