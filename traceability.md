# トレーサビリティ表

## 目的

仕様、実装ファイル、テストケースを機能IDで紐づける。  
これにより、どの仕様がどのコードで実装され、どのテストで確認されるかを明確にする。

---

## トレーサビリティ一覧

| 機能ID | 仕様                         | 実装ファイル                                                                                 | テストケース            |
| ------ | ---------------------------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| F-01   | 筋トレ履歴表示               | `src/app/page.tsx`<br>`src/components/TrainingList.tsx`<br>`src/components/TrainingCard.tsx` | TC-01                   |
| F-02   | API連携                      | `src/app/api/training-records/route.ts`                                                      | TC-02                   |
| F-03   | loading / error / empty 表示 | `src/app/page.tsx`                                                                           | TC-03<br>TC-04<br>TC-05 |
| F-04   | コンポーネント分割           | `src/components/TrainingList.tsx`<br>`src/components/TrainingCard.tsx`                       | TC-06                   |
| F-05   | UI改善                       | `src/components/TrainingCard.tsx`                                                            | TC-07                   |

---

## 確認ポイント

- すべてのIn Scope機能に機能IDがある
- すべての機能IDに実装ファイルが対応している
- すべての機能IDにテストケースが対応している
- Out of Scopeの機能は実装対象に含めない
