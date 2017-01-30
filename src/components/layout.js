import React from "react"
import { connect } from "react-redux"
import { fetchTopics } from "../actions/topicsActions"
import Topic from "./Topic"

const mapStateToProps = (store) => {
    return {
        topics: store.topics.topics,
    }
}
class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchTopics())
    }
    render() {
        const { topics } = this.props;
        if (!topics.length) {
            return null;
        }
        const mappedTopics = topics.map(topic => <Topic key={topic.id} topic={topic.name} desc={topic.desc} />)
        return <div className="container">
            <h1>Messageboard app</h1>
            <hr/>
            <h2>Topics</h2>
            <div className="row">
                {mappedTopics}
            </div>
        </div>
    }
}
export default Layout = connect(
    mapStateToProps
)(Layout);
