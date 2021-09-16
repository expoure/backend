class UserService {
    constructor (UserModel) {
        this.user = UserModel
    }
    
    async getAll() {
        const user = await this.user.findAll()
        return user
    }
    
    async add(userDTO) {
        try {
            await this.user.create(userDTO)
        } catch (erro) {
            console.error(erro.message)
            throw erro
        }
    }
}

module.exports = UserService
