export default function InvestmentInput({ label, value, onChange }) {
  return (
    <p>
      <label htmlFor="number-input">{label}</label>
      <input
        id="number-input"
        type="number"
        required
        value={value}
        onChange={(e) => onChange(label, e.target.value)}
        min={0}
      />
    </p>
  );
}
