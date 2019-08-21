import React from "react";
import {Redirect} from "react-router-dom";
import {Header, Container} from "semantic-ui-react";
import moment from "moment";

const EventCreateSuccess = (props) => {
  const { event } = props.location.state;
  if (!event) {
    return <Redirect to="/students" />;
  }

  return (
    <Container textAlign="center">
      <Header as="h2">
        The event has been successfully scheduled and is slated for
      </Header>
      <Header sub>
        Date: {`${moment(event.date).format("Do MMMM, YYYY")}`}
      </Header>
      <Header sub>Time: {`${moment(event.date).format("hh:mm A")}`} </Header>
      <Header sub>Agenda</Header>
      <p>{event.description}</p>
    </Container>
  );
}

export default EventCreateSuccess;
