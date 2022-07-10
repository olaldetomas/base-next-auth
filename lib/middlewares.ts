import { StatusCodes } from 'http-status-codes';
import { getSession } from 'next-auth/react';

export const authMiddleware = async (req, res, next) => {
  const session = await getSession({ req });
  if (session) {
    req.session = session;
  } else {
    res.status(StatusCodes.UNAUTHORIZED).json({ success: false });
  }
  await next();
};
