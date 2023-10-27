import { Router } from "express"
import { listUsers, createUser, deleteUser, updateUser } from "../services/user"

const router = Router()

router.get('/', async (req, res) => {
    try {
        const userList = await listUsers()
        res.send(userList)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const user = await createUser(req.body)
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.delete('/:userId', async (req, res) => {
    try {
        await deleteUser(req.params.userId)
        res.send()
    } catch (err) {
        res.status(400).send(err)
    }
})

router.put('/:userId', async (req, res) => {
    try {
        await updateUser(req.params.userId, req.body)
        res.send()
    } catch (err) {
        res.status(400).send(err)
    }
})

export default router