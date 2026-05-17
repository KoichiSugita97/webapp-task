import TrainingCard from "./TrainingCard";

type TrainingRecord = {
  id: number;
  trainingPart: string;
  exerciseName: string;
  weight: number;
  reps: number;
  sets: number;
};

type Props = {
  records: TrainingRecord[];
};

export default function TrainingList({ records }: Props) {
  return (
    <div>
      {records.map((record) => (
        <TrainingCard key={record.id} record={record} />
      ))}
    </div>
  );
}
