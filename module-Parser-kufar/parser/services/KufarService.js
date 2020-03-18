const Kufar = require("../db/models/Kufar");

class KufarService {
  
  create(body) {
    return Kufar.findOrCreate({
      where: {
        link: body.link
      },
      defaults: {
        phone: body.phone,
        price_byn: body.price_byn ,
        price_usd: body.price_usd ,
        commit: body.subject ,
        type: body.type ,
        name_seller: body.name ,
        address: body.address ,
        region:  body.region ,
        rooms: body.rooms ,
        house_type: body.house_type ,
        condition: body.condition ,
        year_built: body.year_built ,
        floor: body.floor ,
        size: body.size ,
        size_living_space: body.size_living_space ,
        size_kitchen: body.size_kitchen ,
        bathroom: body.bathroom ,
        balcony: body.balcony ,
        time_call: body.timeCall ,
        description: body.description ,
        parking: body.parking ,
        roof: body.roof ,
        existence: body.existence , 
        coordinates: body.coordinates ,
        date_created: body.dateCreated ,
        date_updated: body.dateUpdated ,
        site: body.site ,
      }
    });
  }
}

module.exports = new KufarService();