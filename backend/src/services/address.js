class AddresService {
    constructor (AddressModel) {
      this.address = AddressModel
    }
  
    async getAll() {
      const address = await this.address.findAll(
        { include: [ 
          { association: 'lead' }
        ] }
      )
      return address
    }

    async add(addressDTO) {
      console.log(addressDTO)
      try {
        await this.address.create(addressDTO)
      } catch (erro) {
        console.error(erro.message)
        throw erro
      }
    }

    async delete(address_id) {
      const address = await this.address.findOne(
        { where: { id: address_id } },
        { include: [ 
          { association: 'internet_plan' },
          { association: 'addresses' } 
        ] }
      )

      if (!address) {
        return res.status(400).json({ error: 'address not found' });
      }

      await address.destroy();
    }

    async update(addressDTO) {
      const address = await this.address.findOne(
        { where: { id: addressDTO.id } },
        { include: [ 
          { association: 'internet_plan' },
          { association: 'addresses' } 
        ] }
      )

      if (!address) {
        return res.status(400).json({ error: 'address not found' });
      }

      await address.update(addressDTO);
    }
  }

  module.exports = AddresService
