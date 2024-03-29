import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.description) {
    errors.description = 'Required'
  }
  return errors;
}

class StreamForm extends Component {
  renderField = props => {
    const { input, label, type, meta } = props;
    // console.log(props);
    return (
      <div>
        <label htmlFor={input.name}>{label}</label>
        <input {...input} placeholder={label} type={type} />
        {meta.touched && meta.error ? (<span>{meta.error}</span>) : null}
      </div>
    )
  }

  render() {
    const { handleSubmit, handleFormSubmit } = this.props; // handleSubmit é método padrão de submit do componente StreamForm (já aplica o prevent default)

    return (
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Field name="title" component={this.renderField} type="text" label="Title" />
        <Field name="description" component={this.renderField} type="text" label="Description" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamForm',
  validate,
  enableReinitialize: true
})(StreamForm);
