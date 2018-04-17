import { NextFunction, Request, Response } from 'express';

export default function healthCheck(req: Request, res: Response, next: NextFunction) {

    return res.json({
        status: 'OK'
    });
}
