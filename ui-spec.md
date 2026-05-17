# UI SPEC

## 対象画面

筋トレ履歴画面

---

## 表示する情報

- 筋トレ部位
- 種目名
- 重量
- 回数
- セット数

---

## 表示形式

- 各トレーニング記録をカード形式で表示する
- カードごとに余白をつけて見やすくする
- 背景色とカード色を分け、情報のまとまりを分かりやすくする

---

## 状態ごとの表示

### loading

表示：

- 読み込み中...

### error

表示：

- エラー
- データの取得に失敗しました

### empty

表示：

- まだ記録がありません。

### success

表示：

- 筋トレ履歴をカード一覧で表示する

---

## コンポーネント構成

### page.tsx

役割：

- APIからデータを取得する
- loading / error / empty の状態を管理する
- TrainingList にデータを渡す

### TrainingList.tsx

役割：

- 複数のトレーニング記録を一覧表示する
- records を受け取り、TrainingCard を繰り返し表示する

### TrainingCard.tsx

役割：

- 1件分のトレーニング記録をカードとして表示する

Props：

- trainingPart
- exerciseName
- weight
- reps
- sets
