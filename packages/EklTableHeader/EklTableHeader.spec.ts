import { shallowMount } from '@vue/test-utils';
import EklTableHeader from './EklTableHeader.vue';
import columns from '../EklTableHeader/data/columns';

describe('EklTableHeader.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(EklTableHeader, {
            propsData: { columns },
        });
    });

    it('renders props.columns when passed', () => {
        expect(wrapper.text()).toMatch(columns.map((column) => column.label).join(' '));
    });

    it('renders props.columns when not passed', () => {
        expect(wrapper.text()).not.toMatch('test2');
    });

    it('render thead', () => {
        expect(wrapper.find('thead').exists()).toBe(true);
    });

    it('renders all columns', () => {
        expect(wrapper.findAll('th').length).toBe(columns.length);
    });
});
