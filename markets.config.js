const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

module.exports = [
  {
    questionId: `0x${"0".repeat(63)}3`,
    title: `Will the share price of Tesla be above or below $300 at market close, ${tomorrow.toISOString()}.`,
    resolutionDate: tomorrow.toISOString(),
    outcomes: [
      {
        title: "Above",
        short: "A",
        when: "A"
      },
      {
        title: "Below",
        short: "B",
        when: "B"
      }
    ]
  },
  {
    questionId: `0x${"0".repeat(63)}4`,
    title: `Elon Musk will step down as CEO of Tesla on or before ${tomorrow.toISOString()}.`,
    resolutionDate: tomorrow.toISOString(),
    outcomes: [
      {
        title: "No",
        short: "N",
        when: "N"
      },
      {
        title: "Yes",
        short: "Y",
        when: "Y"
      }
    ]
  }
];
