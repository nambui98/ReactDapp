import { ethers } from 'ethers'
import { useEffect } from 'react'
import { useState } from 'react'
import Nambv from '../artifacts/contracts/Nambv.sol/Nambv.json'

const nambvAddress = '0x5868B71c225BE428Ae65e48c7d8Ef9e12AB76766'

export default function useToken() {
  const [balance, setBalance] = useState('')
  const [isFetchingBalance, setIsFetchingBalance] = useState(false)
  const [toAddress, setToAddress] = useState('')
  const [amount, setAmount] = useState(0)
  const [isSending, setIsSending] = useState(false)
  const [isClaiming, setIsClaiming] = useState(false)
  const [info, setInfo] = useState({})
  const [votes, setVotes] = useState({ ultraviolet: 0, neonblue: 0 })

  // get current user token balance
  async function getBalance() {
    if (!window.ethereum) return
    setIsFetchingBalance(true)
    const [account] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    console.log('Getting balance for account: ', account)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(nambvAddress, Nambv.abi, provider)
    const balance = await contract.balanceOf(account)
    setBalance(balance.toString())
    setIsFetchingBalance(false)
  }

  // send token to another user
  async function sendTokens() {
    if (!amount || !window.ethereum) return
    setIsSending(true)
    const wholeTokens = BigInt(amount * 10 ** 18)
    console.log(`Sending ${wholeTokens} tokens to account ${toAddress} ...`)
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nambvAddress, Nambv.abi, signer)
    const transaction = await contract.transfer(toAddress, wholeTokens)
    await transaction.wait()
    console.log(`${wholeTokens} tokens sent to ${toAddress}`)
    setIsSending(false)
  }

  async function claimTokens() {
    if (!window.ethereum) return
    setIsClaiming(true)
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      console.log(`Sending tokens to account ${signer} ...`)
      const contract = new ethers.Contract(nambvAddress, Nambv.abi, signer)
      const transaction = await contract.claimTokens()
      await transaction.wait()
      console.log('Tokens claimed')
    } catch (err) {
      console.error(err)
    }
    setIsClaiming(false)
  }
  async function getInfoToken() {
    if (!window.ethereum) return
    // setIsClaiming(true)
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      console.log(`Sending tokens to account ${signer} ...`)
      const contract = new ethers.Contract(nambvAddress, Nambv.abi, signer)
      const name = await contract.name()
      // return { name: name}
      setInfo({
        name: name
      })
    } catch (err) {
      console.error(err)
    }
    // setIsClaiming(false)
  }
  // get current votes
  async function getVotes() {
    if (!window.ethereum) return
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(nambvAddress, Nambv.abi, provider)
    const votes = await contract.getVotes()
    setVotes({ ultraviolet: Number(votes[0]), neonblue: Number(votes[1]) })
  }

  async function castVote(color) {
    if (!window.ethereum) return
    let colorCode = 1
    if (color === 'ultraviolet') colorCode = 0
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nambvAddress, Nambv.abi, signer)
    const vote = await contract.vote(colorCode)
    await vote.wait()
    console.log(vote)
  }
  async function claimTokens1000000() {
    if (!window.ethereum) return
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      console.log(Token.abi);
      console.log(`Sending tokens to account ${signer} ...`)
      const contract = new ethers.Contract(tokenAddress, Token.abi, signer)
      const transaction = await contract.claimTokens1000000()
      await transaction.wait()
      console.log('Tokens claimed')
    } catch (err) {
      console.error(err)
    }
  }
  return {
    getBalance,
    balance,
    isFetchingBalance,
    toAddress,
    setToAddress,
    amount,
    setAmount,
    isSending,
    sendTokens,
    claimTokens,
    isClaiming,
    getVotes,
    castVote,
    votes,
    getInfoToken,
    info
  }
}
