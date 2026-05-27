"use client";

import { useState } from "react";

type MotivationLevel = "light" | "normal" | "hard";

type TrainingRecord = {
  id: number;
  trainingPart: string;
  exerciseName: string;
  weight: number;
  reps: number;
  sets: number;
};

type CommunityRecord = {
  id: number;
  user: string;
  message: string;
  detail: string;
};

const recommendations: Record<MotivationLevel, Omit<TrainingRecord, "id">> = {
  light: {
    trainingPart: "肩",
    exerciseName: "サイドレイズ",
    weight: 2,
    reps: 12,
    sets: 2,
  },
  normal: {
    trainingPart: "腕",
    exerciseName: "ダンベルカール",
    weight: 4.5,
    reps: 10,
    sets: 3,
  },
  hard: {
    trainingPart: "胸",
    exerciseName: "ダンベルフロアプレス",
    weight: 7,
    reps: 10,
    sets: 3,
  },
};

const motivationLabels: Record<MotivationLevel, string> = {
  light: "軽め",
  normal: "普通",
  hard: "頑張る",
};

const initialCommunityRecords: CommunityRecord[] = [
  {
    id: 1,
    user: "匿名ユーザーA",
    message: "胸トレ完了",
    detail: "ダンベルフロアプレス 7kg × 10回 × 3セット",
  },
  {
    id: 2,
    user: "匿名ユーザーB",
    message: "軽めだけど継続",
    detail: "ダンベルカール 4.5kg × 10回 × 2セット",
  },
  {
    id: 3,
    user: "匿名ユーザーC",
    message: "肩の日クリア",
    detail: "サイドレイズ 2kg × 12回 × 2セット",
  },
];

function getExerciseImage(trainingPart: string) {
  if (trainingPart === "肩") return "/shoulder.png";
  if (trainingPart === "腕") return "/arm.png";
  if (trainingPart === "胸") return "/chest.png";
  return "/shoulder.png";
}

function formatWeight(weight: number) {
  return weight === 0 ? "自重" : `${weight}kg`;
}

