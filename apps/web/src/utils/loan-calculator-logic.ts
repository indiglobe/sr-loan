export function getInterestRate(months: number) {
  if (months <= 12) return 10.5;
  if (months <= 24) return 11;
  if (months <= 36) return 11.5;
  if (months <= 48) return 12;

  return 12.5;
}

export function calculateEMI(
  loanAmount: number,
  tenure: number,
  interestRate: number,
) {
  const monthlyInterestRate = interestRate / 12 / 100;

  const compoundFactor = Math.pow(
    1 + monthlyInterestRate,
    tenure,
  );

  return (
    (loanAmount *
      monthlyInterestRate *
      compoundFactor) /
    (compoundFactor - 1)
  );
}

export function calculateTotalPayment(
  emi: number,
  tenure: number,
) {
  return emi * tenure;
}

export function calculateTotalInterest(
  totalPayment: number,
  loanAmount: number,
) {
  return totalPayment - loanAmount;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}