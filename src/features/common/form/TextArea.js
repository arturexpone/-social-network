import React from 'react';
import {Label, Form} from 'semantic-ui-react';

export const TextArea = (props) => {

  const {input, rows, width, type, placeholder, meta: {touched, error}} = props;

  return (
    <Form.Field error={touched && !!error}>
      <textarea {...input} placeholder={placeholder} type={type} rows={rows}>
        {touched && error && <Label basic color='red'>{error}</Label>}
      </textarea>
    </Form.Field>
  );
}
