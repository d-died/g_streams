import _ from 'lodash'
import React from "react";
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        //at first, this function sends the userID and stream ID to teh database, which is best practice to trim down.
        // console.log(formValues)
        this.props.editStream(this.props.match.params.id, formValues)
        // if we look back at the action creator, editStream takes in 2 values. 
        // 1st arg is the id
        // 2nd arg is the edited formValues
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading ...</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                // initialValues is unique to ReduxForm. these are the 'names' of the fields from StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={ this.onSubmit } 
                />
            </div>
        )
    }
}

// state and ownProps are the 2 args accepted by mapStateToProps
// feel free to console.log either to see what's inside
// (we have to call ownProps because that is how we get this component's props out of the redux store 
// and into this mapStateToProps function. otherwise, props are only loaded into the component itself)
// quick refresher: state is accessing the redux store essentially. it is the state of all props from the whole app
const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    // console.log(ownProps)
    return { stream: state.streams[ ownProps.match.params.id ] }
    // the value in [] loads the unique props of whichever stream we clicked on
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)