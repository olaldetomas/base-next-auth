import { NextApiRequest, NextApiResponse } from 'next';

declare module 'next' {
  export interface NextApiRequest extends IncomingMessage {
    session: any;
  }
}
