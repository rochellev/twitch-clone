import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id:
            "211819331345-ag4382do6br8ep504uiv76m0p7l5nm0i.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          // now have reference to returned auth object
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Not known if signed in.</div>;
    } else if (this.state.isSignedIn) {
      return <div>Yes, I am signed in.</div>;
    } else {
      return <div>No, not signed in.</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
