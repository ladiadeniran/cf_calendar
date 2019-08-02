import React from "react";
import { Switch, Route } from "react-router-dom";

import Students from "./Students";
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
          <Route exact path="/" component={Students} />
          <Route path="/students/:studentId" component={Student} />
          <Route
            exact
            path="/:studentId/schedule/:mentorId"
            component={Schedule}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }
}

export default App;
