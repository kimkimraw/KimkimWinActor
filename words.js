// 単語を格納する

const words = [
	// とは系説明
	{
		"word" : "RPA",
		"discription" : "　ロボティックプロセスオートメーション(Robotic Process Automation)の略。"
		+ "<br>　PCで行われる事務的な作業を自動で行うことができる業務支援ソフトウェアのこと。<br>"
		+ "　メリットは作業時間が大幅に短縮したり、対象となる作業に人手が不要となること。<br>"
		+ "<br><br>例：<br>・データ入力作業<br>"
		+ "エクセルやCSVファイルなどのデータファイルからエクスポートして書類を作成する作業<br><br>"
		+ "・書類のチェック<br>あらかじめ作成したチェックシートと比較し、書類のチェックを行う"
		+ "<br><br><h3>長所</h3>"
		+ "・正確に作業を実施可能<br>"
		+ "・人間と比べて作業スピードが圧倒的に速い<br>"
		+ "・24時間365日、休みなしで動き続けることが可能"
		+ "<br><br><h3>短所</h3>"
  		+ "・アクシデントや例外処理に弱い、（停止してしまう）<br>"
		+ "・あらかじめ命令しておいたことしかしない（判断しない（するのはAIとなる）<br>"
		+ "・複雑な業務をさせる際はその作業を事細かく覚えさせなくてはならない",

	},
	{
		"word" : "WinActor",
		"discription" : "純国産のRPAソフトウェア。<br>"
		+ "　純国産の製品（日本製）のため、変更する際の手順などが全て日本語表記のためわかりやすい<br>"
		+ "※他のソフトウェアだと英語表記となっている可能性が高い。<br>"
		+ "　プログラミングの知識がなくても使用可能。",
	},
	// 動作環境
	{
		"word" : "WinActorの動作環境",
		"discription" : "<h3>ソフトウェア環境</h3><br>"
		+ "・OS Microsoft Windows 10 pro <br>"
		+ "・Microsoft Windows Server 2016<br>"
		+ "<br><br><h3>実行環境</h3><br>"
		+ "・Microsoft .NET Framework 4.8以上<br>"
		+ "<br><br><h3>ハードウェア環境</h3><br>"
		+ "<h4>・CPU：</h4>　Core i3-6100(2コア　3.7GHz）以上のx86、x64プロセッサー<br>"
		+ "<br><h4>・ハードディスク：</h4>　空き容量3.0GB以上<br>"
		+ "<br><h4>・メモリ：</h4>　2.0GB以上<br>"
		+ "<br><br><h4>・ディスプレイ：</h4>　FHD(1920×1080)が表示可能であるもの<br>"
		+ "<br><h4>・サウンド：</h4>　シナリオ中で音を出すための機能（スピーカ含む）※自動操作内容に含まない場合は不要<br>"
		+ "<br><br><h3>ブラウザ</h3><br>"
		+ "<h4>Webブラウザ：</h4>"
　 		+ "<br>・自動記録・操作：　Internet Explorer 11、Google Chrome<br>"
		+ "<br>・自動操作：　Microsoft Edge,Mozilla Firefox<br>"
		+ "<br><br><h3>アプリケーション</h3><br>"
		+ "<h4>・外部ファイル：</h4>　CSV形式、Excel形式<br>",
	},
	// 使用方法
	{
		"word" : "WinActorのざっくり使用方法",
		"discription" : "事前に操作対象のウィンドウを開いておく。<br>"
		+ "<br>1 自動実行させたいwindowを選択"
		+ "<br><br>2 記録開始ボタン押下"
		+ "<br><br>3 記録したい動作を実行"
		+ "<br>動作した作業が自動でシナリオとして記録されていく"
		+ "<br><br>4 記録停止ボタンを押下すると、記録されていた動作がメイン画面に表示される"
		+ "<br><br>5　4で作成されたシナリオをフローチャートの「開始」〜「終了」の間にドラッグ＆ドロップする"
		+ "<br><br>6 3の動作を自動で実行されるシナリオが作成完了"
		+ "<br><br>7 編集機能を使用し、シナリオの追加編集を行う",
	},
	// 目次的な？
	{
		"word" : "WinActorの基本単語",
		"discription" : "<p>シナリオ</p><p>フローチャート</p><p>変数</p><p></p>ノード<p>サブルーチン</p><p>ライブラリ</p><p></p>",
	},
	{
		"word" : "WinActorの画面",
		"discription" : "よく使用する画面は<br>「メイン画面」<br>「フローチャート画面」<br>「変数一覧画面」<br>「データ一覧画面」<br><br>全体では<br><p>①メイン画面</p><p>②変数一覧画面</p><p>③データ一覧画面</p><p>④ログ出力画面</p><p>⑤監視ルール画面</p><p>⑥イメージ画面</p><p>⑦フローチャート画面</p>",
	},
	{
		"word" : "WinActorの機能",
		"discription" : "大きく分けて3つ。<br><br><p>①記録</p><p>②実行</p><p>③編集</p>",
	},
	// 自動記録モード系


	// 単語説明
	{
		"word" : "シナリオファイル（シナリオ）",
		"discription" : "　基本的には「シナリオ」と呼ばれる。<br>　自動化したい一連の処理の流れをフローチャート形式で記述したファイルのこと。<br>　拡張子は「UMS5」",
	},
	{
		"word" : "フローチャート",
		"discription" : "フローチャート画面で使用する。<br>　処理の流れを図として表示し、目で見たときにわかりやすく表したもの。",
	},
	{
		"word" : "変数",
		"discription" : "値を格納することができる値のこと。<br>　WinActorでは取得した値や作業結果などがこの変数に格納される。<br>変数作成する際は他の人が見てもわかりやすい名前をつけることを勧める。<br>例：変数’商品名’があった場合<br>変数’商品名’に’りんご’を格納すると、変数’商品名’を参照した際、「りんご」が表示される。",
	},
	{
		"word" : "ノード",
		"discription" : "シナリオを編集する際に使用する部品のようなもので、基本動作を行うものを指す。(分岐、繰り返し、サブルーチン呼出など)<br>　アプリの操作を行うための「コマンド」にあたるもの。<br>　フローチャート画面に存在し、ドラッグ＆ドロップでシナリオ作成に使用する。",
	},
	{
		"word" : "ライブラリ",
		"discription" : "フローチャート画面で使用し、基本以上の動作を行うことが可能となる。(エクセルの今いるセルの位置から指定した位置にあるセルの値を取得する。など)<br>　動作は全てノードの「スクリプト実行」である。<br>　カスタムも可能だが「VBScript」の知識が必要となる。",
	},
	{
		"word" : "サブルーチン",
		"discription" : "「ルーティン」と同じ意味合いで「定期的にお決まりの一連の動作をすること」。<br>単体での実行は不可。<br><br>例：シナリオ「服を買いに行く」<br>"
		+ "<br>1 「トップス」を選ぶ"
		+ "<br>2  選んだ服を着る"
		+ "<br>3  鏡でチェックする"
		+ "<br>4  思っていたのと違った"
		+ "<br>5  服をぬぐ"
		+ "<br>6 「トップス」を選ぶ"
		+ "<br>7  選んだ服を着る"
		+ "<br>8  鏡でチェックする"
		+ "<br>9  思っていたのと違った"
		+ "<br>10 服をぬぐ"
		+ "<br>11 「トップス」を選ぶ"
		+ "<br>12 選んだ服を着る"
		+ "<br>13 鏡でチェックする"
		+ "<br>14 気に入った"
		+ "<br>15 買い物かごに入れる"
		+ "<br>16 商品を購入する"
		+ "<br><br>この動作中で同じ動作を「試着」とサブルーチン化すると <br>"
		+ "<br>1 「トップス」を選ぶ"
		+ "<br>2  試着する"
		+ "<br>3  思っていたのと違った"
		+ "<br>4  「トップス」を選ぶ"
		+ "<br>5  試着する"
		+ "<br>6 気に入った"
		+ "<br>7 買い物かごに入れる"
		+ "<br>8 商品を購入する"
		+ "<br><br>このように大幅にシナリオ構成数が減少する上、エラーが起きた際この「試着」サブルーチンさえ修正すればOKなので作業効率も上がる。",
	},	
	// 画面構成の説明
	{
		"word" : "メイン画面",
		"discription" : "基本的な操作を行う画面<br>シナリオファイルの保存、読み込み操作、実行、記録を指示する際に使用する。",
	},
	{
		"word" : "フローチャート画面",
		"discription" : "・シナリオを作成・編集する際に使用する。"
		+ "<br>・パレット部分に「ノード」や「ライブラリ」「サブルーチン」「検索」タブの4つが格納されている。"
		+ "<br>・シナリオ実行中は、現在実行している箇所が紺色となりフロー中のどこを実行中かすぐにわかるようになっている。",
	},
	{
		"word" : "変数一覧画面",
		"discription" : "・フローチャート画面に表示され、作成中のシナリオフローで使用する。"
		+ "<br>・作成中のシナリオフローに定義されている変数を一覧で表示する。"
		+ "<br>・変数の初期値を設定したり、実行中の変数の中身を確認することができる。"
		+ "<br>　また、対象の変数が使用されているノードIDを調べることが可能。",
	},
	{
		"word" : "データ一覧画面",
		"discription" : "・WinActorに処理される（された）データを一覧表示する画面。"
		+ "<br>　使用用途<br>"
		+ "<br>・データの取り込みの一覧表示確認"
		+ "<br>・処理結果の書き込みの確認"
		+ "<br>・外部のデータベースからデータを取得・計算した結果のODBC連携",
	},
	{
		"word" : "ログ出力画面",
		"discription" : "WinActorのシナリオ実行中の実行経過、エラー発生時の時刻、ノードID、処理結果が記録される画面"
			+ "<br>エラーが発生した際の原因がすぐに特定できるため、修正がしやすくなる。"
			+ "<br>ログ出力の例："
			+ "<br>2020-07-07 21:22:89 【実行開始】シナリオ「●●」の実行を開始しました。"
			+ "<br>2020-07-07 21:22:89 【グループ（開始）】「グループ」を実行。ノードID:34"
			+ "<br>2020-07-07 21:22:89 【アクション】「シナリオファイル名取得」を実行。ノードID:8"
			+ "<br.2020-07-07 21:22:89 【アクション】「計算」を実行。ノードID:29"
			+ "<br>2020-07-07 21:22:90 【アクション】「Excel操作（新規作成）」を実行。ノードID:"
			+ "90<br>2020-07-07 21:22:90 【エラー】「Excel操作（新規作成）」でエラーが発生しました。「スクリプトの実行」に失敗しました。"
			+ "<br>エラー番号:1004内容:ファイル’C:¥ユーザ名’にアクセスできません次のいずれかの理由が考えられます。<br><br>"
			+ "・ファイル名またはファイルが存在しません。"
			+ "<br>・ファイルが他のプログラムによって使用されています。"
			+ "<br>・保存しようとしているブックと同じ名前のブックが現在開かれています。"
			+ "一時停止します。ノードID:90"
			+ "<br>2020-07-07 21:22:91 一時停止を受け付けました。<br>",
	},
	{
		"word" : "監視ルール画面",
		"discription" : "シナリオ実行時エラーが出た際などのルール違反時のたいおうを決めておく画面"
		+ "<br>監視ルールを設定しておくことで、アプリケーションでのエラーポップアップ、パスワード画面などのウィンドウが表示された場合に下記の動作が可能となる"
		+ "<br>・実行中のシナリオの停止"
		+ "<br>・サブルーチンを呼び出す"
		+ "<br>・例外を出す"
		+ "<br><br>使用方法次第で応用が可能となる画面となる",
	},
	{
		"word" : "イメージ画面",
		"discription" : "自動記録した際の画面キャプチャを確認することができる画面。"
		+ "用途：シナリオのメンテナンス時にどのような操作をしたのか確認するために使用する。"
		+ "<br>注意点：「イメージ管理画面」とは意味合いが違う"
		+ "イメージ管理画面：<br>"
		+ "<br>イメージ画像が増加するにつれシナリオファイル自体の容量が増加してしまうため、<br>同じような画像、使用していない画像を整理するために使用する。",
	},


	// 機能説明
	// {
	// 	"word" : "実行について",
	// 	"discription" : "シナリオファイルを開き、メイン画面の実行ボタンで実行できる。<br>また、タスクスケジューラで設定して自動起動も可能（複数実行も可能）。",
	// },
	// {
	// 	"word" : "記録について",
	// 	"discription" : "",
	// },
	// {
	// 	"word" : "編集について",
	// 	"discription" : "",
	// },

];