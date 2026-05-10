import { NextResponse } from "next/server";

export async function GET() {
  const records = [
    {
      id: 1,
      trainingPart: "肩",
      exerciseName: "ダンベルショルダープレス",
      weight: 7,
      reps: 10,
      sets: 3,
    },
    {
      id: 2,
      trainingPart: "腕",
      exerciseName: "ダンベルカール",
      weight: 4.5,
      reps: 12,
      sets: 3,
    },
  ];

  return NextResponse.json(records);
}
