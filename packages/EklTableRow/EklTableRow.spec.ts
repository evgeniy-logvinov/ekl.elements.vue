import { shallowMount } from '@vue/test-utils';
import EklTableRow from './EklTableRow.vue';

describe('EklTableRow.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(EklTableRow, {
            propsData: { values: ['test'] },
        });
        expect(wrapper.text()).toMatch(msg);
    });
    it('renders props.msg when not passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(EklTableRow, {
            propsData: { values: ['test'] },
        });
        expect(wrapper.text()).toMatch('test2');
    });
});