export default function Home() {
  const [motivation, setMotivation] = useState<MotivationLevel | null>(null);
  const [communityRecords, setCommunityRecords] = useState<CommunityRecord[]>(
    initialCommunityRecords,
  );

  const selectedRecommendation = motivation
    ? recommendations[motivation]
    : null;

  const handleComplete = () => {
    if (!selectedRecommendation) return;

    const newCommunityRecord: CommunityRecord = {
      id: Date.now(),
      user: "あなた（今日）",
      message: `${selectedRecommendation.trainingPart}トレ完了`,
      detail: `${selectedRecommendation.exerciseName} ${formatWeight(
        selectedRecommendation.weight,
      )} × ${selectedRecommendation.reps}回 × ${
        selectedRecommendation.sets
      }セット`,
    };

    setCommunityRecords([newCommunityRecord, ...communityRecords]);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          'linear-gradient(rgba(248,250,252,0.78), rgba(248,250,252,0.9)), url("/home-gym-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "32px",
        color: "#111827",
      }}
    >
      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              color: "#2563eb",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Home Training Support
          </p>

          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            今日の家トレ
          </h1>

          <p
            style={{
              color: "#4b5563",
              marginTop: "10px",
              fontSize: "16px",
            }}
          >
            やる気度を選ぶだけで、今日やる筋トレをすぐ決められます。
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            alignItems: "start",
          }}
        >
          <section
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              padding: "24px",
              borderRadius: "24px",
              boxShadow: "0 12px 30px rgba(15,23,42,0.10)",
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginTop: 0,
                marginBottom: "8px",
              }}
            >
              今日のやる気は？
            </h2>

            <p
              style={{
                color: "#6b7280",
                marginBottom: "18px",
              }}
            >
              今の気分に近いものを選んでください。
            </p>

            <div
              style={{
                display: "grid",
                gap: "12px",
              }}
            >
              {(["light", "normal", "hard"] as MotivationLevel[]).map(
                (level) => (
                  <button
                    key={level}
                    onClick={() => setMotivation(level)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "16px",
                      borderRadius: "16px",
                      border:
                        motivation === level
                          ? "2px solid #2563eb"
                          : "1px solid #e5e7eb",
                      backgroundColor:
                        motivation === level ? "#dbeafe" : "#ffffff",
                      cursor: "pointer",
                      fontSize: "18px",
                      fontWeight: "bold",
                      textAlign: "left",
                      boxShadow:
                        motivation === level
                          ? "0 8px 18px rgba(37,99,235,0.18)"
                          : "none",
                    }}
                  >
                    {motivationLabels[level]}
                  </button>
                ),
              )}
            </div>
          </section>

          <section
            style={{
              backgroundColor: "rgba(255,255,255,0.92)",
              padding: "24px",
              borderRadius: "24px",
              boxShadow: "0 12px 30px rgba(15,23,42,0.10)",
              borderLeft: "8px solid #f97316",
              minHeight: "260px",
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginTop: 0,
                color: "#f97316",
              }}
            >
              今日のおすすめ
            </h2>

            {!selectedRecommendation ? (
              <p
                style={{
                  color: "#6b7280",
                  lineHeight: 1.7,
                }}
              >
                左のボタンからやる気度を選ぶと、ここにおすすめ筋トレが表示されます。
              </p>
            ) : (
              <>
                <div
                  style={{
                    backgroundColor: "#fff7ed",
                    padding: "18px",
                    borderRadius: "18px",
                    marginBottom: "18px",
                  }}
                >
                  <img
                    src={getExerciseImage(selectedRecommendation.trainingPart)}
                    alt={selectedRecommendation.exerciseName}
                    style={{
                      width: "100%",
                      maxHeight: "150px",
                      objectFit: "contain",
                      marginBottom: "12px",
                    }}
                  />

                  <p>部位：{selectedRecommendation.trainingPart}</p>
                  <p>種目：{selectedRecommendation.exerciseName}</p>
                  <p>重量：{formatWeight(selectedRecommendation.weight)}</p>
                  <p>回数：{selectedRecommendation.reps}回</p>
                  <p>セット数：{selectedRecommendation.sets}セット</p>
                </div>

                <button
                  onClick={handleComplete}
                  style={{
                    width: "100%",
                    padding: "14px 20px",
                    borderRadius: "14px",
                    border: "none",
                    backgroundColor: "#f97316",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px",
                    cursor: "pointer",
                    boxShadow: "0 8px 18px rgba(249,115,22,0.30)",
                  }}
                >
                  実施した
                </button>
              </>
            )}
          </section>

          <section
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              padding: "24px",
              borderRadius: "24px",
              boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                marginBottom: "18px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    margin: 0,
                  }}
                >
                  みんなの実施履歴
                </h2>

                <p
                  style={{
                    color: "#6b7280",
                    marginTop: "6px",
                    marginBottom: 0,
                    fontSize: "14px",
                  }}
                >
                  他の人の頑張りを見て、今日の一歩につなげます。
                </p>
              </div>

              <span
                style={{
                  backgroundColor: "#fff7ed",
                  color: "#f97316",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                }}
              >
                匿名表示
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gap: "12px",
                maxHeight: "390px",
                overflowY: "auto",
                paddingRight: "4px",
              }}
            >
              {communityRecords.map((record) => (
                <div
                  key={record.id}
                  style={{
                    backgroundColor:
                      record.user === "あなた（今日）" ? "#f0fdf4" : "white",
                    border:
                      record.user === "あなた（今日）"
                        ? "1px solid #86efac"
                        : "1px solid #e5e7eb",
                    borderRadius: "18px",
                    padding: "16px",
                    boxShadow: "0 8px 18px rgba(15,23,42,0.06)",
                  }}
                >
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "13px",
                      marginTop: 0,
                      marginBottom: "8px",
                    }}
                  >
                    {record.user}
                  </p>

                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: "bold",
                      margin: "0 0 8px",
                    }}
                  >
                    {record.message}
                  </h3>

                  <p
                    style={{
                      color: "#374151",
                      lineHeight: 1.6,
                      margin: 0,
                      fontSize: "14px",
                    }}
                  >
                    {record.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <button
          style={{
            display: "block",
            margin: "24px auto 0",
            padding: "13px 28px",
            borderRadius: "14px",
            border: "1px solid #d1d5db",
            backgroundColor: "rgba(255,255,255,0.9)",
            color: "#111827",
            fontWeight: "bold",
            fontSize: "15px",
            cursor: "pointer",
            boxShadow: "0 8px 18px rgba(15,23,42,0.08)",
          }}
        >
          自分の履歴を見る
        </button>
      </section>
    </main>
  );
}
