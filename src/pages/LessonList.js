import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LessonList.css';

const LessonList = () => {
  const [lessons] = useState([
    {
      id: 1,
      title: '挨拶（あいさつ）',
      description: '基本的な挨拶表現を学びます',
      level: '初級',
      emoji: '👋',
      words: [
        { word: '你好', pinyin: 'nǐ hǎo', japanese: 'こんにちは', english: 'Hello' },
        { word: '早上好', pinyin: 'zǎo shang hǎo', japanese: 'おはようございます', english: 'Good morning' },
        { word: '谢谢', pinyin: 'xièxie', japanese: 'ありがとう', english: 'Thank you' },
      ]
    },
    {
      id: 2,
      title: '数字（すうじ）',
      description: '1から100までの数字を学びます',
      level: '初級',
      emoji: '🔢',
      words: [
        { word: '一', pinyin: 'yī', japanese: '1', english: 'one' },
        { word: '十', pinyin: 'shí', japanese: '10', english: 'ten' },
        { word: '百', pinyin: 'bǎi', japanese: '100', english: 'hundred' },
      ]
    },
    {
      id: 3,
      title: '食べ物（たべもの）',
      description: '食べ物に関する単語を学びます',
      level: '初級',
      emoji: '🍜',
      words: [
        { word: '米饭', pinyin: 'mǐ fàn', japanese: 'ご飯', english: 'rice' },
        { word: '面条', pinyin: 'miàn tiáo', japanese: '麺', english: 'noodles' },
        { word: '水', pinyin: 'shuǐ', japanese: '水', english: 'water' },
      ]
    },
    {
      id: 4,
      title: '家族（かぞく）',
      description: '家族に関する単語を学びます',
      level: '初級',
      emoji: '👨‍👩‍👧‍👦',
      words: [
        { word: '父亲', pinyin: 'fù qin', japanese: '父親', english: 'father' },
        { word: '母亲', pinyin: 'mǔ qin', japanese: '母親', english: 'mother' },
        { word: '兄弟', pinyin: 'xiōng dì', japanese: '兄弟', english: 'brother' },
      ]
    },
    {
      id: 5,
      title: '買い物（かいもの）',
      description: '買い物に関する表現を学びます',
      level: '中級',
      emoji: '🛒',
      words: [
        { word: '多少钱', pinyin: 'duō shao qián', japanese: 'いくらですか', english: 'How much is it?' },
        { word: '太贵了', pinyin: 'tài guì le', japanese: '高すぎます', english: 'Too expensive' },
        { word: '便宜', pinyin: 'pián yi', japanese: '安い', english: 'cheap' },
      ]
    },
  ]);

  return (
    <div className="lesson-list-container">
      <div className="lesson-list-header">
        <h2>レッスン一覧</h2>
        <p>学びたいレッスンを選んでください</p>
      </div>

      <div className="lessons-grid">
        {lessons.map((lesson) => (
          <Link to={`/lesson/${lesson.id}`} key={lesson.id} className="lesson-card-link">
            <div className="lesson-card">
              <div className="lesson-emoji">{lesson.emoji}</div>
              <h3>{lesson.title}</h3>
              <p className="lesson-description">{lesson.description}</p>
              <div className="lesson-level">
                <span className={`level-badge ${lesson.level === '初級' ? 'beginner' : 'intermediate'}`}>
                  {lesson.level}
                </span>
              </div>
              <div className="lesson-words-count">
                単語数: {lesson.words.length}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LessonList;
