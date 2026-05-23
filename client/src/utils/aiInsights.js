export const generateInsight = (
  units,
  savings
) => {

  if (units <= 100) {

    return "Excellent power usage. Your consumption is highly optimized.";

  }

  if (units <= 200) {

    return "You are within subsidy-friendly consumption range.";

  }

  if (units <= 400) {

    return "Consider reducing AC usage during peak hours to save more electricity.";

  }

  if (units <= 500) {

    return "Crossing 500 units can sharply increase your bill. Try optimizing appliance usage.";

  }

  if (units <= 800) {

    return "High electricity usage detected. Switching to LED and inverter appliances may reduce your bill.";

  }

  return "Very high consumption detected. Solar installation may significantly reduce long-term electricity costs.";
};