
const pricingService=require("./../service/pricingService")

exports.priceCalculateController= async (req, res, next) => {
    try {
      const { zone, organization_id, total_distance, item_type } = req.body;
      const totalPrice = await pricingService.calculatePrice(zone, organization_id, total_distance, item_type);
      res.json({ total_price: totalPrice });
    } catch (error) {
      next(error);
    }
  };