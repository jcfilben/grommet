import React from 'react';

import { Grommet, Box, DataTable, CheckBox } from 'grommet';
import { grommet } from 'grommet/themes';

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

const controlledColumns = columns.map(col => ({ ...col }));
delete controlledColumns[0].footer;
delete controlledColumns[3].footer;
delete controlledColumns[4].footer;
delete controlledColumns[4].aggregate;

export const ControlledDataTable = () => {
  const [checked, setChecked] = React.useState([]);

  const onCheck = (event, value) => {
    if (event.target.checked) {
      setChecked([...checked, value]);
    } else {
      setChecked(checked.filter(item => item !== value));
    }
  };

  const onCheckAll = event =>
    setChecked(event.target.checked ? DATA.map(datum => datum.name) : []);

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="medium">
        <DataTable
          columns={[
            {
              property: 'checkbox',
              render: datum => (
                <CheckBox
                  /* eslint-disable react/destructuring-assignment */
                  key={datum.name}
                  checked={checked.indexOf(datum.name) !== -1}
                  onChange={e => onCheck(e, datum.name)}
                  /* eslint-enable react/destructuring-assignment */
                />
              ),
              header: (
                <CheckBox
                  checked={checked.length === DATA.length}
                  indeterminate={
                    checked.length > 0 && checked.length < DATA.length
                  }
                  onChange={onCheckAll}
                />
              ),
              sortable: false,
            },
            ...controlledColumns,
          ].map(col => ({ ...col }))}
          data={DATA}
          sortable
          rowDetails={row => {
            if (row.name === 'Alan') {
              return <Box> {row.name} </Box>;
            }
            return <Box>Blah {row.name} </Box>;
          }}
          size="medium"
        />
      </Box>
    </Grommet>
  );
};

ControlledDataTable.storyName = 'rowDetails';

export default {
  title: 'Visualizations/DataTable/rowDetails',
};
