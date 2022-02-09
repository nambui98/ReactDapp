import Head from 'next/head'
import { Button, Card, Col, Container, Input, Link, Loading, Modal, Row, Spacer, Text } from '@nextui-org/react';
import { BsGithub, BsFillSunFill, BsFillBrightnessHighFill, BsFillMoonFill } from 'react-icons/bs';
import { ethers } from 'ethers'
import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json'
import logo from '../assets/logo.png'
import Image from 'next/image';
import { useState } from 'react/cjs/react.development';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import useToken from '../hooks/useToken'

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [greeting, setGreetingValue] = useState()
  const handler = () => setVisible(true);
  const { theme, setTheme } = useNextTheme();
  const {
    getBalance,
    balance,
    isFetchingBalance,
    claimTokens,
    isClaiming,
    getVotes,
    castVote,
    votes,
  } = useToken()
  const closeHandler = () => {
    setVisible(false);
  };

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // call the smart contract, read the current greeting value
  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const data = await contract.greet()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  // call the smart contract, send an update
  async function setGreeting() {
    if (!greeting) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const transaction = await contract.setGreeting(greeting)
      await transaction.wait()
      fetchGreeting()
    }
  }

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
                <Row display="flex" justify="flex-end">
                  <a href="https://github.com/nextui-org/nextui">
                    <Button color="primary" auto ghost>
                      <BsGithub />
                    </Button>
                  </a>
                  <Button css={{ ml: '$8' }} color="gradient" auto ghost onClick={() => {
                    if (theme === 'light') {
                      setTheme('dark')
                    } else {
                      setTheme('light')
                    }
                  }}>
                    {
                      theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />
                    }
                  </Button>
                </Row>
              </Col>
            </Row>
            <Card bordered shadow={false} hoverable css={{ mt: '$10' }}>
              <Row display="flex" justify="space-between" align='baseline'>
                <Text h1>Coin</Text>
                <Text h2>{balance || 'Get balance 👇'}</Text>
              </Row>
              <Button css={{ mt: '$10' }} color="primary" auto ghost onClick={getBalance}>

                {
                  isFetchingBalance ?
                    <Loading type="spinner" color="white" size="sm" />
                    : 'Get balance'
                }
              </Button>
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
          <Text>
            Token Contract Address: <Text b>12</Text>
          </Text>
          <Text>
            Token Symbol: <Text b>12</Text>
          </Text>
          <Text>
            Token Decimal: <Text b>12</Text>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
