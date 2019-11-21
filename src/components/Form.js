import React, { Component } from 'react';
import PropTypes from 'prop-types';

function FormInput({ name, title, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <input
        name={name}
        type='text'
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
      />
    </div>
  );
}

export default class Form extends Component {
  constructor(props) {
    super(props);

    let order = 0;

    this.state = {
      data: props.data.map(x => ({ ...x, order: order++ })),
    };
  }

  render() {
    if (!this.props.data) {
      return false;
    }

    const fields = [...this.state.data];

    fields.sort((a, b) => (a.order < b.order ? -1 : a.order > b.order ? 1 : 0));

    return (
      <div>
        {fields.map(field => (
          <FormInput
            {...field}
            key={field.name}
            onChange={text =>
              this.setState({
                data: [
                  ...this.state.data.filter(x => x.name !== field.name),
                  { ...field, value: text },
                ],
              })
            }
          />
        ))}

        <button
          onClick={() =>
            this.props.onSubmit &&
            this.props.onSubmit(
              this.state.data.map(field => {
                const a = { ...field };
                delete a.order;
                return a;
              })
            )
          }
          type='button'>
          submit
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    })
  ),
  onSubmit: PropTypes.func,
};
