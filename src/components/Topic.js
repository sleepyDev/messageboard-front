import React from "react";

export default class Topic extends React.Component {
    render() {
        return <div className="col s12 m6">
            <div className="card small blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{this.props.topic}</span>
                    <p>{this.props.desc}</p>
                </div>
            </div>
        </div>
    }
}
