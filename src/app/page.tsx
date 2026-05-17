"use client";

import { useEffect, useState } from "react";
import TrainingList from "../components/TrainingList";

type TrainingRecord = {
  id: number;
  trainingPart: string;
  exerciseName: string;
  weight: number;
  reps: number;
  sets: number;
};

export default function Home() {
  const [records, setRecords] = useState<TrainingRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await fetch("/api/training-records");

        if (!res.ok) {
          throw new Error("データの取得に失敗しました");
        }

        const data = await res.json();
        setRecords(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("不明なエラーが発生しました");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);

  if (loading) {
    return (
      <main style={{ padding: "30px" }}>
        <h1>読み込み中...</h1>
      </main>
    );
  }

  if (error) {
    return (
      <main style={{ padding: "30px" }}>
        <h1>エラー</h1>
        <p>{error}</p>
      </main>
    );
  }

  if (records.length === 0) {
    return (
      <main style={{ padding: "30px" }}>
        <h1>💪 筋トレ履歴</h1>
        <p>まだ記録がありません。</p>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        💪 筋トレ履歴
      </h1>

      <TrainingList records={records} />
    </main>
  );
}
