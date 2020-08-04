const showEarnings = require('../trials/showEarnings.js');
const {init} = require('../app.js');

describe('showEarnings trial', () => {
    it('showEarnings without photodiode box', () => {
        const config = init({USE_PHOTODIODE: false});
        const result = showEarnings(100, config, 10, false);
        expect(result.on_load()).toEqual(null);
        expect(result.on_finish()).toEqual(null);
        expect(result.stimulus).toContain('beads_container');
        expect(result.stimulus).not.toContain('photodiode-spot');
    });

    it('showEarnings with photodiode box', () => {
        const config = init({USE_PHOTODIODE: true});
        let data = { code: null }
        const result = showEarnings(100, config, 10, false,10,10);
        expect(result.on_load()).toEqual(undefined);
        expect(result.on_finish(data)).toEqual(10);
        expect(result.stimulus).toContain('beads_container');
        expect(result.stimulus).toContain('photodiode-spot');
    });

    it('check for earnings less than 0 with text-danger', () => {
        const config = init({USE_PHOTODIODE: true});
        const result = showEarnings(100, config, -1, false,10,10);
        expect(result.stimulus).toContain('text-danger')
    });

    it('check for earnings greater than 0 with text-success', () => {
        const config = init({USE_PHOTODIODE: true});
        const result = showEarnings(100, config, 10, false,10,10);
        expect(result.stimulus).toContain('text-success')
    });
  });