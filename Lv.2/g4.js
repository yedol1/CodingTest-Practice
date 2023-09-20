function maxProfit(gold_prices) {
  let profit = 0;
  let current_gold = 0;
  let prev_price = gold_prices[0];
  let skip_days = 0;

  for (let i = 1; i < gold_prices.length; i++) {
    if (skip_days > 0) {
      skip_days--;
      continue;
    }

    if (gold_prices[i] < prev_price && current_gold === 0) {
      // Buy gold
      current_gold = 1;
    } else if (gold_prices[i] > prev_price && current_gold === 1) {
      // Sell gold
      profit += gold_prices[i] - prev_price;
      current_gold = 0;
      skip_days = 2; // Skip next two days
    }

    prev_price = gold_prices[i];
  }

  return profit;
}

// Example usage
console.log(maxProfit([2, 5, 1, 3, 4])); // Output: 4
console.log(maxProfit([7, 2, 5, 6, 1, 4, 2, 8])); // Output: 10
