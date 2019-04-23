import React from "react";
import { Table, Button, Container } from "reactstrap";

const CallLog = props => {
  //1
  return (
    <Container>
      <h3>YOUR CALL HISTORY</h3>
      <hr />
      <Table responsive dark hover>
        <thead>
          <tr>
            <th>Date made</th>
            <th>Your Establishment</th>
            <th>Description</th>
            <th>Duration</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.call.map((call, id) => {
            let date = call.createdAt;
            let dateChange = date.slice(0, 10);
            let dateSwap = dateChange.split("-", 3);
            let newDate = dateSwap[1].concat(
              "-",
              dateSwap[2],
              "-",
              dateSwap[0]
            );
            return (
              //2
              <tr key={id}>
                <th scope="row">{newDate}</th>
                <td>{call.grabber}</td>
                <td>{call.description}</td>
                <td>{call.duration}</td>
                <td>
                  <Button
                    id={call.id}
                    onClick={e => props.update(e, call)}
                    color="info"
                  >
                    Edit
                  </Button>

                  <Button
                    id={call.id}
                    onClick={props.delete}
                    color="danger"
                    style={{ marginLeft: "10px" }}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default CallLog;
