import { Router, Request, Response, response} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ mesagger: 'your server is running'});
});

export default router;