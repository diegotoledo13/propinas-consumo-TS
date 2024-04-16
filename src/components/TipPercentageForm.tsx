type TipPercentageFromProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
  removeTip: () => void;
};
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export default function TipPercentageForm({
  setTip,
  tip,
  removeTip,
}: TipPercentageFromProps) {
  return (
    <>
      <div className=" flex justify-between">
        <h3 className=" font-black text-2xl">Propina</h3>
        <button
          className=" bg-red-600 h-8 w-8 rounded-full text-white disabled:opacity-10"
          onClick={removeTip}
          disabled={tip === 0}
        >
          X
        </button>
      </div>
      <form action="">
        {tipOptions.map((tipOptions) => (
          <div key={tipOptions.id} className=" flex gap-2">
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
            <input
              type="radio"
              name="tip"
              id={tipOptions.id}
              value={tipOptions.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOptions.value === tip}
            />
          </div>
        ))}
      </form>
    </>
  );
}
