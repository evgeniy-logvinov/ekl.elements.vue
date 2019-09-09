import { shallowMount } from '@vue/test-utils';
import EklTableHeader from './EklTableHeader.vue';

describe('EklTableHeader.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(EklTableHeader, {
            propsData: { values: ['test'] },
        });
        expect(wrapper.text()).toMatch(msg);
    });
    it('renders props.msg when not passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(EklTableHeader, {
            propsData: { values: ['test'] },
        });
        expect(wrapper.text()).toMatch('test2');
    });
});
