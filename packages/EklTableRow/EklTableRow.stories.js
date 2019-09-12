import { storiesOf } from '@storybook/vue'
import { array } from "@storybook/addon-knobs";

import EklTableRow from './EklTableRow'
import EklTableRowRm from './EklTableRow.md'

const columns = [
  {
    name: "title",
    label: "Title",
    field: "name.title",
    width: "100",
    type: "text",
    isMandatory: true
  },
  {
    name: "firstName",
    label: "First Name",
    field: "name.first",
    width: "200",
    type: "text",
    isMandatory: true
  },
  {
    name: "lastName",
    label: "Last Name",
    field: "name.last",
    width: "200",
    type: "text",
    isMandatory: true
  },
  {
    name: "dataOfBirth",
    label: "Date of Birth",
    field: "dob",
    type: "date",
    width: "200",
    format: "yyyy-MM-dd"
  }
];

const rows = [
  {
    name: { title: 'Yair Lamb', first: 'First', last: 'Last' },
    dob: '11.11.2011'
  },
  {
    name: { title: 'Leonardo Payne', first: 'Leonardo', last: 'Payne' },
    dob: '12.12.2012'
  },
  {
    name: { title: 'Carl Henson', first: 'Carl', last: 'Henson' },
    dob: '12.13.2013'
  },
  {
    name: { title: 'Jensen Combs', first: 'Jensen', last: 'Combs' },
    dob: '01.13.2014'
  },
  {
    name: { title: 'Amiah Burton', first: 'Amiah', last: 'Burton' },
    dob: '01.13.2016'
  },
  {
    name: { title: 'Amiah Burton', first: 'Amiah', last: 'Burton' },
    dob: '03.13.2016'
  },
  {
    name: { title: 'Yaretzi Mayo', first: 'Yaretzi', last: 'Mayo' },
    dob: '02.13.2016'
  },
  {
    name: { title: 'Kamren Huffman', first: 'Kamren', last: 'Huffman' },
    dob: '05.03.2018'
  },
]

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