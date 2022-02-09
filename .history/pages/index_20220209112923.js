import Head from 'next/head'
import { Button, Card, Col, Container, Row, Spacer, Text } from '@nextui-org/react';
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container style={{ height: "100vh" }} display="flex" alignItems='center' justify="center">
        <Row display="flex" alignItems='center' justify="center">
          <Col span={6}>
            <Card bordered css={{ mw: "400px" }}>
              <Text h4>Next UI</Text>
              <Text>🚀  Beautiful and modern React UI library.</Text>
              <Card.Footer>
                <Link color="primary" target="_blank" href="https://github.com/nextui-org/nextui">
                  Visit source code on GitHub.
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
