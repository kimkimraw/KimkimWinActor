// 問題文および回答を持つ
// 問題カテゴリNo
// 問題文
// 選択肢1ー4　、　正解フラグ

let questions = [
	{
		"q_category1":
		[
			{
				"q_Titile":"WinActorに存在しない機能はどれ？",
				"q_Select1":["記録",0],
				"q_Select2":["転送",1],
				"q_Select3":["実行",0],
				"q_Select4":["編集",0],
				"q_Desctiption":"WinActorに存在する機能に「転送」はありません。"
			},
			{
				"q_Titile":"WinActoeが動作しない環境は次のうちどれ？",
				"q_Select1":["Win7",0],
				"q_Select2":["Win10",0],
				"q_Select3":["Mac",1],
				"q_Select4":["Win8.1",0],
				"q_Desctiption":"WinActorはmacOSでは動作しません。※今後のバージョンアップで変更する可能性あり"
			},
			{
				"q_Titile":"WinActorが動作しない環境は次のうちどれ？",
				"q_Select1":["メモリが2.0GB 以上",0],
				"q_Select2":["CPUが3.6 GHz 以上",1],
				"q_Select3":["画面表示が1024× 768であるもの",0],
				"q_Select4":["HDDが空き容量3.0GB 以上",0],
				"q_Desctiption":"WinActorは「CPU3.6Hz以上」ではなく「2.5 GHz以上」で動作します。"
			},
			{
				"q_Titile":"WinActorの説明として誤っているものを選びなさい。",
				"q_Select1":["Windows上で動作するアプリケーションを<br>人間に代わり操作するソフトウェア型ロボット",0],
				"q_Select2":["事前にフローチャートを作成することで<br>自動でシナリオを作成することができる",1],
				"q_Select3":["IEモードでの記録は、IEのバージョン制限がある",0],
				"q_Select4":["記録、編集、実行の機能がある",0],
				"q_Desctiption":"WinActorは前にフローチャートを作成することで、自動でシナリオを作成することはできません。"
			},
			{
				"q_Titile":"WinActor画面を最小化した時、表示を復元する方法として正しいものを選びなさい。",
				"q_Select1":["WinActor.exeを再起動",0],
				"q_Select2":["コンピュータ→マイドキュメントの中から探す",0],
				"q_Select3":["デスクトップの中から探す",0],
				"q_Select4":["タスクトレイのWinActorのアイコンをクリックする",4],
				"q_Desctiption":"WinActorを最小化した際、再表示するにはタスクトレイのWinActorアイコンをクリックします。"
			},

		],
	},
	{
		"q_category2":
		[
			{
				"q_Titile":"メイン画面「記録対象アプリケーション選択ボタン」の説明として正しいものを選びなさい。",
				"q_Select1":["選択するアプリケーションの記録モードを決定する",0],
				"q_Select2":["記録した操作を選択するアプリケーションに対して実行する",0],
				"q_Select3":["選択するアプリケーションの操作の記録を開始する",0],
				"q_Select4":["記録操作の対象とするアプリケーションを選択する",1],
				"q_Desctiption":"「記録対象アプリケーション選択ボタン」は記録操作の対象となるアプリケーションを選択するときに使用します。"
			},
			{
				"q_Titile":"WinActorの３つの自動記録モードについて正しいものを選びなさい。",
				"q_Select1":["「IEモード」、「エミュレーションモード」、「イベントモード」",1],
				"q_Select2":["「UI識別モード」、「座標識別モード」、「画像識別モード」",0],
				"q_Select3":["「IEモード」、「ファイル向けモード」、「画像識別モード」",0],
				"q_Select4":["「UI識別モード」、「エミュレーションモード」、「イベントモード」",0],
				"q_Desctiption":"自動記録モードは「IEモード」、「エミュレーションモード」、「イベントモード」の3つです。"
			},
			{
				"q_Titile":"WinActorの自動記録機能の説明として、誤っているものを選びなさい。",
				"q_Select1":["自動記録には、「IEモード」、「エミュレーションモード」、「画像識別モード」の３つの種類がある",1],
				"q_Select2":["自動記録は、実際の操作を記録する機能である",0],
				"q_Select3":["「IEモード」での自動記録では<br>操作を行った入力欄やボタンに通し番号を付けて管理する",0],
				"q_Select4":["「エミュレーションモード」では<br>マウスクリックやキーボード操作をそのまま記録する",0],
				"q_Desctiption":"自動記録モードは「IEモード」、「エミュレーションモード」、「イベントモード」の3つです。"
			},
			{
				"q_Titile":"イベントモードでの自動記録が可能なアプリケーションとして誤っているものを選びなさい。",
				"q_Select1":["「メモ帳」",0],
				"q_Select2":["「電卓」",0],
				"q_Select3":["「Office」",1],
				"q_Select4":["「名前をつけて保存」画面のボタン操作",0],
				"q_Desctiption":"イベントモードで「Office」製品の自動記録は出来ません。"
			},
			{
				"q_Titile":"エミュレーションモードの説明として正しいものを選びなさい。",
				"q_Select1":["Internet Explorer専用の記録モード",0],
				"q_Select2":["Internet Explorer以外の操作を記録する",0],
				"q_Select3":["キーボード操作とマウス操作を記録する",1],
				"q_Select4":["表示されたアイコンや入力欄を画像として記録する",0],
				"q_Desctiption":"エミュレーションモードではキーボード操作とマウス操作を記録できます。"
			},
			{
				"q_Titile":"メイン画面「記録対象アプリケーション選択ボタン」の説明として正しいものを選びなさい。",
				"q_Select1":["選択するアプリケーションの記録モードを決定する",0],
				"q_Select2":["記録した操作を選択するアプリケーションに対して実行する",0],
				"q_Select3":["選択するアプリケーションの操作の記録を開始する",0],
				"q_Select4":["記録操作の対象とするアプリケーションを選択する",1],
				"q_Desctiption":"記録対象アプリケーション選択ボタンは記録操作の対象とするアプリケーションを選択する時に使用します。"
			},
			{
				"q_Titile":"メイン画面でのファイル操作に存在しない機能を選びなさい。",
				"q_Select1":["新規作成",0],
				"q_Select2":["開く",0],
				"q_Select3":["閉じる",1],
				"q_Select4":["上書き保存",0],
				"q_Desctiption":"メイン画面のファイル操作に「閉じる」機能はありません。"
			},
			{
				"q_Titile":"WinActorの「変数」の説明として誤っているものを選びなさい。",
				"q_Select1":["変数に情報を記録することができる",0],
				"q_Select2":["変数は、変数名という名前をつけて管理する",0],
				"q_Select3":["変数に格納する情報の種類により、文字型、数値型を指定する",1],
				"q_Select4":["変数は、シナリオ実行時の初期値を設定することができる",0],
				"q_Desctiption":"変数は格納する情報の種類により、文字型、数値型などを指定することができます。"
			},
			{
				"q_Titile":"操作の自動記録の開始手順で誤っているものを選びなさい。",
				"q_Select1":["自動記録の対象アプリケーションを開く",0],
				"q_Select2":["メイン画面の実行ボタンを押下する",1],
				"q_Select3":["メイン画面の記録対象アプリケーション選択ボタンを押下する",0],
				"q_Select4":["メイン画面の記録開始ボタンを押下する",0],
				"q_Desctiption":"操作の自動記録の開始にはメイン画面の実行ボタンを押す必要はありません。"
			},
			{
				"q_Titile":"エミュレーションモードで記録した操作をノードとしてフローチャートに反映する際、最初に行う操作を選びなさい。",
				"q_Select1":["[操作のアクション化]をクリック",1],
				"q_Select2":["[記録停止]をクリック",0],
				"q_Select3":["[操作の削除]をクリック",0],
				"q_Select4":["記録操作ウィンドウ右上の?ボタンをクリック",0],
				"q_Desctiption":"エミュレーションモードで記録した操作をノードとして、フローチャートに反映するには操作のアクション化]をクリックします。"
			},
			{
				"q_Titile":"自動記録操作について正しいものを選びなさい。",
				"q_Select1":["エミュレーションモードで記録した<br>マウス操作については変更することができない（削除のみ可能）",0],
				"q_Select2":["IE以外のブラウザで動作するアプリケーションについては<br>イベントモードで記録することができる",0],
				"q_Select3":["一つのシナリオ内では<br>異なる記録モードを使うことはできない",0],
				"q_Select4":["エミュレーションモードではマウスクリックや<br>キーボード操作の間隔を待機時間として記録することができる",1],
				"q_Desctiption":"自動記録操作のエミュレーションモードではマウスクリックやキーボード操作の間隔を待機時間として記録することができる"
			},
			{
				"q_Titile":"IEモードでの自動記録について、正しいものを選びなさい。",
				"q_Select1":["IEで動作するアプリケーションであれば<br>どんな画面でも記録することができる",0],
				"q_Select2":["ボタンクリックは記録することができない",0],
				"q_Select3":["プルダウンリストでの選択操作も記録することができる",1],
				"q_Select4":["画面への直接入力操作は記録することができない",0],
				"q_Desctiption":"IEモードではプルダウンリストでの選択操作も記録することができます。"
			},
			{
				"q_Titile":"イベントモードで自動記録が可能なアプリケーションについて、正しいものを選びなさい。",
				"q_Select1":["Outlook",0],
				"q_Select2":["Excel",0],
				"q_Select3":["メモ帳",1],
				"q_Select4":["IEで動作するアプリケーション",0],
				"q_Desctiption":"イベントモードで自動記録が可能なアプリケーションは「メモ帳」などのWindowsアプリケーションです。"
			},
			{
				"q_Titile":"エミュレーションモードで自動記録して作成したエミュレーションのプロパティの編集機能について、誤っているものを選びなさい。",
				"q_Select1":["マウス操作を追加することができる",0],
				"q_Select2":["ファンクションキーの操作を追加することができる",0],
				"q_Select3":["待機時間を追加するができる",0],
				"q_Select4":["英字については、大文字、小文字を区別して登録することができる",1],
				"q_Desctiption":"エミュレーションモードの自動記録で作成したエミュレーションのプロパティの編集機能に英字の大文字・小文字を区別して登録する機能はありません。"
			},
			{
				"q_Titile":"変数名で取り込めるファイル形式を選択しなさい。",
				"q_Select1":["CSV・エクセル形式",1],
				"q_Select2":["エクセル形式",0],
				"q_Select3":["ファイル形式は問わない",0],
				"q_Select4":["テキスト・エクセル形式",0],
				"q_Desctiption":"変数名で取り込めるのは、「CSV・エクセル」形式です"
			},
		],
	},
	{
		"q_category3":
		[
			{
				"q_Titile":"ノード【待機ボックス】で変数値を表示したい場合、表示メッセージの 設定方法として正しいものを選びなさい。",
				"q_Select1":["値⇒変数名",0],
				"q_Select2":["\"変数名\"",0],
				"q_Select3":["%変数名%",1],
				"q_Select4":["#変数名#",0],
				"q_Desctiption":"変数値は「\"変数名\"」で表示されます。"
			},
			{
				"q_Titile":"WinActorのシナリオおよびシナリオを構成するノードの説明として誤っているものを選びなさい",
				"q_Select1":["シナリオは、一連の操作を操作順に配置し原則上から下へ一直線に進んでいく",0],
				"q_Select2":["シナリオは、フローチャート画面のシナリオ「開始」～「終了」<br>に配置することで実行する",0],
				"q_Select3":["自動記録で作成されるノードは、シナリオ「開始」～「終了」に配置しない",1],
				"q_Select4":["ノードはコンピュータ上で行う操作を<br>WinActorが理解できる単位でパーツ化したものをいう",0],
				"q_Desctiption":"自動記録で作成されるノードは、シナリオ「開始」～「終了」に配置しません。"
			},
			{
				"q_Titile":"WinActorのシナリオ実行インターフェース説明として正しいものを選びなさい。",
				"q_Select1":["「UI識別型」「画像識別型」「座標指定型」は、見本の操作を記録することができる",0],
				"q_Select2":["「ファイル向け」は、どんなファイルでも使用することができる",0],
				"q_Select3":["「UI識別型」には、IEモードとエミュレーションモードがある",0],
				"q_Select4":["「画像識別型」は、IE以外のブラウザで動作するアプリケーションでも使用できる",1],
				"q_Desctiption":"「画像識別型」は、IE以外のブラウザで動作するアプリケーションでも使用できます。"
			},
			{
				"q_Titile":"フローチャート画面の説明として正しいものを選びなさい。",
				"q_Select1":["シナリオの編集を行う画面",1],
				"q_Select2":["シナリオの実行経過を表示する画面",0],
				"q_Select3":["シナリオの記録・実行・保存・読込を行う画面",0],
				"q_Select4":["シナリオで使用する変数の設定を行う画面",0],
				"q_Desctiption":"フローチャート画面はシナリオの編集を行う画面のことです。"
			},
			{
				"q_Titile":"ノードの名称とその使用目的として誤っているものを選びなさい",
				"q_Select1":["「繰り返し」：一連操作の繰り返しを行うときに使用する。<br>条件を満たさないときに、繰り返しフロー制御内の処理が１回も実行されないようにする場合に使用する",0],
				"q_Select2":["「繰り返し終了」：繰り返し/後判定繰返の処理を実行中に、<br>以降のノードの実行を行わずに繰り返し/後判定繰返ノードの次のノードに進める際に使用する",0],
				"q_Select3":["「次の条件判定」：繰り返し/後判定繰返の処理を実行中に、<br>以降のノードの実行を行わずに繰り返し/後判定繰返ノードの条件判定に進める際に使用する",0],
				"q_Select4":["「分岐」：シナリオに３つ以上の枝分かれを作る際に使用する",1],
				"q_Desctiption":"ノードの「分岐」は分岐は二つの条件分岐を判定する際に使うモジュールです。（True,Falseを判定するIf文のイメージ）"
			},
			{
				"q_Titile":"試用版で使用したシナリオを正規版で引き続き使用する際に行うことはどれか選択しなさい",
				"q_Select1":["ライセンスの引継ぎを行う",0],
				"q_Select2":["シナリオの利用者を書き換える",0],
				"q_Select3":["シナリオの利用期限を空にする",1],
				"q_Select4":["何も行う必要はない",0],
				"q_Desctiption":"試用版で作成したシナリオを正規版でも使用したい時は<br>シナリオの利用期限を空にする必要があります"
			},
			{
				"q_Titile":"メイン画面の編集／記録機能を使用して操作の登録を行い、<br>シナリオに反映させるのに最初に行う動作を選択しなさい",
				"q_Select1":["記録停止",0],
				"q_Select2":["記録終了",0],
				"q_Select3":["操作のアクション化",1],
				"q_Select4":["終了",0],
				"q_Desctiption":"メイン画面の編集・記録機能で操作記録の登録後、<br>シナリオに反映させるにはまず操作のアクション化を行います"
			},
			{
				"q_Titile":"ノード「繰り返し」で繰り返しを行う条件を変数の数値10以上としたい場合の条件式 の正しい記述方法を選択しなさい",
				"q_Select1":["変数名＞10",0],
				"q_Select2":["変数名＞＝値→10",1],
				"q_Select3":["変数名 等しい 10以上",0],
				"q_Select4":["変数名 変数名 以上 値→10",0],
				"q_Desctiption":"ノード「繰り返し」で条件を「変数が数値10以上」とする場合の条件式は「変数名＞＝値→10」となります"
			},
		],
	},
];
