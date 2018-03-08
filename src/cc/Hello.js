import React from 'react';

import Option from './Option';
import Select from './Select';

export default () => <div>
  <Select defaultValue="blue">
    <Option value="red">Red</Option>
    <Option value="green">Green</Option>
    <Option value="blue">Blue</Option>
  </Select>
</div>
