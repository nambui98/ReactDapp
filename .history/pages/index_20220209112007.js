import Head from 'next/head'
import { Button, Card, Col, Container, Row, Text } from '@nextui-org/react';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Card color="primary">
            <Row justify="center" align="center">
              <Col>
                <Text h6 size={15} color="white" css={{ m: 0 }}>
                  NextUI gives you the best developer experience with all the features you need for building beautiful and modern websites and applications.
                </Text>
              </Col>
            </Row>
          </Card>
        </Container>
      </main>

    </div>
  )
}
