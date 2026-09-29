const japaneseData = {
  lessons: [
    {
      id: 1,
      title: "Bài 1: Giới thiệu bản thân & Quốc tịch",
      vocab: [
        { hiragana: "わたし", kanji: "私", romaji: "watashi", meaning: "tôi" },
        { hiragana: "あなた", kanji: "", romaji: "anata", meaning: "anh/chị, ông/bà (ngôi II)" },
        { hiragana: "あのひと", kanji: "あの人", romaji: "ano hito", meaning: "người kia" },
        { hiragana: "あのかた", kanji: "あの方", romaji: "ano kata", meaning: "vị kia (lịch sự)" },
        { hiragana: "みなさん", kanji: "皆さん", romaji: "minasan", meaning: "các bạn, mọi người" },
        { hiragana: "せんせい", kanji: "先生", romaji: "sensei", meaning: "thầy/cô (không dùng xưng cho mình)" },
        { hiragana: "きょうし", kanji: "教師", romaji: "kyoushi", meaning: "giáo viên (nghề nghiệp)" },
        { hiragana: "がくせい", kanji: "学生", romaji: "gakusei", meaning: "học sinh, sinh viên" },
        { hiragana: "かいしゃいん", kanji: "会社員", romaji: "kaishain", meaning: "nhân viên công ty" },
        { hiragana: "ぎんこういん", kanji: "銀行員", romaji: "ginkouin", meaning: "nhân viên ngân hàng" },
        { hiragana: "いしゃ", kanji: "医者", romaji: "isha", meaning: "bác sĩ" },
        { hiragana: "けんきゅうしゃ", kanji: "研究者", romaji: "kenkyuusha", meaning: "nhà nghiên cứu" },
        { hiragana: "だいがく", kanji: "大学", romaji: "daigaku", meaning: "đại học" },
        { hiragana: "びょういん", kanji: "病院", romaji: "byouin", meaning: "bệnh viện" },
        { hiragana: "だれ (どなた)", kanji: "", romaji: "dare (donata)", meaning: "ai (vị nào - lịch sự)" },
        { hiragana: "―さい", kanji: "―歳", romaji: "-sai", meaning: "tuổi" },
        { hiragana: "なんさい (おいくつ)", kanji: "何歳", romaji: "nansai (oikutsu)", meaning: "mấy tuổi (lịch sự)" }
      ],
      kanji: [
        { char: "私", onyomi: "シ (shi)", kunyomi: "わたし (watashi)", meaning: "Tư (Tôi)" },
        { char: "人", onyomi: "ジン (jin), ニン (nin)", kunyomi: "ひと (hito)", meaning: "Nhân (Người)" },
        { char: "学", onyomi: "ガク (gaku)", kunyomi: "まな・ぶ (mana-bu)", meaning: "Học" },
        { char: "生", onyomi: "セイ (sei), ショウ (shou)", kunyomi: "い・きる (i-kiru), なま (nama)", meaning: "Sinh" },
        { char: "先", onyomi: "セン (sen)", kunyomi: "さき (saki)", meaning: "Tiên (Trước)" }
      ],
      grammar: [
        {
          title: "1. Danh từ 1 は Danh từ 2 です",
          explanation: "Trợ từ は (đọc là wa) chỉ chủ đề của câu. Trợ từ です biểu thị sự khẳng định và thái độ lịch sự.",
          example: "わたしは ミラーです。(Tôi là Miller.)"
        },
        {
          title: "2. Danh từ 1 は Danh từ 2 じゃ (では) ありません",
          explanation: "じゃ/では ありません là thể phủ định của です. Trong giao tiếp hàng ngày dùng じゃ ありません.",
          example: "サントスさんは 学生じゃ ありません。(Anh Santos không phải là sinh viên.)"
        },
        {
          title: "3. Câu hỏi với Trợ từ か",
          explanation: "Đặt か ở cuối câu để tạo thành câu hỏi. Đặt từ nghi vấn vào vị trí nội dung cần hỏi.",
          example: "ミラーさんは 会社員ですか。(Anh Miller có phải là nhân viên công ty không?)"
        },
        {
          title: "4. Danh từ も",
          explanation: "Trợ từ も dùng khi thông tin về chủ thể tương tự như câu trước ('cũng').",
          example: "サントスさんも 会社員です。(Anh Santos cũng là nhân viên công ty.)"
        },
        {
          title: "5. Danh từ 1 の Danh từ 2",
          explanation: "Trợ từ の nối 2 danh từ. Danh từ 1 bổ nghĩa cho Danh từ 2 (chỉ thuộc về, sở hữu).",
          example: "ミラーさんは IMCの 社員です。(Anh Miller là nhân viên công ty IMC.)"
        }
      ],
      kaiwa: {
        title: "初めまして (Rất vui được làm quen với anh/chị)",
        dialogue: [
          { speaker: "佐藤 (Sato)", japanese: "おはようございます。", vietnamese: "Chào buổi sáng." },
          { speaker: "ミラー (Miller)", japanese: "おはようございます。", vietnamese: "Chào buổi sáng." },
          { speaker: "佐藤 (Sato)", japanese: "初めまして。ミラーです。アメリカから 来ました。どうぞ よろしく お願いします。", vietnamese: "Rất hân hạnh được gặp chị. Tôi là Miller. Tôi đến từ Mỹ. Rất mong nhận được sự giúp đỡ của chị." },
          { speaker: "佐藤 (Sato)", japanese: "佐藤けいこです。どうぞ よろしく。", vietnamese: "Tôi là Sato Keiko. Rất vui được làm quen với anh." }
        ]
      },
      quiz: [
        { q: "'Học sinh, sinh viên' trong tiếng Nhật là gì?", opts: ["かいしゃいん", "がくせい", "いしゃ", "せんせい"], a: 1 },
        { q: "Trợ từ nào đóng vai trò chỉ chủ đề trong câu 'わたし___ がくせい です'?", opts: ["の", "も", "は", "か"], a: 2 }
      ],
      blanks: [
        { text: "わたし ___ がくせい です。(Tôi là sinh viên.)", ans: "は" },
        { text: "ミラーさんは IMC ___ しゃいんです。(Anh Miller là nhân viên công ty IMC.)", ans: "の" }
      ]
    },
    {
      id: 2,
      title: "Bài 2: Đồ vật xung quanh & Đại từ chỉ định",
      vocab: [
        { hiragana: "これ", kanji: "", romaji: "kore", meaning: "cái này (gần người nói)" },
        { hiragana: "それ", kanji: "", romaji: "sore", meaning: "cái đó (gần người nghe)" },
        { hiragana: "あれ", kanji: "", romaji: "are", meaning: "cái kia (xa cả hai)" },
        { hiragana: "この～", kanji: "", romaji: "kono", meaning: "~ này" },
        { hiragana: "その～", kanji: "", romaji: "sono", meaning: "~ đó" },
        { hiragana: "あの～", kanji: "", romaji: "ano", meaning: "~ kia" },
        { hiragana: "ほん", kanji: "本", romaji: "hon", meaning: "sách" },
        { hiragana: "じしょ", kanji: "辞書", romaji: "jisho", meaning: "từ điển" },
        { hiragana: "ざっし", kanji: "雑誌", romaji: "zasshi", meaning: "tạp chí" },
        { hiragana: "しんぶん", kanji: "新聞", romaji: "shinbun", meaning: "báo" },
        { hiragana: "ノート", kanji: "", romaji: "nooto", meaning: "vở" },
        { hiragana: "てちょう", kanji: "手帳", romaji: "techou", meaning: "sổ tay" },
        { hiragana: "めいし", kanji: "名刺", romaji: "meishi", meaning: "danh thiếp" },
        { hiragana: "えんぴつ", kanji: "鉛筆", romaji: "enpitsu", meaning: "bút chì" },
        { hiragana: "かぎ", kanji: "", romaji: "kagi", meaning: "chìa khóa" },
        { hiragana: "とけい", kanji: "時計", romaji: "tokei", meaning: "đồng hồ" },
        { hiragana: "かさ", kanji: "傘", romaji: "kasa", meaning: "ô, dù" }
      ],
      kanji: [
        { char: "本", onyomi: "ホン (hon)", kunyomi: "もと (moto)", meaning: "Bản (Sách/Gốc)" },
        { char: "語", onyomi: "ゴ (go)", kunyomi: "かた・る (kata-ru)", meaning: "Ngôn (Ngôn ngữ)" },
        { char: "何", onyomi: "カ (ka)", kunyomi: "なに/なん (nani/nan)", meaning: "Hà (Cái gì)" }
      ],
      grammar: [
        {
          title: "1. これ / それ / あれ",
          explanation: "Là đại từ chỉ vật. これ (gần mình), それ (gần đối phương), あれ (xa cả hai).",
          example: "それは 辞書ですか。(Đó có phải là quyển từ điển không?)"
        },
        {
          title: "2. この N / その N / あの N",
          explanation: "Đứng trước bổ nghĩa trực tiếp cho danh từ N.",
          example: "この本は わたしのです。(Quyển sách này là của tôi.)"
        },
        {
          title: "3. そうです / ちがいます",
          explanation: "Dùng để trả lời câu hỏi xác nhận đúng/sai.",
          example: "はい、そうです。(Vâng, đúng vậy.) / いいえ、ちがいます。(Không, không phải.)"
        }
      ],
      kaiwa: {
        title: "これから お世話に なります (Từ nay rất mong được sự giúp đỡ của anh)",
        dialogue: [
          { speaker: "山田 (Yamada)", japanese: "はい。どなたですか。", vietnamese: "Vâng, ai đấy ạ?" },
          { speaker: "サントス (Santos)", japanese: "408の サントスです。", vietnamese: "Tôi là Santos ở phòng 408 đây ạ." },
          { speaker: "サントス (Santos)", japanese: "こんにちは。サントスです。これから お世話に なります。", vietnamese: "Chào anh. Tôi là Santos. Từ nay rất mong nhận được sự giúp đỡ của anh." },
          { speaker: "山田 (Yamada)", japanese: "こちらこそ どうぞ よろしく。", vietnamese: "Chính tôi mới là người mong được giúp đỡ." }
        ]
      },
      quiz: [
        { q: "Từ nào chỉ đồ vật 'ở gần người nghe'?", opts: ["これ", "それ", "あれ", "どれ"], a: 1 },
        { q: "'Quyển sách này' chuyển sang tiếng Nhật là gì?", opts: ["これほん", "このほん", "それほん", "そのほん"], a: 1 }
      ],
      blanks: [
        { text: "それは ___ ですか。(Đó là cái gì?)", ans: "なん" },
        { text: "___ ほんは わたしのです。(Quyển sách này là của tôi.)", ans: "この" }
      ]
    },
    {
      id: 3,
      title: "Bài 3: Nơi chốn & Địa điểm",
      vocab: [
        { hiragana: "ここ", kanji: "", romaji: "koko", meaning: "chỗ này, ở đây" },
        { hiragana: "そこ", kanji: "", romaji: "soko", meaning: "chỗ đó, ở đó" },
        { hiragana: "あそこ", kanji: "", romaji: "asoko", meaning: "chỗ kia, ở kia" },
        { hiragana: "どこ", kanji: "", romaji: "doko", meaning: "ở đâu, chỗ nào" },
        { hiragana: "こちら", kanji: "", romaji: "kochira", meaning: "phía này, chỗ này (lịch sự)" },
        { hiragana: "そちら", kanji: "", romaji: "sochira", meaning: "phía đó, chỗ đó (lịch sự)" },
        { hiragana: "あちら", kanji: "", romaji: "achira", meaning: "phía kia, chỗ kia (lịch sự)" },
        { hiragana: "どちら", kanji: "", romaji: "dochira", meaning: "phía nào, đâu (lịch sự)" },
        { hiragana: "きょうしつ", kanji: "教室", romaji: "kyoushitsu", meaning: "phòng học" },
        { hiragana: "しょくどう", kanji: "食堂", romaji: "shokudou", meaning: "nhà ăn, căng tin" },
        { hiragana: "じむしょ", kanji: "事務所", romaji: "jimusho", meaning: "văn phòng" },
        { hiragana: "うけつけ", kanji: "受付", romaji: "uketsuke", meaning: "quầy lễ tân" },
        { hiragana: "ロビー", kanji: "", romaji: "robii", meaning: "hành lang, đại sảnh" },
        { hiragana: "へや", kanji: "部屋", romaji: "heya", meaning: "căn phòng" },
        { hiragana: "お手洗い (おてあらい)", kanji: "お手洗い", romaji: "otearai", meaning: "nhà vệ sinh" },
        { hiragana: "かいだん", kanji: "階段", romaji: "kaidan", meaning: "cầu thang bộ" },
        { hiragana: "エレベーター", kanji: "", romaji: "erebeetaa", meaning: "thang máy" },
        { hiragana: "うち", kanji: "家", romaji: "uchi", meaning: "nhà" },
        { hiragana: "かいしゃ", kanji: "会社", romaji: "kaisha", meaning: "công ty" }
      ],
      kanji: [
        { char: "校", onyomi: "コウ (kou)", kunyomi: "-", meaning: "Hiệu (Trường học)" },
        { char: "店", onyomi: "テン (ten)", kunyomi: "みせ (mise)", meaning: "Điếm (Cửa hàng)" },
        { char: "駅", onyomi: "エキ (eki)", kunyomi: "-", meaning: "Dịch (Nhà ga)" },
        { char: "社", onyomi: "シャ (sha)", kunyomi: "やしろ (yashiro)", meaning: "Xã (Công ty/Đền)" }
      ],
      grammar: [
        {
          title: "1. ここ / そこ / あそこ / どこ",
          explanation: "Đại từ chỉ nơi chốn. ここ (gần người nói), そこ (gần người nghe), あそこ (xa cả hai), どこ (ở đâu).",
          example: "ここは 教室です。(Đây là phòng học.)"
        },
        {
          title: "2. N1 は N2 (Địa điểm) です",
          explanation: "Diễn tả vị trí của một đối tượng hay địa điểm N1.",
          example: "お手洗いは あそこです。(Nhà vệ sinh ở đằng kia.)"
        },
        {
          title: "3. こちら / そちら / あちら / どちら",
          explanation: "Là dạng lịch sự của ここ / そこ / あそこ / どこ, dùng chỉ phương hướng hoặc nơi chốn.",
          example: "エレベーターは どちらですか。(Thang máy ở hướng nào ạ?)"
        }
      ],
      kaiwa: {
        title: "これを ください (Cho tôi cái này)",
        dialogue: [
          { speaker: "マリア (Maria)", japanese: "すみません。ワイン売り場は どこですか。", vietnamese: "Xin lỗi, quầy bán rượu vang ở đâu ạ?" },
          { speaker: "店員 (NPT)", japanese: "地下1階で ございます。", vietnamese: "Ở tầng hầm B1 ạ." },
          { speaker: "マリア (Maria)", japanese: "どうも ありがとう。", vietnamese: "Cảm ơn nhiều." }
        ]
      },
      quiz: [
        { q: "'Chỗ kia, ở kia' trong tiếng Nhật là gì?", opts: ["ここ", "そこ", "あそこ", "どこ"], a: 2 },
        { q: "Từ 'きょうしつ' (phòng học) viết bằng Kanji là gì?", opts: ["教室", "食堂", "事務所", "受付"], a: 0 }
      ],
      blanks: [
        { text: "ここは じむしょ ___ です。(Đây là văn phòng.)", ans: "です" },
        { text: "お手洗いは ___ ですか。(Nhà vệ sinh ở đâu?)", ans: "どこ" }
      ]
    },
    {
      id: 4,
      title: "Bài 4: Thời gian & Động từ",
      vocab: [
        { hiragana: "おきます", kanji: "起きよう", romaji: "okimasu", meaning: "thức dậy" },
        { hiragana: "ねます", kanji: "寝ます", romaji: "nemasu", meaning: "ngủ" },
        { hiragana: "はたらきます", kanji: "働きます", romaji: "hatarakimasu", meaning: "làm việc" },
        { hiragana: "やすみます", kanji: "休みます", romaji: "yasumimasu", meaning: "nghỉ ngơi" },
        { hiragana: "べんきょうします", kanji: "勉強します", romaji: "benkyou shimasu", meaning: "học tập" },
        { hiragana: "おわります", kanji: "終わります", romaji: "owarimasu", meaning: "kết thúc, xong" },
        { hiragana: "いま", kanji: "今", romaji: "ima", meaning: "bây giờ" },
        { hiragana: "―じ", kanji: "―時", romaji: "-ji", meaning: "― giờ" },
        { hiragana: "―ふん (ぷん)", kanji: "―分", romaji: "-fun/pun", meaning: "― phút" },
        { hiragana: "はん", kanji: "半", romaji: "han", meaning: "rưỡi, 30 phút" },
        { hiragana: "なんじ", kanji: "何時", romaji: "nanji", meaning: "mấy giờ" },
        { hiragana: "なんぷん", kanji: "何分", romaji: "nanpun", meaning: "mấy phút" },
        { hiragana: "ごぜん", kanji: "午前", romaji: "gozen", meaning: "buổi sáng (AM)" },
        { hiragana: "ごご", kanji: "午後", romaji: "gogo", meaning: "buổi chiều (PM)" },
        { hiragana: "あさ", kanji: "朝", romaji: "asa", meaning: "buổi sáng" },
        { hiragana: "ひる", kanji: "昼", romaji: "hiru", meaning: "buổi trưa" },
        { hiragana: "ばん (よる)", kanji: "晩 (夜)", romaji: "ban (yoru)", meaning: "buổi tối" },
        { hiragana: "まいあさ", kanji: "毎朝", romaji: "maiasa", meaning: "mỗi sáng" },
        { hiragana: "まいばん", kanji: "毎晩", romaji: "maiban", meaning: "mỗi tối" },
        { hiragana: "まいにち", kanji: "毎日", romaji: "mainichi", meaning: "mỗi ngày" }
      ],
      kanji: [
        { char: "時", onyomi: "ジ (ji)", kunyomi: "とき (toki)", meaning: "Thời (Thời gian)" },
        { char: "分", onyomi: "フン/ブン (fun/bun)", kunyomi: "わ・かる (wa-karu)", meaning: "Phân (Phút)" },
        { char: "今", onyomi: "コン (kon)", kunyomi: "いま (ima)", meaning: "Kim (Bây giờ)" },
        { char: "半", onyomi: "ハン (han)", kunyomi: "なか・ば (naka-ba)", meaning: "Bán (Một nửa)" }
      ],
      grammar: [
        {
          title: "1. 今 ―時 ―分です",
          explanation: "Diễn tả thời gian hiện tại.",
          example: "いま ９時半です。(Bây giờ là 9 giờ rưỡi.)"
        },
        {
          title: "2. Động từ ます / ません / ました / ませんでした",
          explanation: "Biến đổi động từ theo thời thì (Hiện tại-Tương lai / Quá khứ) và thể (Khẳng định / Phủ định).",
          example: "毎朝 ６時に 起きます。(Mỗi sáng tôi thức dậy lúc 6 giờ.)"
        },
        {
          title: "3. N (Thờigian) に V",
          explanation: "Trợ từ に đi kèm sau thời gian có con số cụ thể để chỉ thời điểm thực hiện hành động.",
          example: "6時半に 起きます。(Tôi thức dậy lúc 6 giờ rưỡi.)"
        },
        {
          title: "4. N1 から N2 まで",
          explanation: "から (từ) chỉ điểm bắt đầu, まで (đến) chỉ điểm kết thúc của thời gian hoặc khoảng cách.",
          example: "9時から 5時まで 働きます。(Tôi làm việc từ 9 giờ đến 5 giờ.)"
        }
      ],
      kaiwa: {
        title: "そちらは 何時から 何時までですか (Bên anh làm việc từ mấy giờ đến mấy giờ?)",
        dialogue: [
          { speaker: "番号案内 (Hỗ trợ)", japanese: "はい、大和美術館です。", vietnamese: "Vâng, bảo tàng mỹ thuật Yamato xin nghe." },
          { speaker: "サントス (Santos)", japanese: "すみません。そちらは 何時から 何時までですか。", vietnamese: "Xin lỗi, bên anh mở cửa từ mấy giờ đến mấy giờ ạ?" },
          { speaker: "番号案内 (Hỗ trợ)", japanese: "9時から 4時までです。", vietnamese: "Từ 9 giờ đến 4 giờ ạ." }
        ]
      },
      quiz: [
        { q: "Động từ 'Thức dậy' trong tiếng Nhật là gì?", opts: ["ねます", "おきます", "はたらきます", "やすみます"], a: 1 },
        { q: "Trợ từ nào chỉ thời điểm cụ thể xảy ra hành động?", opts: ["で", "へ", "に", "を"], a: 2 }
      ],
      blanks: [
        { text: "わたしは 6時 ___ おきます。(Tôi thức dậy lúc 6 giờ.)", ans: "に" },
        { text: "9時から 5時 ___ はたらきます。(Tôi làm việc đến 5 giờ.)", ans: "まで" }
      ]
    },
    {
      id: 5,
      title: "Bài 5: Di chuyển & Phương tiện",
      vocab: [
        { hiragana: "いきます", kanji: "行きます", romaji: "ikimasu", meaning: "đi" },
        { hiragana: "きます", kanji: "来ます", romaji: "kimasu", meaning: "đến" },
        { hiragana: "かえります", kanji: "帰ります", romaji: "kaerimasu", meaning: "trở về" },
        { hiragana: "がっこう", kanji: "学校", romaji: "gakkou", meaning: "trường học" },
        { hiragana: "スーパー", kanji: "", romaji: "suupaa", meaning: "siêu thị" },
        { hiragana: "えき", kanji: "駅", romaji: "eki", meaning: "nhà ga" },
        { hiragana: "ひこうき", kanji: "飛行機", romaji: "hikouki", meaning: "máy bay" },
        { hiragana: "ふね", kanji: "船", romaji: "fune", meaning: "thuyền, tàu thủy" },
        { hiragana: "でんしゃ", kanji: "電車", romaji: "densha", meaning: "xe điện" },
        { hiragana: "ちかてつ", kanji: "地下鉄", romaji: "chikatetsu", meaning: "tàu điện ngầm" },
        { hiragana: "しんかんせん", kanji: "新幹線", romaji: "shinkansen", meaning: "tàu siêu tốc Shinkansen" },
        { hiragana: "バス", kanji: "", romaji: "basu", meaning: "xe buýt" },
        { hiragana: "タクシー", kanji: "", romaji: "takushii", meaning: "taxi" },
        { hiragana: "じてんしゃ", kanji: "自転車", romaji: "jitensha", meaning: "xe đạp" },
        { hiragana: "あるいて", kanji: "歩いて", romaji: "aruite", meaning: "đi bộ" },
        { hiragana: "ともだち", kanji: "友達", romaji: "tomodachi", meaning: "bạn bè" },
        { hiragana: "かれ", kanji: "彼", romaji: "kare", meaning: "anh ấy, bạn trai" },
        { hiragana: "かのじょ", kanji: "彼女", romaji: "kanojo", meaning: "cô ấy, bạn gái" },
        { hiragana: "かぞく", kanji: "家族", romaji: "kazoku", meaning: "gia đình" },
        { hiragana: "ひとりで", kanji: "一人で", romaji: "hitoride", meaning: "một mình" }
      ],
      kanji: [
        { char: "行", onyomi: "コウ (kou)", kunyomi: "い・く (i-ku)", meaning: "Hành (Đi)" },
        { char: "来", onyomi: "ライ (rai)", kunyomi: "く・る (ku-ru)", meaning: "Lai (Đến)" },
        { char: "帰", onyomi: "キ (ki)", kunyomi: "かえ・る (kae-ru)", meaning: "Quy (Về)" },
        { char: "車", onyomi: "シャ (sha)", kunyomi: "くるま (kuruma)", meaning: "Xa (Xe)" }
      ],
      grammar: [
        {
          title: "1. N (Địa điểm) へ いきます / きます / かえります",
          explanation: "Trợ từ へ (đọc là e) đi kèm với động từ di chuyển để chỉ hướng/đích đến.",
          example: "わたしは 日本へ いきます。(Tôi đi Nhật Bản.)"
        },
        {
          title: "2. どこ「へ」も いきません / いきませんでした",
          explanation: "Phủ định hoàn toàn: Không đi đâu cả.",
          example: "どこへも いきません。(Tôi không đi đâu cả.)"
        },
        {
          title: "3. N (Phương tiện) で いきます / きます / かえります",
          explanation: "Trợ từ で chỉ phương tiện giao thông được sử dụng. Lưu ý: 歩いて (đi bộ) không dùng で.",
          example: "電車で いきます。(Tôi đi bằng xe điện.)"
        },
        {
          title: "4. N (Người / Động vật) と V",
          explanation: "Trợ từ と mang nghĩa là 'cùng với' ai đó.",
          example: "友達と 日本へ 来ました。(Tôi đã đến Nhật Bản cùng bạn.)"
        }
      ],
      kaiwa: {
        title: "甲子園へ 行きますか (Anh/chị có đi Koshien không?)",
        dialogue: [
          { speaker: "サントス (Santos)", japanese: "すみません。甲子園まで いくらですか。", vietnamese: "Xin lỗi, đến Koshien hết bao nhiêu tiền ạ?" },
          { speaker: "駅員 (Nhan vien ga)", japanese: "350円です。", vietnamese: "350 Yên ạ." },
          { speaker: "サントス (Santos)", japanese: "350円ですね。ありがとうございました。", vietnamese: "350 Yên phải không. Cảm ơn anh." }
        ]
      },
      quiz: [
        { q: "Trợ từ nào dùng để chỉ phương hướng di chuyển?", opts: ["で", "へ", "に", "を"], a: 1 },
        { q: "Từ 'Đi bộ' trong tiếng Nhật là gì?", opts: ["じてんしゃ", "あるいて", "タクシー", "バス"], a: 1 }
      ],
      blanks: [
        { text: "タクシー ___ いきます。(Đi bằng taxi.)", ans: "で" },
        { text: "わたしは にほん ___ きました。(Tôi đã đến Nhật Bản.)", ans: "へ" }
      ]
    },
    {
      id: 6,
      title: "Bài 6: Hành động & Tác động",
      vocab: [
        { hiragana: "たべます", kanji: "食べます", romaji: "tabemasu", meaning: "ăn" },
        { hiragana: "のみます", kanji: "飲めます", romaji: "nomimasu", meaning: "uống" },
        { hiragana: "すいます", kanji: "吸います", romaji: "suimasu", meaning: "hút (thuốc)" },
        { hiragana: "みます", kanji: "見ます", romaji: "mimasu", meaning: "nhìn, xem" },
        { hiragana: "ききます", kanji: "聞きます", romaji: "kikimasu", meaning: "nghe" },
        { hiragana: "よみます", kanji: "読みます", romaji: "yomimasu", meaning: "đọc" },
        { hiragana: "かきます", kanji: "書きます", romaji: "kakimasu", meaning: "viết" },
        { hiragana: "かいます", kanji: "買います", romaji: "kaimasu", meaning: "mua" },
        { hiragana: "とりま", kanji: "撮ります", romaji: "torimasu", meaning: "chụp (ảnh)" },
        { hiragana: "します", kanji: "", romaji: "shimasu", meaning: "làm, chơi" },
        { hiragana: "あいます", kanji: "会います", romaji: "aimasu", meaning: "gặp (bạn)" },
        { hiragana: "ごはん", kanji: "ご飯", romaji: "gohan", meaning: "cơm, bữa ăn" },
        { hiragana: "あさごはん", kanji: "朝ご飯", romaji: "asagohan", meaning: "bữa sáng" },
        { hiragana: "ひるごはん", kanji: "昼ご飯", romaji: "hirugohan", meaning: "bữa trưa" },
        { hiragana: "ばんごはん", kanji: "晩ご飯", romaji: "bangohan", meaning: "bữa tối" },
        { hiragana: "パン", kanji: "", romaji: "pan", meaning: "bánh mì" },
        { hiragana: "たまご", kanji: "卵", romaji: "tamago", meaning: "trứng" },
        { hiragana: "にく", kanji: "肉", romaji: "niku", meaning: "thịt" },
        { hiragana: "さかな", kanji: "魚", romaji: "sakana", meaning: "cá" },
        { hiragana: "みず", kanji: "水", romaji: "mizu", meaning: "nước" },
        { hiragana: "おちゃ", kanji: "お茶", romaji: "ocha", meaning: "trà" }
      ],
      kanji: [
        { char: "食", onyomi: "ショク (shoku)", kunyomi: "た・べる (ta-beru)", meaning: "Thực (Ăn)" },
        { char: "飲", onyomi: "イン (in)", kunyomi: "の・む (no-mu)", meaning: "Ẩm (Uống)" },
        { char: "見", onyomi: "ケン (ken)", kunyomi: "み・る (mi-ru)", meaning: "Kiến (Nhìn)" },
        { char: "聞", onyomi: "ブン (bun), モン (mon)", kunyomi: "き・く (ki-ku)", meaning: "Văn (Nghe)" }
      ],
      grammar: [
        {
          title: "1. N を たべます / のみます",
          explanation: "Trợ từ を (đọc là o) đứng trước ngoại động từ để chỉ đối tượng trực tiếp chịu tác động của hành động.",
          example: "パンを たべます。(Tôi ăn bánh mì.)"
        },
        {
          title: "2. 何を しますか",
          explanation: "Câu hỏi 'Làm cái gì?'.",
          example: "日曜日 何を しますか。(Chủ nhật bạn làm gì?)"
        },
        {
          title: "3. N (Địa điểm) で V",
          explanation: "Trợ từ で chỉ địa điểm diễn ra hành động.",
          example: "レストランで ごはんを たべます。(Tôi ăn cơm ở nhà hàng.)"
        },
        {
          title: "4. Vませんか / Vましょう",
          explanation: "Vませんか dùng để rủ rê, mời mọc lịch sự ('Cùng... với tôi không?'). Vましょう dùng để đề nghị cùng làm ('Cùng... nào!').",
          example: "いっしょに お茶を 飲みませんか。(Cùng uống trà với tôi không?)"
        }
      ],
      kaiwa: {
        title: "いっしょに 行きませんか (Cùng đi với chúng tôi không?)",
        dialogue: [
          { speaker: "佐藤 (Sato)", japanese: "ミラーさん、日曜日 何を しましたか。", vietnamese: "Anh Miller, chủ nhật vừa rồi anh làm gì?" },
          { speaker: "ミラー (Miller)", japanese: "友達と 京都へ 行きました。", vietnamese: "Tôi đã đi Kyoto cùng bạn." },
          { speaker: "佐藤 (Sato)", japanese: "いいですね。いっしょに お茶を 飲みませんか。", vietnamese: "Thật tốt quá. Cùng uống trà với tôi không?" },
          { speaker: "ミラー (Miller)", japanese: "ええ、いいですね。", vietnamese: "Vâng, hay quá." }
        ]
      },
      quiz: [
        { q: "'Nước' trong tiếng Nhật là gì?", opts: ["ごはん", "みず", "お茶", "ジュース"], a: 1 },
        { q: "Trợ từ nào đi sau đối tượng bị tác động bởi ngoại động từ?", opts: ["は", "で", "を", "に"], a: 2 }
      ],
      blanks: [
        { text: "ジュース ___ のみます。(Uống nước trái cây.)", ans: "を" },
        { text: "レストラン ___ ごはんを たべます。(Ăn cơm ở nhà hàng.)", ans: "で" }
      ]
    }
  ]
};
