import React from 'react';

import {Form} from 'semantic-ui-react';

export const RadioInput = (props) => {

  const {input, width, type, label} = props;

  return (
    <Form.Field>
      <div className='ul radio'>
        <input {...input} type={type}/> {' '}
        <label>{label}</label>
      </div>
    </Form.Field>
  );
}
