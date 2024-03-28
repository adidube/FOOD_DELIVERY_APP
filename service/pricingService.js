// services/pricingService.js

const  Pricing = require('./../models/pricingModel');
const Organization= require('./../models/organizationModel');
const Item = require('./../models/item');

exports.calculatePrice =async(zone, organizationId, totalDistance, itemType)=> {
  const pricingData = await Pricing.findOne({
    where: { 
      zone,
      organization_id: organizationId,
    },
    include: [
      { model: Organization },
      { model: Item, where: { type: itemType } },
    ],
  });

  if (!pricingData) {
    throw new Error('Pricing data not found');
  }

  let totalPrice = pricingData.fix_price;
  if (totalDistance > pricingData.base_distance_in_km) {
    const extraDistance = totalDistance - pricingData.base_distance_in_km;
    totalPrice += extraDistance * pricingData.km_price;
  }

  return totalPrice;
}


