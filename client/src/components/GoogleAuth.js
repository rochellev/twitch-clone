import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        client_id:
          "211819331345-ag4382do6br8ep504uiv76m0p7l5nm0i.apps.googleusercontent.com",
        scope: 'email'
      });
    });
  }
  render() {
    return <div>Google GoogleAuth</div>;
  }
}

export default GoogleAuth;
