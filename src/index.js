export const accountTypeChecker = (accountBalanceHistory) => {
  if (accountBalanceHistory.length < 2) {
    return "No comparison can be made, this may be a new account";
  }

  const resultSet = new Set();

  accountBalanceHistory.sort((a, b) => b.monthNumber - a.monthNumber).slice(1).map((month, index) => {
    const { account: { balance: { amount: currentAmount } } } = month;
    const { account: { balance: { amount: nextAmount } } } = accountBalanceHistory[index];
    let diff = currentAmount - nextAmount;

    resultSet.add(diff);
  });

  return resultSet.size === 1 ? "B" : "A";
}
