import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import monkey_first from "./monkey_first.jpg";
import monkey_second from "./monkey_second.jpg";
import monkey_third from "./monkey_third.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={monkey_first}
            alt="monkey_first"
          />
          <Carousel.Caption>
            <h3>Monkey image</h3>
            <p>
              Amazing abilities of monkeys. They can do a lot more than we can
              we think. What? The intelligence quotient of the smartest monkey
              is The human norm is from 75 to 95. What have you achieved? Talk,
              joke, solve math problems, understand words, deceive, be sad,
              swear, love, fry fish? This Monkeys can do it too.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={monkey_second}
            alt="monkey_second"
          />
          <Carousel.Caption>
            <h3>One more monkey image</h3>
            <p>
              In the cartoon “Mowgli. Abduction" and the story "The Hunt of the
              Python Kaa" the monkey tribe kidnapped Mowgli and declared that he
              was different from monkeys only by the absence of a tail and fur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={monkey_third}
            alt="monkey_third"
          />
          <Carousel.Caption>
            <h3>Last monkey image</h3>
            <p>
              Monkeys were launched into space by: USA, USSR, France, Argentina,
              Russia, Iran. A total of 32 monkeys have flown into space.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
