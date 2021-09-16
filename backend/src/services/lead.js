class LeadService {
    constructor (LeadModel) {
      this.lead = LeadModel
    }
  
    async getAll() {
      const lead = await this.lead.findAll(
        { include: [ 
          { association: 'internet_plan' },
          { association: 'addresses' } 
        ] }
      )
      return lead
    }

    async add(leadDTO) {
      try {
        const lead = await this.lead.create(leadDTO)
        return lead
      } catch (erro) {
        console.error(erro.message)
        throw erro
      }
    }

    async delete(lead_id) {
      const lead = await this.lead.findOne(
        { where: { id: lead_id } },
        { include: [ 
          { association: 'internet_plan' },
          { association: 'addresses' } 
        ] }
      )

      if (!lead) {
        return res.status(400).json({ error: 'Lead not found' });
      }

      await lead.destroy();
    }

    async update(leadDTO) {
      const lead = await this.lead.findOne(
        { where: { id: leadDTO.id } },
        { include: [ 
          { association: 'internet_plan' },
          { association: 'addresses' } 
        ] }
      )

      if (!lead) {
        return res.status(400).json({ error: 'Lead not found' });
      }

      await lead.update(leadDTO);
    }
  }
  

  module.exports = LeadService
