import JSBI from 'jsbi'
import { Token } from './entities/token'

export type BigintIsh = JSBI | number | string

export enum ChainId {
  BSC = 56,
  BSC_TESTNET = 157,
  SHIBARIUM = 109,
  DOGECHAIN = 2000,
  ETH = 1,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT,
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP,
}

export const FACTORY_ADDRESS_BSC = '0xc7c86B4f940Ff1C13c736b697e3FbA5a6Bc979F9'
export const FACTORY_ADDRESS_BSC_TESTNET = '0xEDedDbde5ffA62545eDF97054edC11013ED72125'
export const FACTORY_ADDRESS_SHIB = '0xEDedDbde5ffA62545eDF97054edC11013ED72125'
export const FACTORY_ADDRESS_DC = '0x7C10a3b7EcD42dd7D79C0b9d58dDB812f92B574A'
export const FACTORY_ADDRESS_ETH = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export const FACTORY_ADDRESS_MAP: Record<number, string> = {
  [ChainId.BSC]: FACTORY_ADDRESS_BSC,
  [ChainId.BSC_TESTNET]: FACTORY_ADDRESS_BSC_TESTNET,
  [ChainId.SHIBARIUM]: FACTORY_ADDRESS_SHIB,
  [ChainId.DOGECHAIN]: FACTORY_ADDRESS_DC,
  [ChainId.ETH]: FACTORY_ADDRESS_ETH,
}
export const INIT_CODE_HASH_BSC = '0x908a679b76436e6d853df6556fbcb55cbfe69fb45a6ac9fe0c1e0f2a53f7baf4'
export const INIT_CODE_HASH_BSC_TESTNET = '0x4455b31327401d7d38602d2b84b8e6a3843289a04fa0ff3ef5195bb4a43f0688'
export const INIT_CODE_HASH_SHIB = '0xa2ef75f706f4aa0c026dd9371dab1bac975a91bc8f0852a86e6f330eedd30848'
export const INIT_CODE_HASH_DC = '0xb336a8b47fdc2600ed0b1be659f72b59cb3096a8dd3814eda610401c00f5fd49'
export const INIT_CODE_HASH_ETH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'

export const INIT_CODE_HASH_MAP: Record<number, string> = {
  [ChainId.BSC]: INIT_CODE_HASH_BSC,
  [ChainId.BSC_TESTNET]: INIT_CODE_HASH_BSC_TESTNET,
  [ChainId.SHIBARIUM]: INIT_CODE_HASH_SHIB,
  [ChainId.DOGECHAIN]: INIT_CODE_HASH_DC,
  [ChainId.ETH]: INIT_CODE_HASH_ETH,
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _9975 = JSBI.BigInt(9975)
export const _10000 = JSBI.BigInt(10000)

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256',
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
}

export const WBONE = {
  [ChainId.SHIBARIUM]: new Token(
    ChainId.SHIBARIUM,
    '0xC76F4c819D820369Fb2d7C1531aB3Bb18e6fE8d8',
    18,
    'BONE',
    'Wrapped BONE',
    'https://shib.io/'
  ),
}

export const WETH9 = {
  [ChainId.DOGECHAIN]: new Token(
    ChainId.DOGECHAIN,
    '0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101',
    18,
    'DOGE',
    'Wrapped DOGE',
    'https://dogechain.dog/'
  ),
}

export const WETH = {
  [ChainId.ETH]: new Token(
    ChainId.ETH,
    '0x9813037ee2218799597d83D4a5B6F3b6778218d9',
    18,
    'ETH',
    'Ethereum',
    'https://etherscan.io/'
  ),
}

export const WBNB = {
  [ChainId.BSC]: new Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org'
  ),
  [ChainId.BSC_TESTNET]: new Token(
    ChainId.BSC_TESTNET,
    '0x41c3F37587EBcD46C0F85eF43E38BcfE1E70Ab56',
    18,
    'WBONE',
    'Puppynet Wrapped BONE',
    'https://www.binance.org'
  ),
}

export const WNATIVE: Record<number, Token> = {
  [ChainId.BSC]: WBNB[ChainId.BSC],
  [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET],
  [ChainId.SHIBARIUM]: WBONE[ChainId.SHIBARIUM],
  [ChainId.DOGECHAIN]: WETH9[ChainId.DOGECHAIN],
  [ChainId.ETH]: WETH[ChainId.ETH],
}

export const NATIVE: Record<
  number,
  {
    name: string
    symbol: string
    decimals: number
  }
> = {
  [ChainId.BSC]: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  [ChainId.BSC_TESTNET]: {
    name: 'Puppynet Test BONE',
    symbol: 'BONE',
    decimals: 18,
  },
  [ChainId.SHIBARIUM]: {
    name: 'Shibarium Native Token',
    symbol: 'BONE',
    decimals: 18,
  },
  [ChainId.DOGECHAIN]: {
    name: 'DogeChain Native Token',
    symbol: 'DOGE',
    decimals: 18,
  },
  [ChainId.ETH]: {
    name: 'Ethereum Native Token',
    symbol: 'ETH',
    decimals: 18,
  },
}
