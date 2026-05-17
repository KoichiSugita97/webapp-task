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
  const partColor =
    record.trainingPart === "肩"
      ? "#2563eb"
      : record.trainingPart === "腕"
        ? "#7c3aed"
        : record.trainingPart === "胸"
          ? "#dc2626"
          : "#16a34a";

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "16px",
        marginBottom: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderLeft: `8px solid ${partColor}`,
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: partColor,
          marginBottom: "10px",
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
