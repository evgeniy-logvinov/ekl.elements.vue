import { storiesOf } from '@storybook/vue'
import EklTableRow from './EklTableRow'

storiesOf('EklTableRow', module)
  .add('normal', () => ({
    components: { EklTableRow },
    template:
      `
      <EklTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'José Silva',
        'email@email.com'
      ]
    })
  }))