import React from "react";
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {

    renderInput({ input }) {
        return (
            // this takes all keyvalue properties and add them to the form object
            <input { ...input }/>
        )
    }

    render() {
        console.log(this.props)
        return (
            <form>
                <Field name='title' component={ this.renderInput }/>
                <Field name='description' component={ this.renderInput }/>
            </form>
        )
    }
}

// this is just redux form storing all of the information from the form
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate)