function calculateTotalPurchase(purchaseAmounts) {
  let totalAmount = 0;
  purchaseAmounts.forEach(amount => {
    totalAmount += amount;
  });
  return totalAmount;
}

let topThreeBuyersPurchases = [10000, 20000, 30000];
console.log(calculateTotalPurchase(topThreeBuyersPurchases));