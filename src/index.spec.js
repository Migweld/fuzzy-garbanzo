import { accountTypeChecker } from './index';

const fixedHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  }
];

const variableHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 85 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 568 },
    },
  }
]

const noHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    }
  }
]

describe('Account type tests', () => {
  it('should return "A" if the account has variable balance deductions per month or "B" if the deductions ar fixed', () => {
    expect(accountTypeChecker(variableHistory)).toEqual("A");
    expect(accountTypeChecker(fixedHistory)).toEqual("B");
  });

  it("should provide information if no comparison can be made about month on month deductions", () => {
    expect(accountTypeChecker(noHistory)).toEqual("No comparison can be made, this may be a new account")
  })
})
