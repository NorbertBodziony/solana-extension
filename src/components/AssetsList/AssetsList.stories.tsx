import React from 'react'
import { storiesOf } from '@storybook/react'
import AssetsList from './AssetsList'
import { withKnobs } from '@storybook/addon-knobs'
import { withBackground } from '../../../.storybook/decorators'
import BN from 'bn.js'
import Header from '@components/Header/Header'
import { SolanaNetworks } from '@static/index'
import { Account, PublicKey } from '@solana/web3.js'

storiesOf('Components/AssetsList', module)
  .addDecorator(withKnobs)
  .addDecorator(withBackground)
  .add('default', () => {
    const tokenA = {
      programId: new Account().publicKey,
      balance: new BN(123),
      address: new Account().publicKey,
      decimals: 8,
      ticker: 'ABC'
    }
    const tokens = Array.from({ length: 10 }, (_, i) => tokenA)
    console.log(tokens)

    return (
      <>
        <AssetsList onAddAccount={() => console.log('onAddAccount')} tokens={tokens} />
      </>
    )
  })