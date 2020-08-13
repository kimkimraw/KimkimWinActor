// 問題文および回答を持つ
// 問題カテゴリNo
// 問題文
// 選択肢1ー4　、　正解フラグ

let questions = [
	{
		"q_category":
		[
			{
				"q_Titile":"WinActorに存在しない機能はどれ？",
				"q_Select":[
					["記録",0],
					["転送",1],
					["実行",0],
					["編集",0],
				],
				"q_Desctiption":"WinActorの機能は「記録」「実行」「編集」の3つです。"
			},
			{
				"q_Titile":"WinActorが動作しない環境は次のうちどれ？",
				"q_Select":[
					["Windows7",0],
					["Windows10",0],
					["MacOS",1],
					["Windows8.1",0],
				],
				"q_Desctiption":"WinActorはmacOSでは動作しません。※今後のバージョンアップで変更する可能性あり"
			},
			{
				"q_Titile":"WinActorが動作しない環境は次のうちどれ？",
				"q_Select":[
					["メモリが2.0GB 以上",0],
					["CPUが3.6 GHz 以上",1],
					["画面表示が1024× 768であるもの",0],
					["HDDが空き容量3.0GB 以上",0],
				],
				"q_Desctiption":"WinActorはCPU「3.6Hz以上」ではなく「2.5 GHz以上」で動作します。"
			},
			{
				"q_Titile":"WinActorの説明として誤っているものを選びなさい。",
				"q_Select":[
					["Windows上で動作するアプリケーションを人間に代わり操作するソフトウェア型ロボット",0],
					["事前にフローチャートを作成することで自動でシナリオを作成することができる",1],
					["IEモードでの記録は、IEのバージョン制限がある",0],
					["記録、編集、実行の機能がある",0],
				],
				"q_Desctiption":"WinActorは事前にフローチャートを作成することで、自動でシナリオを作成することはできません。"
			},
			{
				"q_Titile":"WinActorの説明として誤っているものを選びなさい。",
				"q_Select":[
					["Windows上で動作するアプリケーションを人間に代わり操作するソフトウェア型ロボット",0],
					["事前にフローチャートを作成することで自動でシナリオを作成することができない",0],
					["IEモードでの記録は、IEのバージョン制限はない",1],
					["記録、編集、実行の機能がある",0],
				],
				"q_Desctiption":"WinActorはIEモードでの記録は、IEのバージョン制限があります。"
			},
			{
				"q_Titile":"WinActorの説明として誤っているものを選びなさい。",
				"q_Select":[
					["Windows上で動作するアプリケーションを人間に代わり操作するソフトウェア型ロボット",0],
					["事前にフローチャートを作成することで自動でシナリオを作成することができない",0],
					["IEモードでの記録は、IEのバージョン制限がある",0],
					["記録、転送、実行の機能がある",1],
				],
				"q_Desctiption":"WinActorの機能は「記録」「編集」「実行」の3つです。"
			},
			{
				"q_Titile":"WinActor画面を最小化した時、表示を復元する方法として正しいものを選びなさい。",
				"q_Select":[
					["WinActor.exeを再起動",0],
					["コンピュータ→マイドキュメントの中から探す",0],
					["デスクトップの中から探す",0],
					["タスクトレイのWinActorのアイコンをクリックする",1],
				],
				"q_Desctiption":"WinActorを最小化した際、再表示するにはタスクトレイのWinActorアイコンをクリックします。"
			},
			{
				"q_Titile":"WinActorを構成している言語で正しいものを選びなさい。	",
				"q_Select":[
					["「Java」「VBScript」",1],
					["「Java」",0],
					["「C#」「Java」 ",0],
					["「VBScript」",0],
				],
				"q_Desctiption":"WinActorは「Java」「VBScript」で構成されています。"
			},
			{
				"q_Titile":"実行版とフル機能版でOS環境が違う場合、気をつけるべきものとして正しいものを選びなさい。",
				"q_Select":[
					["IEのバージョンを合わせる必要がある",0],
					["ExcelなどのOffice製品のバージョンを合わせる必要がある",0],
					["「画像マッチング」など画像を使用するシナリオを作成する際は、OSごとの解像度を意識する必要がある",1],
					["画面幅による画像マッチングの動作不正をしないようにシナリオを作成する必要がある",0],
				],
				"q_Desctiption":"シナリオ作成PCとシナリオ実行PCのOSのバージョンが異なる場合、シナリオ内で、ノード「画像マッチング」やIEへの操作を行う処理があるときは、OSごとの解像度の違いやIEのバージョンによって、シナリオの微調整が必要になります。"
			},
			{
				"q_Titile":"WinActorのインターフェースで正しいものを選択しなさい。",
				"q_Select":[
					["「UI識別型」「イベントモード」「Chromeモード」「座標指定型」",0],
					["「UI識別型」「ファイル向け」「画像識別型」「エミュレーションモード」",0],
					["「画像識別型」「UI識別型」「ファイル向け」「座標指定型」",1],
					["「画像識別型」「UI識別型」「ファイル向け」「エミュレーションモード」",0],
				],
				"q_Desctiption":"WinActorのインターフェースは「UI識別型」「画像識別型」「座標指定型」「ファイル向け」の4つです。"
			},
		],
	},
	{
		"q_category":
		[
			{
				"q_Titile":"メイン画面「記録対象アプリケーション選択ボタン」の説明として正しいものを選びなさい。",
				"q_Select":[
					["選択するアプリケーションの記録モードを決定する",0],
					["記録した操作を選択するアプリケーションに対して実行する",0],
					["選択するアプリケーションの操作の記録を開始する",0],
					["記録操作の対象とするアプリケーションを選択する",1],
				],
				"q_Desctiption":"「記録対象アプリケーション選択ボタン」は記録操作の対象となるアプリケーションを選択するときに使用します。"
			},
			{
				"q_Titile":"WinActorの自動記録モードについて正しいものを選びなさい。",
				"q_Select":[
					["「IEモード」「エミュレーションモード」「イベントモード」「Chromeモード」",1],
					["「UI識別モード」「座標識別モード」「画像識別モード」「IEモード」",0],
					["「IEモード」「ファイル向けモード」「画像識別モード」「Chromeモード」",0],
					["「IEモード」「エミュレーションモード」「イベントモード」",0],
				],
				"q_Desctiption":"自動記録モードは「IEモード」「エミュレーションモード」「イベントモード」「Chromeモード」です。"
			},
			{
				"q_Titile":"WinActorの自動記録機能の説明として、誤っているものを選びなさい。",
				"q_Select":[
					["自動記録には「IEモード」「エミュレーションモード」「画像識別モード」「Chromeモードの4つの種類がある",1],
					["自動記録は、実際の操作を記録する機能である",0],
					["「IEモード」での自動記録では操作を行った入力欄やボタンに通し番号を付けて管理する",0],
					["「エミュレーションモード」ではマウスクリックやキーボード操作をそのまま記録する",0],
				],
				"q_Desctiption":"自動記録モードは「IEモード」「エミュレーションモード」「イベントモード」「Chromeモード」の4つです。"
			},
			{
				"q_Titile":"イベントモードでの自動記録が可能なアプリケーションとして誤っているものを選びなさい。",
				"q_Select":[
					["「メモ帳」",0],
					["「電卓」",0],
					["「Office」",1],
					["「名前をつけて保存」画面のボタン操作",0],
				],
				"q_Desctiption":"イベントモードで「Office」製品の自動記録は出来ません。イベントモードはWindowsで動作するアプリケーションでの操作を記録します。"
			},
			{
				"q_Titile":"エミュレーションモードの説明として正しいものを選びなさい。",
				"q_Select":[
					["Internet Explorer専用の記録モード",0],
					["Internet Explorer以外の操作を記録する",0],
					["キーボード操作とマウス操作を記録する",1],
					["表示されたアイコンや入力欄を画像として記録する",0],
				],
				"q_Desctiption":"エミュレーションモードではキーボード操作とマウス操作を記録できます。"
			},
			{
				"q_Titile":"メイン画面「記録対象アプリケーション選択ボタン」の説明として誤っているものを選びなさい。",
				"q_Select":[
					["選択するアプリケーションの記録モードを決定する",1],
					["ExcelなどのOffice製品を選択することができる",0],
					["IEの画面を選択することができる",0],
					["Windowsアプリケーションを選択することができる",0],
				],
				"q_Desctiption":"記録対象アプリケーション選択ボタンは記録操作の対象とするアプリケーションを選択する時に使用します。"
			},
			{
				"q_Titile":"メイン画面でのファイル操作に存在しない機能を選びなさい。",
				"q_Select":[
					["新規作成",0],
					["開く",0],
					["閉じる",1],
					["上書き保存",0],
				],
				"q_Desctiption":"メイン画面のファイル操作に「閉じる」機能はありません。"
			},
			{
				"q_Titile":"WinActorの「変数」の説明として誤っているものを選びなさい。",
				"q_Select":[
					["変数に情報を記録することができる",0],
					["変数は、変数名という名前をつけて管理する",0],
					["変数に格納する情報の種類により、文字型、数値型を指定する",1],
					["変数は、シナリオ実行時の初期値を設定することができる",0],
				],
				"q_Desctiption":"変数は格納する情報の種類により、文字型、数値型などを指定することができます。"
			},
			{
				"q_Titile":"操作の自動記録の開始手順で誤っているものを選びなさい。",
				"q_Select":[
					["自動記録の対象アプリケーションを開く",0],
					["メイン画面の実行ボタンを押下する",1],
					["メイン画面の記録対象アプリケーション選択ボタンを押下する",0],
					["メイン画面の記録開始ボタンを押下する",0],
				],
				"q_Desctiption":"操作の自動記録の開始にはメイン画面の実行ボタンを押す必要はありません。"
			},
			{
				"q_Titile":"エミュレーションモードで記録した操作をノードとしてフローチャートに反映する際、最初に行う操作を選びなさい。",
				"q_Select":[
					["[操作のアクション化]をクリック",1],
					["[記録停止]をクリック",0],
					["[操作の削除]をクリック",0],
					["記録操作ウィンドウ右上の?ボタンをクリック",0],
				],
				"q_Desctiption":"エミュレーションモードで記録した操作をノードとして、フローチャートに反映するには操作のアクション化]をクリックします。"
			},
			{
				"q_Titile":"自動記録操作について正しいものを選びなさい。",
				"q_Select":[
					["エミュレーションモードで記録したマウス操作については変更することができない（削除のみ可能）",0],
					["IE以外のブラウザで動作するアプリケーションについてはイベントモードで記録することができる",0],
					["一つのシナリオ内では異なる記録モードを使うことはできない",0],
					["エミュレーションモードではマウスクリックやキーボード操作の間隔を待機時間として記録することができる",1],
				],
				"q_Desctiption":"自動記録操作のエミュレーションモードではマウスクリックやキーボード操作の間隔を待機時間として記録することができる"
			},
			{
				"q_Titile":"IEモードでの自動記録について、正しいものを選びなさい。",
				"q_Select":[
					["IEで動作するアプリケーションであればどんな画面でも記録することができる",0],
					["ボタンクリックは記録することができない",0],
					["プルダウンリストでの選択操作も記録することができる",1],
					["画面への直接入力操作は記録することができない",0],
				],
				"q_Desctiption":"IEモードではプルダウンリストでの選択操作も記録することができます。"
			},
			{
				"q_Titile":"イベントモードで自動記録が可能なアプリケーションについて、正しいものを選びなさい。",
				"q_Select":[
					["Outlook",0],
					["Excel",0],
					["メモ帳",1],
					["IEで動作するアプリケーション",0],
				],
				"q_Desctiption":"イベントモードで自動記録が可能なアプリケーションは「メモ帳」などのWindowsアプリケーションです。"
			},
			{
				"q_Titile":"エミュレーションモードで自動記録して作成したエミュレーションのプロパティの編集機能について、誤っているものを選びなさい。",
				"q_Select":[
					["マウス操作を追加することができる",0],
					["ファンクションキーの操作を追加することができる",0],
					["待機時間を追加するができる",0],
					["英字については、大文字、小文字を区別して登録することができる",1],
				],
				"q_Desctiption":"エミュレーションモードの自動記録で作成したエミュレーションのプロパティの編集機能に英字の大文字・小文字を区別して登録する機能はありません。"
			},
			{
				"q_Titile":"変数名で取り込めるファイル形式を選択しなさい。",
				"q_Select":[
					["CSV・エクセル形式",1],
					["エクセル形式",0],
					["ファイル形式は問わない",0],
					["テキスト・エクセル形式",0],
				],
				"q_Desctiption":"変数名で取り込めるのは、「CSV・エクセル」形式です"
			},
			{
				"q_Titile":"Google Chromeのブラウザを記録するために使用するモードで正しいものを選びなさい",
				"q_Select":[
					["IEモード",0],
					["エミュレーションモード",0],
					["イベントモード",0],
					["Chromeモード",1],
				],
				"q_Desctiption":"Ver.6.0.0よりGoogle Chromeを記録するには「Chromeモード」を使用します。ただし拡張機能のインストールが必要になります。"
			},
			{
				"q_Titile":"フローチャート画面の説明として正しいものを選びなさい。",
				"q_Select":[
					["シナリオの編集を行う画面",1],
					["シナリオの実行経過を表示する画面",0],
					["シナリオの記録・実行・保存・読込を行う画面",0],
					["シナリオで使用する変数の設定を行う画面",0],
				],
				"q_Desctiption":"フローチャート画面はシナリオの編集を行う画面のことです。"
			},
			{
				"q_Titile":"メイン画面の編集／記録機能を使用して操作の登録を行い、シナリオに反映させるのに最初に行う動作を選択しなさい",
				"q_Select":[
					["記録停止",0],
					["記録終了",0],
					["操作のアクション化",1],
					["終了",0],
				],
				"q_Desctiption":"メイン画面の編集・記録機能で操作記録の登録後、シナリオに反映させるにはまず操作のアクション化を行います"
			},
			{
				"q_Titile":"イメージ管理画面の説明として正しいものを選びなさい。",
				"q_Select":[
					["画像マッチングで使用する画像を管理する",0],
					["シナリオのメンテナンス時にどのような操作を行ったのかを確認する",0],
					["シナリオファイルに保存されているイメージ画像を確認する",1],
					["自動記録した画像を確認する",0],
				],
				"q_Desctiption":"イメージ管理画面はシナリオのメンテナンス時に使用します。用途はシナリオに保存されているイメージ画像の中で使用していない画像や同じ画像がないかの確認を行います。"
			},
			{
				"q_Titile":"UI識別型の説明として正しいものを選びなさい。",
				"q_Select":[
					["IE画面で行った操作を記録できる",1],
					["Excelで行った操作を記録できる",0],
					["キーボード操作やマウス操作が記録できる",0],
					["Google Chromeで行った操作を記録できる",0],
				],
				"q_Desctiption":"UI識別型に含まれるのは「IEモード」「イベントモード」の2つで、すなわち、IE、Windows純正アプリケーションの操作のことを指します。"
			},
			{
				"q_Titile":"「データ一覧画面」のインポート可能なファイルの拡張子として誤っているものを選びなさい。",
				"q_Select":[
					["「xlsm」",1],
					["「xls」",0],
					["「xlsx」",0],
					["「csv」",0],
				],
				"q_Desctiption":"データ一覧へのインポートについてはxlsm形式には対応していません。対応しているファイル形式は「csv」「xlsx」「xls」になります。"
			},
			{
				"q_Titile":"WinActorの自動記録機能について誤っているものを選択しなさい。",
				"q_Select":[
					["「イベントモード」「エミュレーションモード」「IEモード」「座標指定型」",0],
					["「イベントモード」「エミュレーションモード」「UI識別型」「Chromeモード」",0],
					["「IEモード」「イベントモード」「エミュレーションモード」「画像マッチング」",0],
					["「IEモード」「エミュレーションモード」「イベントモード」「Chromeモード」",1],
				],
				"q_Desctiption":"WinActorの自動記録モードは「IEモード」「イベントモード」「エミュレーションモード」「Chromeモード」の4種類あります。"
			},
		],
	},
	{
		"q_category":
		[
			{
				"q_Titile":"WinActorにおけるノードの説明で誤っているものを選びなさい",
				"q_Select":[
					["分岐や繰り返しなどの動作が実施可能となる",0],
					["ドラッグ＆ドロップでシナリオに配置することができる",0],
					["シナリオを組み立てるひとつひとつの部品",0],
					["基本動作以上のことが実施可能になる",1],
				],
				"q_Desctiption":"ノードとはシナリオを組み立てるひとつひとつの部品のことであり、分岐や繰り返しなどの基本的な動作に限定されます。基本動作以上のことができるのはライブラリのことを指します。"
			},{
				"q_Titile":"ノード【待機ボックス】で変数値を表示したい場合、表示メッセージの 設定方法として正しいものを選びなさい。",
				"q_Select":[
					["値⇒変数名",0],
					["\"変数名\"",0],
					["%変数名%",1],
					["#変数名#",0],
				],
				"q_Desctiption":"変数値は「\"%変数名%\"」で表示されます。"
			},
			{
				"q_Titile":"WinActorのシナリオおよびシナリオを構成するノードの説明として誤っているものを選びなさい",
				"q_Select":[
					["シナリオは、一連の操作を操作順に配置し原則上から下へ一直線に進んでいく",0],
					["シナリオは、フローチャート画面のシナリオ「開始」～「終了」に配置することで実行する",0],
					["自動記録で作成されるノードは、シナリオ「開始」～「終了」に配置しない",1],
					["ノードはコンピュータ上で行う操作をWinActorが理解できる単位でパーツ化したものをいう",0],
				],
				"q_Desctiption":"自動記録で作成されるノードは、シナリオ「開始」～「終了」に配置しません。"
			},
			{
				"q_Titile":"WinActorのシナリオ実行インターフェース説明として正しいものを選びなさい。",
				"q_Select":[
					["「UI識別型」「画像識別型」「座標指定型」は、見本の操作を記録することができる",0],
					["「ファイル向け」は、どんなファイルでも使用することができる",0],
					["「UI識別型」には、IEモードとエミュレーションモードがある",0],
					["「画像識別型」は、IE以外のブラウザで動作するアプリケーションでも使用できる",1],
				],
				"q_Desctiption":"「画像識別型」は、IE以外のブラウザで動作するアプリケーションでも使用できます。"
			},
			{
				"q_Titile":"ノードの名称とその使用目的として誤っているものを選びなさい",
				"q_Select":[
					["「繰り返し」：一連操作の繰り返しを行うときに使用する。条件を満たさないときに、繰り返しフロー制御内の処理が１回も実行されないようにする場合に使用する",0],
					["「繰り返し終了」：繰り返し/後判定繰返の処理を実行中に、以降のノードの実行を行わずに繰り返し/後判定繰返ノードの次のノードに進める際に使用する",0],
					["「次の条件判定」：繰り返し/後判定繰返の処理を実行中に、以降のノードの実行を行わずに繰り返し/後判定繰返ノードの条件判定に進める際に使用する",0],
					["「分岐」：シナリオに３つ以上の枝分かれを作る際に使用する",1],
				],
				"q_Desctiption":"ノードの「分岐」は分岐は2つの条件分岐を判定する際に使うモジュールです。（True,Falseを判定するIf文のイメージ）"
			},
			{
				"q_Titile":"試用版で使用したシナリオを正規版で引き続き使用する際に行うことはどれか選択しなさい",
				"q_Select":[
					["ライセンスの引継ぎを行う",0],
					["シナリオの利用者を書き換える",0],
					["シナリオの利用期限を空にする",1],
					["何も行う必要はない",0],
				],
				"q_Desctiption":"試用版で作成したシナリオを正規版でも使用したい時はシナリオの利用期限を空にする必要があります"
			},
			{
				"q_Titile":" 数値の条件式で「値1と値2が等しい場合」に使用する条件式として正しいものを選択しなさい。",
				"q_Select":[
					["値1 > 値2　",0],
					["値1  等しい 値2　",0],
					["値1  = 値2　",1],
					["値1  がTRUE 値2　",0],
				],
				"q_Desctiption":"数値で「等しいかどうか」を条件式を記述する場合は「=、≠」を使用します。"
			},
			{
				"q_Titile":"文字列の条件式で「値1と値2が等しくない場合」に使用する条件式として正しいものを選択しなさい。	 ",
				"q_Select":[
					["値1 > 値2",0],
					["値1  等しくない 値2",1],
					["値1  = 値2",0],
					["値1  がTRUE 値2",0],
				],
				"q_Desctiption":"文字列で「等しいかどうか」を条件式を記述する場合は「等しい、等しくない」を使用します。"
			},
			{
				"q_Titile":"ノード「Excel操作(値取得2)」で「セルD6」を指定する際、指定する値を下記から選びなさい。	",
				"q_Select":[
					["セル(行)⇒6　セル(列)⇒D",1],
					["セル(行)⇒6　セル(列)⇒4",0],
					["セル(行)⇒6　セル(列)⇒D6",0],
					["セル(行)⇒D6 セル(列)⇒6",0],
				],
				"q_Desctiption":"ノード「Excel操作(値取得2)」で「セルD6」を指定する際は「行に行数」「列に列のアルファベット」を入力します。<br>備考<br>・A1形式：D6<br>・R1C1形式：R6C4"
			},
			{
				"q_Titile":"ノード「インプットボックス」の説明として正しいものを選びなさい。	",
				"q_Select":[
					["ポップアップボックスを表示させ、人の判断/選択/入力が終わるまで待機し、「OK」ボタンを押下すると、後続処理が実行される。",0],
					["ポップアップボックスを表示させ、入力を待機し、 入力完了後「OK」ボタンを押下すると、入力内容が変数に格納され、後続処理が実行される ",1],
					["ポップアップボックスを表示させ、人からのリスト選択を待機し、 選択完了後「OK」ボタンを押下すると、選択された内容が変数に格納され、後続処理が実行される ",0],
					["ポップアップボックスを表示させ、人からの入力を待つ待機時間を指定し、時間内に入力されなければエラー処理として後続処理が実行される",0],
				],
				"q_Desctiption":" インプットボックスはポップアップボックスを表示させ、入力を待機し、入力完了後「OK」ボタンを押下すると、入力内容が変数に格納され、後続処理が実行される。<br><br>※下記2つと類似しているため注意。<br>「待機ボックス」：ポップアップ時に人の判断、選択、入力を待機する。<br>「選択ボックス」：ポップアップ時に人からのリスト選択を待機する。"
			},
			{
				"q_Titile":"ライブラリ「23_ブラウザ関連」について正しいものを選びなさい",
				"q_Select":[
					["Chrome専用ライブラリ",0],
					["Edge、IEの専用ライブラリ",0],
					["IE専用ライブラリ",0],
					["Edge、Chromeの専用ライブラリ",1],
				],
				"q_Desctiption":" Edge、Chromeについては、ライブラリ「23_ブラウザ関連」に専用ライブラリが用意されている。"
			},
			{
				"q_Titile":"変数に格納できる値について正しいものを選びなさい。	",
				"q_Select":[
					["1024文字",1],
					["256文字",0],
					["制限はない",0],
					["64文字",0],
				],
				"q_Desctiption":" 変数に格納できるのは1024文字までです。"
			},
			{
				"q_Titile":"ノード「日時取得」で選択取得可能なフォーマットについて誤っているものを選びなさい。	",
				"q_Select":[
					["「日付と時間と曜日」",1],
					["「日付と時間」",0],
					["「日付のみ」",0],
					["「時間のみ」",0],
				],
				"q_Desctiption":" ノード「日時取得」で選択取得可能なフォーマットは「日付と時間」「日付のみ」「時間のみ」の3つです	"
			},
			{
				"q_Titile":"シナリオメンテナンス時に行える操作として誤っているものを選びなさい。",
				"q_Select":[
					["ブレイクポイントを指定してシナリオを1つずつ実行することができる",0],
					["シナリオ中の指定したノードのみ実行することができる",0],
					["実行中のシナリオを強制停止することができる",0],
					["シナリオを任意の場所から実行することができる",1],
				],
				"q_Desctiption":" シナリオを任意の場所から実行することが不可能です。ブレイクポイントを指定して途中で処理を止めたり、一部のノードのみを実行する操作は可能です。"
			},
		],
	},
];