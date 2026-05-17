import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/LessonDetail.css';

const LessonDetail = () => {
  const { id } = useParams();
  
  const [lessons] = useState([
    {
      id: 1,
      title: '挨拶（あいさつ）',
      emoji: '👋',
      description: '基本的な挨拶表現を学びます',
      words: [
        { word: '你好', pinyin: 'nǐ hǎo', japanese: 'こんにちは', english: 'Hello' },
        { word: '早上好', pinyin: 'zǎo shang hǎo', japanese: 'おはようございます', english: 'Good morning' },
        { word: '晚上好', pinyin: 'wǎn shang hǎo', japanese: 'こんばんは', english: 'Good evening' },
        { word: '谢谢', pinyin: 'xièxie', japanese: 'ありがとう', english: 'Thank you' },
        { word: '对不起', pinyin: 'duì bu qǐ', japanese: 'ごめんなさい', english: 'Sorry' },
      ],
      examples: [
        { chinese: '你好，我是田中。', pinyin: 'Nǐ hǎo, wǒ shì Tiánzhōng.', japanese: 'こんにちは、私は田中です。', english: 'Hello, I am Tanaka.' },
        { chinese: '早上好！', pinyin: 'Zǎo shang hǎo!', japanese: 'おはようございます！', english: 'Good morning!' },
      ]
    },
    {
      id: 2,
      title: '数字（すうじ）',
      emoji: '🔢',
      description: '1から100までの数字を学びます',
      words: [
        { word: '一', pinyin: 'yī', japanese: '1', english: 'one' },
        { word: '二', pinyin: 'èr', japanese: '2', english: 'two' },
        { word: '三', pinyin: 'sān', japanese: '3', english: 'three' },
        { word: '十', pinyin: 'shí', japanese: '10', english: 'ten' },
        { word: '百', pinyin: 'bǎi', japanese: '100', english: 'hundred' },
      ],
      examples: [
        { chinese: '我有三个朋友。', pinyin: 'Wǒ yǒu sān ge péngyou.', japanese: '私は3人の友達がいます。', english: 'I have three friends.' },
        { chinese: '这个东西十块钱。', pinyin: 'Zhège dōngxi shí kuài qián.', japanese: 'このもの10元です。', english: 'This thing costs 10 yuan.' },
      ]
    },
    {
      id: 3,
      title: '食べ物（たべもの）',
      emoji: '🍜',
      description: '食べ物に関する単語を学びます',
      words: [
        { word: '米饭', pinyin: 'mǐ fàn', japanese: 'ご飯', english: 'rice' },
        { word: '面条', pinyin: 'miàn tiáo', japanese: '麺', english: 'noodles' },
        { word: '水', pinyin: 'shuǐ', japanese: '水', english: 'water' },
        { word: '茶', pinyin: 'chá', japanese: 'お茶', english: 'tea' },
        { word: '咖啡', pinyin: 'kā fēi', japanese: 'コーヒー', english: 'coffee' },
      ],
      examples: [
        { chinese: '我喜欢吃面条。', pinyin: 'Wǒ xǐhuān chī miàn tiáo.', japanese: '私は麺を食べるのが好きです。', english: 'I like eating noodles.' },
        { chinese: '你要喝咖啡还是茶？', pinyin: 'Nǐ yào hē kā fēi háishi chá?', japanese: 'コーヒーとお茶、どちらにしますか？', english: 'Would you like coffee or tea?' },
      ]
    },
    {
      id: 4,
      title: '家族（かぞく）',
      emoji: '👨‍👩‍👧‍👦',
      description: '家族に関する単語を学びます',
      words: [
        { word: '父亲', pinyin: 'fù qin', japanese: '父親', english: 'father' },
        { word: '母亲', pinyin: 'mǔ qin', japanese: '母親', english: 'mother' },
        { word: '兄弟', pinyin: 'xiōng dì', japanese: '兄弟', english: 'brother' },
        { word: '姐妹', pinyin: 'jiě mèi', japanese: '姉妹', english: 'sister' },
        { word: '孩子', pinyin: 'hái zi', japanese: '子ども', english: 'child' },
      ],
      examples: [
        { chinese: '我的父亲是医生。', pinyin: 'Wǒ de fù qin shì yī shēng.', japanese: '私の父親は医者です。', english: 'My father is a doctor.' },
        { chinese: '我有一个哥哥和一个妹妹。', pinyin: 'Wǒ yǒu yī ge gē ge hé yī ge mèi mei.', japanese: '兄が1人と妹が1人います。', english: 'I have one older brother and one younger sister.' },
      ]
    },
    {
      id: 5,
      title: '買い物（かいもの）',
      emoji: '🛒',
      description: '買い物に関する表現を学びます',
      words: [
        { word: '多少钱', pinyin: 'duō shao qián', japanese: 'いくらですか', english: 'How much is it?' },
        { word: '太贵了', pinyin: 'tài guì le', japanese: '高すぎます', english: 'Too expensive' },
        { word: '便宜', pinyin: 'pián yi', japanese: '安い', english: 'cheap' },
        { word: '打折', pinyin: 'dǎ zhé', japanese: '割引', english: 'discount' },
        { word: '付钱', pinyin: 'fù qián', japanese: 'お金を払う', english: 'to pay' },
      ],
      examples: [
        { chinese: '这个东西多少钱？', pinyin: 'Zhège dōngxi duō shao qián?', japanese: 'このもの、いくらですか？', english: 'How much is this item?' },
        { chinese: '能便宜一点吗？', pinyin: 'Néng pián yi yī diǎn ma?', japanese: 'もう少し安くできますか？', english: 'Can you make it a bit cheaper?' },
      ]
    },
  ]);

  const lesson = lessons.find(l => l.id === parseInt(id));

  if (!lesson) {
    return (
      <div className="lesson-detail-container">
        <p>レッスンが見つかりません</p>
        <Link to="/">一覧に戻る</Link>
      </div>
    );
  }

  return (
    <div className="lesson-detail-container">
      <Link to="/" className="back-link">← 戻る</Link>
      
      <div className="lesson-detail-header">
        <span className="detail-emoji">{lesson.emoji}</span>
        <h1>{lesson.title}</h1>
        <p className="detail-description">{lesson.description}</p>
      </div>

      <div className="lesson-detail-content">
        <section className="words-section">
          <h2>単語</h2>
          <div className="words-table-wrapper">
            <table className="words-table">
              <thead>
                <tr>
                  <th>中文</th>
                  <th>ピンイン</th>
                  <th>日本語</th>
                  <th>英語</th>
                </tr>
              </thead>
              <tbody>
                {lesson.words.map((word, index) => (
                  <tr key={index}>
                    <td className="chinese-word">{word.word}</td>
                    <td className="pinyin">{word.pinyin}</td>
                    <td className="japanese">{word.japanese}</td>
                    <td className="english">{word.english}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="examples-section">
          <h2>例文</h2>
          <div className="examples-list">
            {lesson.examples.map((example, index) => (
              <div key={index} className="example-item">
                <div className="example-chinese">{example.chinese}</div>
                <div className="example-pinyin">{example.pinyin}</div>
                <div className="example-translations">
                  <div className="example-japanese">【日本語】{example.japanese}</div>
                  <div className="example-english">【English】{example.english}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LessonDetail;
