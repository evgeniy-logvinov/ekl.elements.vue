import { storiesOf } from '@storybook/vue'
import EklTableHeader from './EklTableHeader'

storiesOf('EklTableHeader', module)
  .add('normal', () => ({
    components: { EklTableHeader },
    template:
      `
      <EklTableHeader
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