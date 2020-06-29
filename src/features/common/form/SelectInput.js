import React from 'react';
import {Select, Form, Label} from 'semantic-ui-react';

export const SelectInput = (props) => {

  const {
    input, type,
    placeholder,
    multiple, options,
    meta: {touched, error}} = props;

  return (
    <Form.Field error={touched && !!error}>
      <Select
        value={input.value || null}
        onChange={(e, data) => input.onChange(data.value)}
        placeholder={placeholder}
        multiple={multiple}
        options={options}
      />
      {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
  );
}
