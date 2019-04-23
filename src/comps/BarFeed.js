import React from "react";
import { Table, CardBody } from "reactstrap";

const BarFeed = props => {
  //1
  return (
    <CardBody>
      <Table dark responsive>
        <thead>
          <tr>
            <th>Date made</th>
            <th>Establishment</th>
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
            console.log(newDate);

            return (
              <tr key={id}>
                <th scope="row">{newDate}</th>
                <td>{call.grabber}</td>
                <td>{call.description}</td>
                <td>{call.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </CardBody>
  );
};

export default BarFeed;
