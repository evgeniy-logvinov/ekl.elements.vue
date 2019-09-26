import { shallowMount } from '@vue/test-utils';
import EklTableRow from './EklTableRow.vue';
import rows from './data/rows';
import columns from './data/columns';

describe('EklTableRow.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(EklTableRow, {
            propsData: { columns, rows },
        });
    });

    it('renders props.rows all', () => {
        expect(wrapper.findAll('tr').length).toBe(rows.length);
    });

    it('renders all td', () => {
        expect(wrapper.findAll('td').length).toBe(rows.length * columns.length);
    });

    it('renders tbody', () => {
        expect(wrapper.find('tbody').exists()).toBe(true);
    });
});
