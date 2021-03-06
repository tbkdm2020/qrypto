import { utils } from 'ethers'
import { API_TYPE, TARGET_NAME, INTERNAL_API_TYPE } from './constants'
import { Insight } from 'qtumjs-wallet'

export interface IExtensionMessageData<T> {
  target: TARGET_NAME
  message: T
}

export interface IExtensionAPIMessage<T> {
  type: API_TYPE
  payload: T
}

export interface ISendQtumRequestPayload {
  id: string
  address: string
  amount: number
}

export interface ISendQtumResponsePayload {
  id: string
  result?: Insight.ISendRawTxResult
  error?: string
}
