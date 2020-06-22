import React from 'react';
import DatePicker from 'react-datepicker/es';
import {Form, Label} from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';

export const DateInput = (props) => {

  const {
    input, width,
    placeholder,
    meta: {touched, error},
    ...rest
  } = props;

  return (
    <Form.Field error={touched && !!error}>
      <DatePicker
        {...rest}
        placeholder={placeholder}
        selected={input.value ? new Date(input.value) : null}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onChangeRaw={e => e.preventDefault()}
      />
      {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
  );
}
