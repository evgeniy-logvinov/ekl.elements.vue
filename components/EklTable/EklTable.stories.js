import { storiesOf } from '@storybook/vue'
import EklTable from './EklTable'

var items = [
    ['Yair Lamb', 'yair.lamb@email.com'],
    ['Leonardo Payne', 'leonardo.payne@email.com'],
    ['Carl Henson', 'carl.henson@email.com'],
    ['Jensen Combs', 'jensen.combs@email.com'],
    ['Amiah Burton', 'amiah.burton@email.com'],
    ['Yaretzi Mayo', 'yaretzi.mayo@email.com'],
    ['Kamren Huffman', 'kamren.huffman@email.com']
]

storiesOf('EklTable', module)
    .add('with 7 items', () => ({
        components: { EklTable },
        template:
            `
      <EklTable
        :items="items"
      />
    `,
        data: () => ({
            items
        })
    }))
    .add('with 7 items + header', () => ({
        components: { EklTable },
        template:
            `
          <EklTable
            :header="header"
            :items="items"
          />
        `,
        data: () => ({
            header: [
                'Name',
                'Email'
            ],
            items
        })
    }))