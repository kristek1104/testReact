import React, { Component } from "react";
import { Tab, Col, Container, Nav, Row } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">General</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Films</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    width="100%"
                    height="auto"
                    src="https://наука.рф/upload/iblock/b09/qik3kd3sg7to2qr6u8adjpnh057redcd/01%20-%20%D0%9A%D0%B0%D0%BA%20%D0%BE%D0%B1%D0%B5%D0%B7%D1%8C%D1%8F%D0%BD%D1%8B%20%D0%BF%D0%BE%D0%BC%D0%BE%D0%B3%D0%B0%D1%8E%D1%82%20%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D1%83.png"
                  />
                  <p>
                    Monkeys are animals that are closely related to humans. Both
                    monkeys and humans are considered members of the same group
                    of animals - they are called primates. We are especially
                    close to the great apes: gibbons, orangutans, gorillas,
                    chimpanzees and bonobos. Apes - from small gibbons to
                    gorillas - are somewhat reminiscent of humans: sometimes
                    they walk on two legs, quarrel and make up, play, hug, and
                    even use simple tools. For example, some chimpanzees and
                    orangutans in the wild poke sticks into anthills and then
                    lick the stuck insects off the stick as if it were candy. We
                    are similar not only in behavior, but also in all the
                    processes occurring in the body: from the way our heart
                    beats to the smallest molecules in the blood. This is not
                    surprising, because we descend from common ancestors. And
                    because primates and humans are so similar, they become
                    human counterparts for scientists.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    width="100%"
                    height="100%"
                    src="https://icdn.lenta.ru/images/2023/07/03/11/20230703115503577/wide_4_3_284d47f60850dc2b0398cea5ccd6bd0b.jpg"
                  />
                  <p>
                    Be sure to visit the monkeys that help scientists at the
                    institute’s zoo. During the excursion, you can just take a
                    walk, or you can take part in an experiment together with
                    the nursery staff. Suddenly you will like it, and you will
                    become a primatologist - a scientist who studies primates.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    width="100%"
                    height="auto"
                    src="https://images.techinsider.ru/upload/img_cache/79c/79c6c6387118ac469e957e001e1da716_ce_2400x1600x0x0.jpg"
                  />
                  <p>
                    Ars simia naturae ("Art is nature's monkey") The Monkey is
                    one of the 12 signs of the Chinese horoscope (see Monkey
                    (Chinese zodiac)) and one of the 20 in Mayan astrology (in
                    another translation - master)[19]. In the novel "Planet of
                    the Apes" and subsequent film adaptations, apes (gorillas,
                    chimpanzees, orangutans) are contrasted with people. In the
                    movie Rise of the Planet of the Apes, the virus that gave
                    the apes intelligence turned out to be fatal to humans.
                    Mister Nilsson is a monkey who belongs to Pippi Longstocking
                    from the book series by Astrid Lindgren. Darwin is a
                    chimpanzee who appears in the animated series The Wild
                    Thornberrys. In the animated series “My Friend is a Monkey,”
                    the boy Adam Lyon ended up in a school for animals, where
                    monkeys also study, by mistake. In the cartoon “Mowgli.
                    Abduction" and the story "The Hunt of the Python Kaa" the
                    monkey tribe kidnapped Mowgli and declared that he differs
                    from monkeys only in the absence of a tail and fur.
                    “Monkeys” is a Soviet animated series about the adventures
                    of baby monkeys who live with their mother in a zoo. In the
                    Indian poem Ramayana, Hanuman The Chinese story "Journey to
                    the West" features a mythical monkey - Sun Wukong or the
                    Monkey King. He is the main character of the story.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    width="100%"
                    height="auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Macaca-fascicularis_flk18447014.jpg"
                  />
                  <p>
                    Monkeys / Averyanov A. O. // Nikolai Kuzansky - Ocean
                    [Electronic resource]. - 2013. - P. 464. - (Big Russian
                    Encyclopedia: [in 35 volumes] / chief editor Yu. S. Osipov;
                    2004-2017, vol. 23). — ISBN 978-5-85270-360-6. Rossolimo O.
                    L., Pavlinov I. Ya., Kruskop S. V., Lisovsky A. A.,
                    Spasskaya N. N., Borisenko A. V., Panyutina A. A. Diversity
                    of mammals. Part 1. (Series “Diversity of Animals”) - M.:
                    KMK Publishing House, 2004. - P. 247, 268. - 366 p. — ISBN
                    5-87317-098-3 Complete illustrated encyclopedia. "Mammals"
                    Book. 1 = The New Encyclopedia of Mammals / ed. D.
                    MacDonald. - M.: Omega, 2007. - P. 291. - 3000 copies. —
                    ISBN 978-5-465-01346-8. Drobyshevsky S.V. The missing link.
                    Book one. Monkeys and everything, everything, everything. —
                    CORPUS, 2017. — 688 p. — ISBN 978-5-17-099215-7.
                    Meshcheryakov B. G., Meshcheryakova I. A. Introduction to
                    human science. M., Russian State University for the
                    Humanities, 1994, pp. 153-155. Borkin L. Ya. Carl Linnaeus
                    (1707-1778) as a zoologist // Species and speciation.
                    Analysis of new views and trends / Ed. A. F. Alimova and S.
                    D. Stepanyants. - St. Petersburg: Scientific T. KMK
                    publications, 2009. - 298 p. — ISBN 978-5-87317-589-5. - P.
                    9-78.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
