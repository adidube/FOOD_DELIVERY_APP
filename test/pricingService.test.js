const pricingService = require('./../services/pricingService');

describe('Pricing Service', () => {
  describe('calculatePrice', () => {
    it('should calculate the total price correctly for base distance', async () => {
      const totalPrice = await pricingService.calculatePrice('central', '005', 5, 'perishable');
      expect(totalPrice).toBe(1000); // Assuming fix_price is in cents
    });

    it('should calculate the total price correctly for distance beyond base', async () => {
      const totalPrice = await pricingService.calculatePrice('central', '005', 10, 'perishable');
      expect(totalPrice).toBe(1750); // Assuming fix_price is in cents
    });

    it('should throw error if pricing data is not found', async () => {
      await expect(pricingService.calculatePrice('non-existing-zone', '005', 10, 'perishable')).rejects.toThrow('Pricing data not found');
    });
  });
});
