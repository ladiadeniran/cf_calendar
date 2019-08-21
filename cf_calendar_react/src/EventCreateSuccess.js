import React from "react";
import {Redirect} from "react-router-dom";
import {Header} from "semantic-ui-react";
import moment from "moment";

const EventCreateSuccess = (props) => {
  const { event } = props.location.state;
  if (!event) {
    return <Redirect to="/students" />;
  }

  return (
    <>
      <Header as='h5'>{`The call has been scheduled and is slated for ${event.date} with the agenda below`} </Header>
      <Header sub>{event.description}</Header>
    </>
  );
}

export default EventCreateSuccess;
