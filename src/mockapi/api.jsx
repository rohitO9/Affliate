export const verifyCoupon = (code) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mockCoupons = {
        ABC123: { user: { id: 1, name: "Alice" }, discount: 10 },
        XYZ999: { user: { id: 2, name: "Bob" }, discount: 15 },
      };

      if (mockCoupons[code]) {
        resolve(mockCoupons[code]);
      } else {
        reject("Invalid code");
      }
    }, 1000);
  });
};
