import { storiesOf } from '@storybook/vue'
import { array } from "@storybook/addon-knobs";

import EklTableRow from './EklTableRow'
import EklTableRowRm from './EklTableRow.md'
import rows from './data/rows'
import columns from './data/columns'

storiesOf('EklTableRow', module)
  .add('normal', () => {
    return {
      components: { EklTableRow },
      props: {
        columns: {
          default: array('columns', columns)
        },
        rows: {
          default: array('rows', rows)
        },
      },
      template:
        `<table><EklTableRow :columns="columns" :rows="rows" /></table>`,
    }
  },
    {
      readme: {
        sidebar: EklTableRowRm,
      },
    })