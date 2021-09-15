class LeadService {
    constructor (LeadModel) {
      this.lead = LeadModel
    }
  
    async get() {
      const lead = await this.lead.findAll(
        { include: [ 
          { association: 'internet_plan' },
          { association: 'address' } 
        ] }
      )
      return lead
    }

    async adicionar(leadDTO) {
      try {
        await this.lead.create(leadDTO)
      } catch (erro) {
        console.error(erro.message)
        throw erro
      }
    }
  }
  
  module.exports = LeadService
