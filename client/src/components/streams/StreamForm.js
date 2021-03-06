import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  // JSX for error message, based on meta.touch
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  // field component does not know what to render on its own -- assuming doing right thing
  // needs component prop, this hooks up redux
  // renderInput will be what Field renders -- arguments passed in automatically
  //  hook up relevant properties to text input -- onChange and value

  // but the spread operator {...input} to make the value and onChange properties of input as properties of the JSX element
  // meta.touched -- tells you if a user has clicked into an input, use for deciding to show error
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  // redux from does event.preventDefault for you
  // get object that has all form values
  // handleSubmit is from redux-form, you pass your callback
  // now gets it from parent component 
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        {/* name= what this field used for, can pass in custom props, passed in with component */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
// automatically called by redux-form --> every time submit form
// we define what it means to validate. all values in form -- key value pairs
// return error object -- key: the property with error -- val: the error message pairs
const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};
// does not need connect --it's parent does
export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
