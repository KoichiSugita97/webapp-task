type TrainingRecord = {
  trainingPart: string;
  exerciseName: string;
  weight: number;
  reps: number;
  sets: number;
};

type Props = {
  record: TrainingRecord;
};

export default function TrainingCard({ record }: Props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "16px",
        marginBottom: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#2563eb",
        }}
      >
        {record.trainingPart}
      </h2>

      <p>🏋️ 種目：{record.exerciseName}</p>
      <p>⚖️ 重量：{record.weight}kg</p>
      <p>🔁 回数：{record.reps}回</p>
      <p>🔥 セット数：{record.sets}セット</p>
    </div>
  );
}
