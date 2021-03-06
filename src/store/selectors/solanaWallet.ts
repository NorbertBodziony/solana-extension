/* eslint-disable @typescript-eslint/consistent-type-assertions */
import BN from 'bn.js'
import { createSelector } from '@reduxjs/toolkit'
import { PublicKey } from '@solana/web3.js'
import { DEFAULT_PUBLICKEY } from '@static/index'
import SOL_ICON from '@static/icons/sol.png'
import * as R from 'remeda'
import { ISolanaWallet, ITokenAccount, solanaWalletSliceName } from '../reducers/solanaWallet'
import { keySelectors, AnyProps } from './helpers'
import { IAssetAccount } from '@components/AssetsList/AssetsList'
import { networkTokens } from './tokenInfo'

const store = (s: AnyProps) => s[solanaWalletSliceName] as ISolanaWallet

export const { address, balance, accounts, status, transactions, wallets } = keySelectors(store, [
  'address',
  'balance',
  'accounts',
  'status',
  'transactions',
  'wallets'
])

export const tokensAggregated = createSelector(accounts, tokensAccounts => {
  return R.mapValues(tokensAccounts, tokenAccounts => {
    return {
      balance: tokenAccounts.reduce((acc, account) => acc.add(account.balance), new BN(0)),
      accounts: tokenAccounts
    }
  })
})

export const tokenBalance = (tokenAddress: PublicKey) =>
  createSelector(accounts, balance, (tokensAccounts, solBalance) => {
    if (tokenAddress.equals(DEFAULT_PUBLICKEY)) {
      return { balance: solBalance, decimals: 9 }
    } else {
      if (!tokensAccounts[tokenAddress.toString()]) {
        return { balance: new BN(0), decimals: 9 }
      }
      return {
        balance: tokensAccounts[tokenAddress.toString()][0].balance,
        decimals: tokensAccounts[tokenAddress.toString()][0].decimals
      }
    }
  })

export const accountsArray = createSelector(accounts, tokensAccounts => {
  return Object.values(tokensAccounts).reduce((acc, accounts) => {
    return acc.concat(accounts)
  }, [])
})
export const accountsWithSol = createSelector(
  accounts,
  balance,
  address,
  networkTokens,
  (tokensAccounts, solBalance, solAddress, tokensData): IAssetAccount[] => {
    let accs: IAssetAccount[] = []
    if (!solAddress) {
      return accs
    }
    accs.push({
      address: new PublicKey(solAddress),
      balance: solBalance,
      decimals: 9,
      programId: DEFAULT_PUBLICKEY,
      iconURI: SOL_ICON,
      symbol: 'SOL'
    })
    for (const accounts of Object.values(tokensAccounts)) {
      const token = tokensData.find(t => t.address === accounts[0].programId.toString())
      const userAccounts = accounts.map(a => {
        return { ...a, symbol: token?.symbol, iconURI: token?.logoURI } as IAssetAccount
      })
      accs = accs.concat(userAccounts)
    }

    return accs
  }
)

export const tokenAccount = (tokenAddress: PublicKey) =>
  createSelector(accountsWithSol, balance, address, (allAccounts, solBalance, solAddress) => {
    const tokenAccount = allAccounts.find(t => t.programId.equals(tokenAddress))
    if (!tokenAccount) {
      return {
        programId: DEFAULT_PUBLICKEY,
        address: new PublicKey(solAddress),
        balance: solBalance,
        decimals: 9,
        iconURI: SOL_ICON,
        symbol: 'SOL'
      } as IAssetAccount
    }
    return tokenAccount
  })

export const solanaWalletSelectors = {
  address,
  balance,
  accounts,
  status,
  tokensAggregated,
  transactions,
  accountsWithSol,
  wallets
}
export default solanaWalletSelectors
