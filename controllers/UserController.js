const {User} = require('../models')

const UserContoller = {

    async index(req, res){
        try {
            const dataUser = await User.findAll()
            return res.send(dataUser)
        } catch (error) {
            return res.send(error.message)
        }
    },

    async addUser(req, res){
        try {
            const {name, username, password} = req.body
            const add = User.create({
                name:name,
                username:username,
                password:password
            })
            return res.send('has created!')
        } catch (error) {
            return res.send(error.message)
        }
    },

    async UpdateUser(req, res){
        try {
            const {name, username, password} = req.body
            const {id} = req.params

            const newUser = await User.update({
                name:name, 
                username:username,
                password:password
            }, {
                where : {id:id}
            })
            return res.send('has updated!')
        } catch (error) {
            return res.send(error.message)
        }
    },

    async destroy(req, res){
        try {
        const {id} = req.params
        await User.destroy(
        {
            where:{id:id}
        })
        } catch (error) {
            return res.send(error.message)
        }
    }
}

module.exports = UserContoller