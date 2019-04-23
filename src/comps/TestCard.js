import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  CardImgOverlay,
  Badge,
  ListGroup
} from "reactstrap";
import { AuthContext } from "./AuthContext";

const BarFeed = props => {
  return (
    <ListGroup
      style={{
        maxHeight: "70%",
        overflow: "auto",
        offsetPositionY: "-3em"
      }}
    >
      {props.call.map((call, id) => {
        let date = call.createdAt;
        let dateChange = date.slice(0, 10);
        let dateSwap = dateChange.split("-", 3);
        let newDate = dateSwap[1].concat("-", dateSwap[2], "-", dateSwap[0]);
        return (
          <Card
            key={id}
            inverse
            style={{
              opacity: "100%",
              backgroundColor: "Transparent",
              borderColor: "#333"
            }}
          >
            <CardBody style={{ backgroundColor: "black" }}>
              <h6>
                <Badge color="danger" pill>
                  {newDate}
                </Badge>
              </h6>
              <CardTitle>{call.grabber}</CardTitle>
              <CardText>{call.description}</CardText>
              <Badge color="danger" pill textAlign="center">
                {"This offer will last: "}
                {call.duration}
              </Badge>
            </CardBody>
          </Card>
        );
      })}
    </ListGroup>
  );
};

export default BarFeed;
