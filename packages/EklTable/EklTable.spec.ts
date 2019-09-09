import { shallowMount } from '@vue/test-utils';
import EklTable from './EklTable.vue';

describe('EklTable.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(EklTable, {
            propsData: { msg },
        });
        expect(wrapper.text()).toMatch(msg);
    });
    it('renders props.msg when not passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(EklTable, {
            propsData: { msg },
        });
        expect(wrapper.text()).toMatch('test2');
    });
});
