import Head from 'next/head'
import { Button, Card, Col, Container, Input, Link, Modal, Row, Spacer, Text } from '@nextui-org/react';
import { BsGithub, BsFillSunFill } from 'react-icons/bs';
import logo from '../assets/logo.png'
import Image from 'next/image';
import { useState } from 'react/cjs/react.development';
export default function Home() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
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

              <Card.Footer css={{ mb: '$10' }}>
                <Row justify="center">

                  <Button css={{ w: '100%' }} color="primary" auto ghost onClick={handler}>Token detail</Button>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text b id="modal-title" size={18}>
            Token detail
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text size={14}>
            Token Contract Address: <Text b>12</Text>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
