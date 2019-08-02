import React from "react";
import { Switch, Route } from "react-router-dom";

import StudentNameForm from "./StudentNameForm";
import Student from "./Student";
import Schedule from "./Schedule";
import NotFoundPage from "./NotFoundPage";

class App extends React.Component {
  render() {
    const Title = "Career Foundry Agenda"
    return (
      <>
        <p>{Title}</p>
        <Switch>
          <Route exact to="/" component={StudentNameForm} />
          <Route exact to="/student/:studentName" component={Student} />
          <Route
            exact
            to="/:studentName/schedule/:mentorName"
            component={Schedule}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }
}

export default App;
