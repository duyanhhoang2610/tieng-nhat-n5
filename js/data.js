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
        { char: "人", onyomi: "ジン (jin), ジン (nin)", kunyomi: "ひと (hito)", meaning: "Nhân (Người)" },
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
      }
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
      }
    }
  ]
};
