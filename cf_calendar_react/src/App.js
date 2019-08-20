import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Header, Divider } from "semantic-ui-react";

import Students from "./Students";
import Student from "./Student";
import Date from "./Date";
import NotFoundPage from "./NotFoundPage";

class App extends React.Component {
  render() {
    const Title = "Schedule Appointment";
    return (
      <Container>
        <p />
        <Container text>
          <Header as="h1" textAlign="center">
            {Title}
          </Header>
        </Container>
        <Divider />
        <Container>
          <Switch>
            <Route exact path="/" component={Students} />
            <Route path="/students/:studentId" component={Student} />
            <Route
              exact
              path="/:studentId/schedule/:mentorId"
              component={Date}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>
      </Container>
    );
  }
}

export default App;
