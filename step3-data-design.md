# Step3：ER図・データ設計 SPEC

目的：

- 家トレ初心者向け筋トレ提案アプリで、何をDBに保存するかを定義する
- ユーザー、所持ダンベル、トレーニング記録の関係を整理する

---

## ER図の概要

このアプリでは、1人のユーザーが複数のダンベル重量を登録できる。  
また、1人のユーザーが複数のトレーニング記録を持つ。

関係：

users 1 : N dumbbells  
users 1 : N training_records

---

## users テーブル

保存目的：

- アプリ利用者の基本情報を保存する

項目：

- id：INT / 主キー / 自動採番
- name：VARCHAR(100) / 必須
- created_at：TIMESTAMP / 作成日時

説明：

- 今回は1ユーザー利用を前提とする
- ログイン機能は実装しないため、emailやpasswordは今回は保存しない

---

## dumbbells テーブル

保存目的：

- ユーザーが持っているダンベル重量を保存する
- メニュー提案時に、登録済み重量から推奨重量を決めるために使う

項目：

- id：INT / 主キー / 自動採番
- user_id：INT / 外部キー / users.id
- weight：FLOAT / 必須
- created_at：TIMESTAMP / 作成日時

制約：

- weight は 0 より大きい数値にする
- 登録済み重量だけをメニュー提案に使用する

---

## training_records テーブル

保存目的：

- 実施したトレーニング内容を保存する
- 継続日数や履歴表示に使用する

項目：

- id：INT / 主キー / 自動採番
- user_id：INT / 外部キー / users.id
- training_part：VARCHAR(50) / 必須
- exercise_name：VARCHAR(100) / 必須
- weight：FLOAT / 必須
- reps：INT / 必須
- sets：INT / 必須
- completed：BOOLEAN / 初期値 true
- training_date：DATE / 必須
- created_at：TIMESTAMP / 作成日時

制約：

- weight, reps, sets は 0 より大きい値にする
- training_part は「肩・腕・胸・背中・脚」などから選ぶ
- training_date をもとに継続日数を計算する

---

## 保存しないデータ

以下はDBに保存せず、その場で計算・生成する。

- 今日のおすすめメニュー
- 推奨重量
- 応援メッセージ
- やる気度によるメニュー分岐
- 継続日数

理由：

- 登録済みダンベル重量やトレーニング履歴から毎回生成できるため
- DBに保存する情報を増やしすぎると設計が複雑になるため

---

## ER図（テキスト表現）

users

- id PK
- name
- created_at

　1
　｜
　｜ 1人のユーザーは複数のダンベル重量を持つ
　↓

dumbbells

- id PK
- user_id FK
- weight
- created_at

users

- id PK
- name
- created_at

　1
　｜
　｜ 1人のユーザーは複数のトレーニング記録を持つ
　↓

training_records

- id PK
- user_id FK
- training_part
- exercise_name
- weight
- reps
- sets
- completed
- training_date
- created_at
