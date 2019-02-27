import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createStream } from '../../reducers/streams/action-creators';

const mapStateToProps = state => ({
  currentUserId: state.authStatus.currentUserId
});

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

class FormCreate extends Component {
  handleFormSubmit = values => {
    this.props.createStream(values, this.props.currentUserId);
  }

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
    const { handleSubmit } = this.props; // método padrão de submit do componente FormCreate

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <Field name="title" component={this.renderField} type="text" label="Title" />
        <Field name="description" component={this.renderField} type="text" label="Description" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default connect(mapStateToProps, { createStream })(reduxForm({
  form: 'formCreate',
  validate
})(FormCreate));
