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
                  <Link href="https://github.com/nextui-org/nextui">
                    <Button color="primary" auto ghost>
                      <BsGithub />
                    </Button>
                  </Link>
                  <Button color="gradient" auto ghost>
                    <BsFillSunFill />
                  </Button>
                </Row>
              </Col>
            </Row>
            <Card bordered shadow={false} hoverable css={{ mt: '$10' }}>
              <Row display="flex" justify="space-between" align='baseline'>
                <Text h1>Coin</Text>
                <Text h2>Get balance 👇</Text>
              </Row>
              <Button css={{ mt: '$10' }} color="primary" auto ghost>Get balance</Button>
              <Button css={{ mt: '$10' }} color="gradient" auto ghost>Claim tokens</Button>

              <Card.Footer>
                <Row justify="center">

                  <Button color="primary">Token detail</Button>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
