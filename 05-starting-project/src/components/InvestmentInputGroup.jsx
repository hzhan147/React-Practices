import InvestmentInput from "./InvestmentInput";

export default function InvestmentInputGroup({
  label1,
  label2,
  userInput,
  onChange,
}) {
  return (
    <div className="input-group">
      <InvestmentInput
        label={label1}
        value={userInput[label1]}
        onChange={onChange}
      />
      <InvestmentInput
        label={label2}
        value={userInput[label2]}
        onChange={onChange}
      />
    </div>
  );
}
