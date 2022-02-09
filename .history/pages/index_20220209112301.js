import Head from 'next/head'
import { Button, Card, Col, Container, Row, Spacer, Text } from '@nextui-org/react';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container gap={30}>
        <Row gap={1}>
          <Col>
            <Card color="primary">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 2
              </Text>
            </Card>
          </Col>
          <Col>
            <Card color="primary">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                2 of 2
              </Text>
            </Card>
          </Col>
        </Row>
        <Spacer y={1} />
        <Row gap={1}>
          <Col>
            <Card color="primary">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 3
              </Text>
            </Card>
          </Col>
          <Col>
            <Card color="primary">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                2 of 3
              </Text>
            </Card>
          </Col>
          <Col>
            <Card color="primary">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                3 of 3
              </Text>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}
