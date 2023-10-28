import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Card, Container, CardGroup, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardGroup className="m-4">
            <Card border="success">
              <Card.Img
                variant="top"
                src="https://rsv.ru/blog/wp-content/uploads/2021/06/komanda-918x516.jpg"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  The world is developing by leaps and bounds, simultaneously
                  becoming simpler and more complex.
                </Card.Text>
                <Button variant="primary">About it</Button>
              </Card.Body>
            </Card>

            <Card border="success">
              <Card.Body>
                <Card.Title>People</Card.Title>
                <Card.Text>
                  More difficult because people are given increasingly difficult
                  tasks that cannot be accomplished alone.
                </Card.Text>
                <Button variant="primary">About it</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://the-challenger.ru/wp-content/uploads/2020/01/shutterstock_1377054161.jpg"
              />
            </Card>

            <Card border="success">
              <Card.Img
                variant="top"
                src="https://brander.ua/assets/2021-10/yak-formuyetsya-komanda-dlya-vikonannya-zavdannya-4.jpg"
              />
              <Card.Body>
                <Card.Title>Team</Card.Title>
                <Card.Text>
                  To solve them, a strong and effective team with specialists
                  from different fields is required.
                </Card.Text>
                <Button variant="primary">About it</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    );
  }
}
