import router from '../../../lib/router';
import { getEmailFromSession } from '../../../lib/utils';
import { authMiddleware } from '../../../lib/middlewares';

router.use(authMiddleware).get(async (req, res) => {
  const email = getEmailFromSession(req.session);
  res.status(200).json({ email });
});

export default router.handler();
