import { UserRepository } from '../../../repository/user-repository';
import { StatusCodes } from 'http-status-codes';
import router from '../../../lib/router';

const repository = new UserRepository();

router.post(async (req, res) => {
  await repository.create(req.body);
  res.status(StatusCodes.CREATED).json({ success: true });
});

export default router.handler();
