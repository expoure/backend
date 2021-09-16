class InternetPlanService {
    constructor (InternetPlanModel) {
        this.internetPlan = InternetPlanModel
    }
    
    async getAll() {
        const internetPlan = await this.internetPlan.findAll()
        return internetPlan
    }
    
    async add(internetPlanDTO) {
        try {
            await this.internetPlan.create(internetPlanDTO)
        } catch (erro) {
            console.error(erro.message)
            throw erro
        }
    }
}

module.exports = InternetPlanService
