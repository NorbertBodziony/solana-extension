import { call, SagaGenerator, select } from 'typed-redux-saga'

import { getConnection } from './connection'
import { TokenProgramMap } from '@web3/solana/wallet'
import { PublicKey } from '@solana/web3.js'
import { MintInfo, Token } from '@solana/spl-token'
import { network } from '@selectors/solanaConnection'
import { getWallet } from './wallet'

export function* mintToken(tokenAddress: string, recipient: string, amount: number): Generator {
  // const wallet = yield* call(getWallet)
  // const connection = yield* call(getConnection)
  // const currentNetwork = yield* select(network)
  // const token = new Token(
  //   connection,
  //   new PublicKey(tokenAddress),
  //   new PublicKey(TokenProgramMap[currentNetwork]),
  //   wallet
  // )
  // // This should return txid in future
  // yield* call([token, token.mintTo], new PublicKey(recipient), wallet, [], amount)
}

// export function* createToken(): Generator {
//   yield takeEvery(actions.addTransaction, init)
// }
