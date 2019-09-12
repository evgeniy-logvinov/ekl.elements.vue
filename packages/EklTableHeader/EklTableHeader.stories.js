import { storiesOf } from '@storybook/vue'
import { array } from "@storybook/addon-knobs";

import EklTableHeader from './EklTableHeader'
import EklTableHeaderRm from './EklTableHeader.md'

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

storiesOf('EklTableHeader', module)
  .add('normal', () => {
    return {
      components: { EklTableHeader },
      props: {
        columns: {
          default: array('columns', columns),
        },
      },
      template:
        `<table>
          <EklTableHeader
            :columns="columns"
          />
        </table>`,
    }
  },
    {
      readme: {
        sidebar: EklTableHeaderRm,
      },
    })
  .add('long header name', () => {
    return {
      components: { EklTableHeader },
      props: {
        columns: {
          default: array('columns', [
            {
              name: "title",
              label: 'very very long name for header',
              field: "name.title",
              width: "100",
              type: "text",
              isMandatory: true
            },
            {
              name: "veryLong",
              label: "Email field very very long too",
              field: "name.title",
              width: "100",
              type: "text",
              isMandatory: true
            }])
        },
      },
      template: `<table><EklTableHeader :columns="columns"/></table>`,

    }
  },
    {
      readme: {
        sidebar: EklTableHeaderRm,
      },
    })
