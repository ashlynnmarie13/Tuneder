import React from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messages: []
    };

    this.socket = io("localhost:3002");

    this.socket.on("RECEIVE_MESSAGE", function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages);
    };

    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit("SEND_MESSAGE", {
        message: this.state.message
      });
      this.setState({ message: "" });
    };
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const name = this.props.profile.profile
      ? this.props.profile.profile.name
      : "loading...";
    console.log(this.props.profile.profile && this.props.profile.profile.name);

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Send your message</div>
                <hr />
                <div className="messages" />
                {this.state.messages.map(message => {
                  return (
                    <div>
                      {name}: {message.message}
                    </div>
                  );
                })}
              </div>
              <div className="card-footer">
                <h3>{name}</h3>

                <br />
                <input
                  type="text"
                  placeholder="Message"
                  className="form-control"
                  value={this.state.message}
                  onChange={ev => this.setState({ message: ev.target.value })}
                />
                <br />
                <br />
                <button
                  onClick={this.sendMessage}
                  className="btn btn-primary form-control"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Chat);
