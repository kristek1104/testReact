import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <div className="media d-flex align-items-center m-5">
              <div className="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  src="https://static.uwcdn.net//yugopolis-cache/media/cache/news/data/img/3fcc6843212cfe56959dd387eeab1d2b/209452.jpg"
                  alt="img"
                />
              </div>
              <div className="media-body m-3">
                <h5>Blog Post</h5>
                <p>
                  The eternal question: why does a manager often lack a working
                  day, while his subordinates have nothing to fill it with? A
                  couple of years ago, based on a wide variety of imported
                  sources, which I simply can’t remember now, I sketched out an
                  abstract for an answer to this question.
                </p>
              </div>
            </div>
            <div className="media d-flex align-items-center m-5">
              <div className="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  src="https://facts.museum/img/facts/26.jpg"
                  alt="img"
                />
              </div>
              <div className="media-body m-3">
                <h5>Blog Post</h5>
                <p>
                  Japanese zoologists explained why monkeys cannot speak: a
                  problem with the control of sound vibrations
                </p>
              </div>
            </div>
            <div className="media d-flex align-items-center m-5">
              <div className="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  src="https://cdnn21.img.ria.ru/images/146095/02/1460950266_491:0:3627:3136_1920x0_80_0_0_b2fa213b2de09667975ba6598ae34edb.jpg"
                  alt="img"
                />
              </div>
              <div className="media-body m-3">
                <h5>Blog Post</h5>
                <p>
                  Recent studies conducted by Japanese scientists reveal that
                  the vocal apparatus of monkeys is much more complex than that
                  of humans. Monkeys' vocal cords contain thin bands of
                  membranes, unlike ours. This creates difficulties in
                  controlling the amplitude and frequency of sound vibrations in
                  monkeys. Apparently, nature simplified the human vocal
                  apparatus, which contributed to the development of speech.
                  While in monkeys it remained in a more complex form.
                </p>
              </div>
            </div>
            <div className="media d-flex align-items-center m-5">
              <div className="flex-shrink-0">
                <img
                  width={150}
                  height={150}
                  src="https://img.freepik.com/free-photo/beautiful-monkeys-outdoors_23-2150754496.jpg"
                  alt="img"
                />
              </div>
              <div className="media-body m-3">
                <h5>Blog Post</h5>
                <p>
                  Researchers from Princeton University and the University of
                  Vienna suggest that monkeys are quite capable of creating
                  sounds similar to human speech, and even combining them into
                  words. They discovered this by analyzing x-rays of macaque
                  throats. Through special software modeling, they were able to
                  recreate the sounds that could be produced by the vocal
                  apparatus of monkeys. For example, the phrase “Will you marry
                  me?” would have sounded quite rough and raspy, but still
                  recognizable, if it had been uttered by a monkey.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
