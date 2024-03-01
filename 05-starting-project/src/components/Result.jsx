import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ userInput }) {
  const result = calculateInvestmentResults({
    initialInvestment: userInput["INITIAL INVESTMENT"],
    annualInvestment: userInput["ANNUAL INVESTMENT"],
    expectedReturn: userInput["EXPECTED RETURN"],
    duration: userInput["DURATION"],
  });

  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {result.map(({ year, interest, valueEndOfYear, annualInvestment }) => {
          const totalInterest =
            valueEndOfYear - annualInvestment * year - initialInvestment;

          const investedCapital = valueEndOfYear - totalInterest;
          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
