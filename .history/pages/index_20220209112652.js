import Head from 'next/head'
import { Button, Card, Col, Container, Row, Spacer, Text } from '@nextui-org/react';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container style={{ height: "100vh" }} alignItems='center' justify="center">
        <Row >
          <Col span={6}>
            <Card color="primary">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 2
              </Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
