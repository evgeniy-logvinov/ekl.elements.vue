import { shallowMount, mount } from '@vue/test-utils';
import EklTable from './EklTable.vue';
import EklTableHeader from "@eklogvinov/ekl-table-header/EklTableHeader";
import EklTableRow from "@eklogvinov/ekl-table-row/EklTableRow";
import rows from './data/rows';
import columns from './data/columns';

describe('EklTable.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(EklTable, {
            propsData: { columns, rows },
        });
    });

    it('renders EklTableHeader', () => {
        expect(wrapper.find(EklTableHeader).is(EklTableHeader)).toBe(true);
    });

    it('renders EklTableRow', () => {
        expect(wrapper.find(EklTableRow).is(EklTableRow)).toBe(true);
    });
});
