import Head from 'next/head'
import { Button, Card, Col, Container, Link, Row, Spacer, Text } from '@nextui-org/react';
import { BsGithub, BsFillSunFill } from 'react-icons/bs';
import logo from '../assets/logo.png'
import Image from 'next/image';
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
            <Row ơ        >
              <Col>
                <Image src={logo} height={42.5} width={150} />
              </Col>
              <Col span={5}>
                <Row display="flex" justify="space-between">
                  <Button color="primary" auto ghost>
                    <BsGithub />
                  </Button>
                  <Button color="gradient" auto ghost>
                    <BsFillSunFill />
                  </Button>
                </Row>
              </Col>
            </Row>
            <Card bordered shadow={false} hoverable css={{ px: '$4' }}>
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
