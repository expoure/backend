class InternetPlanService {
    constructor (InternetPlanModel) {
      this.internetPlan = InternetPlanModel
    }
  
    async get() {
      const internetPlan = await this.internetPlan.findAll()
      return internetPlan
    }
  
    async adicionar(internetPlanDTO) {
      try {
        await this.internetPlan.create(internetPlanDTO)
      } catch (erro) {
        console.error(erro.message)
        throw erro
      }
    }
  }
  
  module.exports = InternetPlanService
