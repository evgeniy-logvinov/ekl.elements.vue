import { storiesOf } from '@storybook/vue'
import ElkTableRow from './ElkTableRow'

storiesOf('ElkTableRow', module)
  .add('normal', () => ({
    components: { ElkTableRow },
    template:
      `
      <ElkTableRow
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