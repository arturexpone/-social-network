import React from 'react';
import DatePicker from 'react-datepicker';
import {Form, Label} from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';

export const DateInput = (props) => {

  const {
    input: {value, onChange, onBlur},
    width,
    placeholder,
    meta: {touched, error},
    ...rest
  } = props;

  return (
    <Form.Field error={touched && !!error}>
      <DatePicker
        {...rest}
        selected={
          value
          ? (Object.prototype.toString.call(value) !== '[object Date]')
            ? value.toDate()
            : value
          : null
        }
        onChange={onChange}
        onBlur={(e, val) => onBlur(val)}
        placeholder='Event date'
        onChangeRaw={e => e.preventDefault()}
      />
      {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
  );
}
