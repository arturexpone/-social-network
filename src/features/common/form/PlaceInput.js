import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {Form, Label, List, Segment} from 'semantic-ui-react';


export const PlaceInput = (props) => {

  const {
    input: {value, onChange, onBlur},
    width, options, placeholder,
    meta: {touched, error}
  } = props;

  const mount = ({getInputProps, suggestions, getSuggestionItemProps, loading}) => {
    return (
      <Form.Field error={touched && !!error}>
        <input placeholder={placeholder} {...getInputProps({placeholder, onBlur})}/>
        {touched && error && <Label basic color='red'>{error}</Label>}
        {suggestions.length > 0 && (
          <Segment>
            {loading && <div>Loading...</div>}
            <List selection>
              {suggestions.map(suggestion => (
                <List.Item {...getSuggestionItemProps(suggestion)}>
                  <List.Header>
                    {suggestion.formattedSuggestion.mainText}
                  </List.Header>
                  <List.Description>
                    {suggestion.formattedSuggestion.secondaryText}
                  </List.Description>
                </List.Item>
              ))}
            </List>
          </Segment>
        )}
      </Form.Field>
    )
  };

  return (
    <PlacesAutocomplete
      value={value}
      onChange={onChange}
      searchOptions={options}
    >
      {mount}
    </PlacesAutocomplete>
  );
}
