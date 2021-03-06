import { Button, Card, Col, Container, Loading, Modal, Row, Text } from '@nextui-org/react';
import { ethers } from 'ethers';
import { useTheme as useNextTheme } from 'next-themes';
import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { BsFillMoonFill, BsFillSunFill, BsGithub } from 'react-icons/bs';
import logo from '../public/logo.png';
import useToken from '../hooks/useToken';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(true)
  const handler = () => {
    getInfoToken()
    setVisible(true);
  }
  const { theme, setTheme } = useNextTheme();
  const {
    getBalance,
    balance,
    isFetchingBalance,
    claimTokens,
    isClaiming,
    getInfoToken,
    info
  } = useToken()
  const closeHandler = () => {
    setVisible(false);
  };
  const checkNetwork = useCallback(async () => {
    if (!window.ethereum) return
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const { name } = await provider.getNetwork()
      console.log(name);
      if (name === 'bnbt') {
        setIsCorrectNetwork(true)
      } else {
        setIsCorrectNetwork(false)
      }
    } catch (error) {
      console.error(error)
    }
  }, [])
  useEffect(() => {
    checkNetwork()
    const networkChecker = setInterval(checkNetwork, 5000)
    return () => clearInterval(networkChecker)
  }, [checkNetwork])
  return (
    <div className="container">
      <Head>
        <title>Dapp make by nambv</title>
        <link rel="icon" href="/logoIcon.png" />
      </Head>

      <Container xl sm md lg xs style={{ height: "100vh" }} display="flex" alignItems='center' justify="center">
        <Row display="flex" alignItems='center' justify="center">
          <Col>
            <Row ơ        >
              <Col>
                <Image src={logo} height={42.5} width={150} />
              </Col>
              <Col span={5}>
                <Row display="flex" justify="flex-end">
                  <a href="https://github.com/nambui98/ReactDapp">
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
              {!isCorrectNetwork && (
                <Card color='error'>
                  <Text css={{ fontWeight: '$bold', color: '$white' }} transform="capitalize">
                    You must connect to the Smart Chain - Testnet
                  </Text>
                </Card>

              )}
              <Row display="flex" justify="space-between" align='baseline'>
                <Text h1>Coin</Text>
                <Text h2>{balance || 'Get balance 👇'}</Text>
              </Row>
              <Button css={{ mt: '$10' }} disabled={!isCorrectNetwork || isFetchingBalance} clickable={!isFetchingBalance} color="primary" auto ghost={!isFetchingBalance} onClick={getBalance}>
                {
                  isFetchingBalance ?
                    <Loading type="spinner" color="white" size="sm" />
                    : 'Get balance'
                }
              </Button>
              <Button css={{ mt: '$10' }} disabled={!isCorrectNetwork || isClaiming} clickable={!isClaiming} color="gradient" auto ghost={!isClaiming} onClick={claimTokens}>
                {
                  isClaiming ?
                    <Loading type="spinner" color="white" size="sm" />
                    : 'Claim tokens'
                }
              </Button>

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
        width='600px'
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
            Token Name: <Text b>{info.name}</Text>
          </Text>
          <Text>
            Token Contract Address: <Text b>0x537E8e733a9E26c9c79dC518FA09c7d43Aa5F0e5</Text>
          </Text>
          <Text>
            Token Symbol: <Text b>{info.symbol}</Text>
          </Text>
          <Text>
            Token Decimal: <Text b>0</Text>
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
