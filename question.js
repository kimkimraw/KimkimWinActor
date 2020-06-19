// 問題文および回答を持つ
// 問題カテゴリNo
// 問題文
// 選択肢1ー4　、　正解フラグ

let questions = [
	{
		"q_category1":
		[{
			"q_Titile":"WinActorに存在しない機能はどれ？",
			"q_Select1":["記録",0],
			"q_Select2":["転送",1],
			"q_Select3":["実行",0],
			"q_Select4":["編集",0],
			"q_desctiption":"WinActorに存在する機能に「転送」はありません。"
		},
		{
			"q_Titile":"WinActoeが動作しない環境は次のうちどれ？",
			"q_Select1":["Win7",0],
			"q_Select2":["Win10",0],
			"q_Select3":["Mac",1],
			"q_Select4":["Win8.1",0],
			"q_Desctiption":"解説"
		},
		{
			"q_Titile":"WinActoeが動作しない環境は次のうちどれ？",
			"q_Select1":["メモリが2.0GB 以上",0],
			"q_Select2":["CPUが3.6 GHz 以上",1],
			"q_Select3":["画面表示が1024× 768であるもの",0],
			"q_Select4":["HDDが空き容量3.0GB 以上",0],
			"q_Desctiption":"解説"
		}],
	},
	{
		"q_category2":[{
			"q_Titile":"次の画面のうち○○なのはどれか1つ選べ",
			"q_Select1":["xxxx",0],
			"q_Select2":["xxxx",0],
			"q_Select3":["[yyyy",1],
			"q_Select4":["hogehoge",0],
			"q_Desctiption":"解説"
		}],
	},
];
