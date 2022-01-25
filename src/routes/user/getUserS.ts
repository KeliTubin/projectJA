import express from "express";
import { getConnection } from "typeorm";
import User from "../../entities/user";
const router = express.Router();

router.get('/', async (req, res)=> {
    try{
        const {skip, take} = req.query;

        const users = await User.find({
            take: Number.isSafeInteger(take) ? Number.parseInt(take as string) : 20,
            skip: Number.isSafeInteger(skip) ? Number.parseInt(skip as string) : 0
        });

        if (!users){
            return res.send({message: 'no users with given ID'});
        }

        return res.send(users);
    }   catch (error) {
        return res.send({
            error: 'VIGA getUserS.ts',
            message: error.message
        });
    }
});

export default router;