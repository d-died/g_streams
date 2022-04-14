import React from "react";
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
    // this was copy pasted entirely from StreamCreate. we adjusted the name/export, and changed the onSubmit function/
    // we changed onSubmit as to expect that parent components (ie Create and Edit) will pass down a prop 
    // called 'onSubmit' to this component and onSubmit uses it. 

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{ error }</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{ label }</label>
                {/* this weird syntax takes all keyvalue properties and add them to the form object */}
                <input { ...input } autoComplete='off'/>
                {this.renderError(meta)}
            </div>
            
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={ this.props.handleSubmit(this.onSubmit) }>
                <Field name='title' component={ this.renderInput } label='Enter Title'/>
                <Field name='description' component={ this.renderInput } label='Enter description'/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'You must enter a title'
    } 
    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }

    return errors
}

// this is just redux form storing all of the information from the form
export default reduxForm({
    form: 'streamForm',
    validate: validate // can be just 'validate' without the colon thibit
})(StreamForm)

