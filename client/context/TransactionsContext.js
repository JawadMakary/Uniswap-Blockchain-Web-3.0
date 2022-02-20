import React, { useState, useEffect } from 'react'

export const TransactionContext = React.createContext()

let eth
if (typeof window !== 'undefined') {
  eth = window.etherum
}
export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState()
  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('please install metamask')
      const accounts = await metamask.request({
        method: 'eth_requestAccounts',
      })
      setCurrentAccount(accounts[0])
    } catch (err) {
      console.error(err)
      throw new Error('No ethereum object.')
    }
  }
  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        connectWallet,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
