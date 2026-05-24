import React, { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { prophets, getProphetById } from '../data/prophets';
import { LanguageSelector } from './LanguageSelector';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, BookOpen, Heart, CheckCircle2, Award, Info, 
  HelpCircle, Sparkles, Star, UserCheck, Flame, Trash2, BookMarked,
  Check, X, RefreshCw, ArrowRight
} from 'lucide-react';

import * as LucideIcons from 'lucide-react';

const renderProphetThemeIcon = (iconName: string, className?: string) => {
  const IconComponent = (LucideIcons as any)[iconName];
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  return <BookOpen className={className} />;
};

// Fun multiple choice quiz questions
interface QuizQuestion {
  id: number;
  question: { en: string; ar: string; sv: string; de: string };
  choices: { en: string; ar: string; sv: string; de: string }[];
  correctIdx: number;
  prophetId: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: {
      en: "Who was the first human being created, taught the names of all things?",
      ar: "من هو أول إنسان خلقه الله وعلمه أسماء كل الأشياء؟",
      sv: "Vem var den allra första människan som skapades och fick lära sig alla namn?",
      de: "Wer war der erste erschaffene Mensch, dem alle Namen beigebracht wurden?"
    },
    choices: [
      { en: "Adam", ar: "آدم عليه السلام", sv: "Adam", de: "Adam" },
      { en: "Musa", ar: "موسى عليه السلام", sv: "Musa", de: "Musa" },
      { en: "Isa", ar: "عيسى عليه السلام", sv: "Isa", de: "Isa" }
    ],
    correctIdx: 0,
    prophetId: "adam"
  },
  {
    id: 2,
    question: {
      en: "Which tool was Prophet Idris the very first person to write with?",
      ar: "ما هي الأداة التي كان نبي الله إدريس أول من خط بها؟",
      sv: "Vilket redskap var profeten Idris den allra första människan att skriva med?",
      de: "Mit welchem Werkzeug schrieb Prophet Idris als allererster Mensch?"
    },
    choices: [
      { en: "A staff", ar: "العصا الخشبية", sv: "En trästav", de: "Ein Stab" },
      { en: "A pen", ar: "القلم", sv: "En penna", de: "Eine Feder/Stift" },
      { en: "A chisel", ar: "الإزميل المعدني", sv: "En mejsel", de: "Ein Meißel" }
    ],
    correctIdx: 1,
    prophetId: "idris"
  },
  {
    id: 3,
    question: {
      en: "What did Prophet Nuh (Noah) build on dry land to save believers and pairs of animals?",
      ar: "ماذا بنى نبي الله نوح على الأرض الجافة لإنقاذ المؤمنين والحيوانات؟",
      sv: "Vad byggde profeten Nuh på torra land för att rädda troende och djur?",
      de: "Was baute Prophet Nuh auf trockenem Boden, um die Gläubigen und Tiere zu retten?"
    },
    choices: [
      { en: "A stone fortress", ar: "حصناً حجرياً", sv: "Ett stenslott", de: "Eine Steinburg" },
      { en: "A massive Ark (ship)", ar: "سفينة ضخمة (الفلك)", sv: "En stor Ark (skepp)", de: "Eine riesige Arche (Schiff)" },
      { en: "A high tower", ar: "برجاً عالياً للنجاة", sv: "Ett högt torn", de: "Einen hohen Turm" }
    ],
    correctIdx: 1,
    prophetId: "nuh"
  },
  {
    id: 4,
    question: {
      en: "What did Allah command the giant fire campfire to become for Prophet Ibrahim?",
      ar: "بماذا أمر الله النار الهائلة أن تكون لإبراهيم عند إلقائه فيها؟",
      sv: "Vad beordrade Allah att den stora elden skulle bli för profeten Ibrahim?",
      de: "Was befahl Allah dem riesigen Feuer für Prophet Ibrahim zu werden?"
    },
    choices: [
      { en: "Cool and peaceful", ar: "برداً وسلاماً", sv: "Sval och fridfull", de: "Kühl und friedlich" },
      { en: "A river of water", ar: "نهراً من الماء الرقراق", sv: "En rinnande flod", de: "Ein Fluss voller Wasser" },
      { en: "A sandstorm", ar: "عاصفة رملية", sv: "En sandstorm", de: "Ein Sandsturm" }
    ],
    correctIdx: 0,
    prophetId: "ibrahim"
  },
  {
    id: 5,
    question: {
      en: "Whose kicking foot as a baby in the dry sands made Zamzam water bubble up?",
      ar: "من هو الرضيع الذي تفجر ماء زمزم من تحت قدميه عندما ركضت أمه هاجر؟",
      sv: "Vilken bebis sparkade med foten i sanden så att Zamzam-källan sprutade upp?",
      de: "Unter den Füßen welches Säuglings entsprang im heißen Sand die Zamzam-Quelle?"
    },
    choices: [
      { en: "Yusuf", ar: "يوسف عليه السلام", sv: "Yusuf", de: "Yusuf" },
      { en: "Ismail", ar: "إسماعيل عليه السلام", sv: "Ismail", de: "Ismail" },
      { en: "Yahya", ar: "يحيى عليه السلام", sv: "Yahya", de: "Yahya" }
    ],
    correctIdx: 1,
    prophetId: "ismail"
  },
  {
    id: 6,
    question: {
      en: "Which animal swallowed Prophet Yunus (Jonah) gently in the ocean depths?",
      ar: "أي حيوان ابتلع نبي الله يونس برفق في أعماق البحار العميقة؟",
      sv: "Vilket djur svalde profeten Yunus hel och ren i havets djup?",
      de: "Welches Meerestier verschlang Prophet Yunus sanft in den Tiefen des Ozeans?"
    },
    choices: [
      { en: "A giant shark", ar: "سمكة قرش عملاقة", sv: "En jättehaj", de: "Ein großer Hai" },
      { en: "A massive blue whale", ar: "حوت أزرق ضخم", sv: "En stor blåval", de: "Ein riesiger Wal" },
      { en: "A friendly seal", ar: "فقمة بحرية لطيفة", sv: "En säl", de: "Eine Robbe" }
    ],
    correctIdx: 1,
    prophetId: "yunus"
  },
  {
    id: 7,
    question: {
      en: "What did the little ant warn her colony about when King Sulayman approached?",
      ar: "بماذا حذرت النملة الصغيرة رفاقها عندما سمعها نبي الله سليمان؟",
      sv: "Vad varnade den lilla myran sina kompisar för när kung Sulayman närmade sig?",
      de: "Wovor warnte die Ameisenkönigin ihr Volk, als sich König Sulayman näherte?"
    },
    choices: [
      { en: "Enter your homes lest you get crushed", ar: "ادخلوا مساكنكم لا يحطمنكم سليمان وجنوده", sv: "Gå in i era bona så ni inte blir trampade på", de: "Geht in eure Wohnungen, damit ihr nicht zertrampelt werdet" },
      { en: "Help us carry fruits", ar: "ساعدونا في حمل حبات الفاكهة", sv: "Hjälp oss bära jordgubbar", de: "Helft uns Früchte zu schleppen" },
      { en: "Fly into the clouds", ar: "طيروا عالياً نحو السحاب", sv: "Flyg upp i luften", de: "Fliegt hoch in die Wolken" }
    ],
    correctIdx: 0,
    prophetId: "sulayman"
  },
  {
    id: 8,
    question: {
      en: "Who was the final Messenger sent as a mercy to all of humanity with the Quran?",
      ar: "من هو خاتم الأنبياء والمرسلين المرسل رحمة للعالمين بالقرآن الكريم؟",
      sv: "Vem var den sista profeten som sändes som en nåd till hela mänskligheten med Koranen?",
      de: "Wer war das Siegel der Propheten, der als Barmherzigkeit für die Welten gesandt wurde?"
    },
    choices: [
      { en: "Isa", ar: "عيسى عليه السلام", sv: "Isa", de: "Isa" },
      { en: "Muhammad (SAW)", ar: "محمد صلى الله عليه وسلم", sv: "Muhammad (SAW)", de: "Muhammad (SAW)" },
      { en: "Dawud", ar: "داود عليه السلام", sv: "Dawud", de: "Dawud" }
    ],
    correctIdx: 1,
    prophetId: "muhammad"
  }
];

export const HomePage: React.FC = () => {
  const { 
    favorites, 
    completed, 
    setActiveProphetId, 
    resetProgress 
  } = useAppContext();

  const { language, t, isRtl } = useLanguage();

  // Search filter query
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Navigation tab selections
  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'completed' | 'quiz' | 'guide'>('all');

  // Quiz states
  const [currentQuizIdx, setCurrentQuizIdx] = useState<number>(0);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [quizFeedback, setQuizFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');

  // Unified dynamic filtering logic
  const filteredProphets = useMemo(() => {
    return prophets.filter((p) => {
      const localName = p.names[language] || p.names['en'];
      const searchMatches = localName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.arabicName.includes(searchQuery);

      if (!searchMatches) return false;

      if (activeTab === 'favorites') {
        return favorites.includes(p.id);
      }
      if (activeTab === 'completed') {
        return completed.includes(p.id);
      }
      return true;
    });
  }, [searchQuery, activeTab, favorites, completed, language]);

  // Overall statistics tracking
  const completionPercentage = useMemo(() => {
    return Math.round((completed.length / 25) * 100);
  }, [completed]);

  // Quiz choice handeler
  const handleAnswerSubmit = (choiceIdx: number) => {
    if (selectedAns !== null) return; // Answer locked in
    setSelectedAns(choiceIdx);
    const q = quizQuestions[currentQuizIdx];
    if (choiceIdx === q.correctIdx) {
      setQuizScore(prev => prev + 1);
      setQuizFeedback('correct');
    } else {
      setQuizFeedback('wrong');
    }
  };

  const nextQuizQuestion = () => {
    setSelectedAns(null);
    setQuizFeedback('idle');
    if (currentQuizIdx < quizQuestions.length - 1) {
      setCurrentQuizIdx(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuizIdx(0);
    setSelectedAns(null);
    setQuizScore(0);
    setQuizFinished(false);
    setQuizFeedback('idle');
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6" id="home-view-container">
      {/* APP TITLE HEADER */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-150 pb-6 mb-6" id="app-landing-header">
        <div className="flex items-center gap-3.5 text-start" id="app-title-card">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md animate-spin-slow">
            <Star size={24} fill="currentColor" id="spinning-star-graphic" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3.5xl font-extrabold tracking-tight font-sans text-gray-900 leading-tight">
              🕌 {t('app_title')}
            </h1>
            <p className="text-xs md:text-sm text-gray-500 font-medium">
              {t('app_subtitle')}
            </p>
          </div>
        </div>

        {/* Dropdown switch button list */}
        <div id="header-lang-selector">
          <LanguageSelector />
        </div>
      </header>

      {/* DETAILED FAMILY PROGRESS METRIC BOARD */}
      <section className="bg-gradient-to-br from-emerald-900 to-teal-850 text-white rounded-3xl p-5 md:p-6 shadow-md mb-8 relative overflow-hidden" id="family-progress-dashboard shadow-md">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/5 pointer-events-none select-none" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5 pointer-events-none select-none" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10 text-start" id="dashboard-metric-layout">
          <div className="space-y-2 text-start">
            <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider uppercase inline-flex items-center gap-1.5 text-emerald-200">
              <Award size={12} fill="currentColor" /> {t('your_progress')}
            </span>
            <h2 className="text-xl md:text-2xl font-bold font-sans">
              Masha'Allah! You are doing amazing!
            </h2>
            <p className="text-xs md:text-sm text-emerald-100/80 leading-relaxed font-sans max-w-xl">
              Discover and study the inspiring lives and supplications of all 25 Quranic messagers, completing milestones from Hazrat Adam (AS) to Prophet Muhammad (SAW).
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6 text-center" id="stat-counters">
            <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-xs flex flex-col justify-center">
              <span className="text-2xl md:text-3xl font-extrabold block text-emerald-250 font-mono">
                {completed.length}
              </span>
              <span className="text-3xs md:text-2xs text-emerald-100 font-medium block mt-0.5 uppercase tracking-wider">
                {t('stories_completed')}
              </span>
            </div>

            <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-xs flex flex-col justify-center">
              <span className="text-2xl md:text-3xl font-extrabold block text-pink-350 font-mono">
                {favorites.length}
              </span>
              <span className="text-3xs md:text-2xs text-emerald-100 font-medium block mt-0.5 uppercase tracking-wider">
                {t('favorites_count')}
              </span>
            </div>

            <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-xs flex flex-col justify-center">
              <span className="text-2xl md:text-3xl font-extrabold block text-yellow-350 font-mono">
                {completionPercentage}%
              </span>
              <span className="text-3xs md:text-2xs text-emerald-100 font-medium block mt-0.5 uppercase tracking-wider">
                {t('completion_rate')}
              </span>
            </div>
          </div>
        </div>

        {/* Visual Progress Bar track */}
        <div className="mt-5 pt-3 border-t border-white/10 relative z-10" id="visual-progress-meter">
          <div className="flex justify-between items-center text-xs text-emerald-200 mb-1.5" id="progress-text-bar">
            <span>{t('books_unlocked_of').replace('{completed}', completed.length.toString()).replace('{total}', '25')}</span>
            <span>{completionPercentage}% {t('completed_badge')}</span>
          </div>
          <div className="h-2.5 w-full bg-emerald-950/70 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-emerald-400 to-yellow-300"
            />
          </div>
        </div>
      </section>

      {/* SEARCH & FILTER TABS BAR */}
      <section className="space-y-4 mb-6" id="search-filter-tabs-layout">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4" id="controls-panel">
          {/* Tabs bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-gray-100 border border-gray-150 rounded-2xl shadow-3xs text-start sm:justify-start justify-center" id="menu-tabs">
            <button
              id="tab-all"
              onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
              className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl cursor-pointer transition-all ${activeTab === 'all' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
            >
              📖 {t('all_prophets')}
            </button>
            <button
              id="tab-favorites"
              onClick={() => { setActiveTab('favorites'); setSearchQuery(''); }}
              className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl cursor-pointer transition-all ${activeTab === 'favorites' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
            >
              ❤️ {t('favorites')}
            </button>
            <button
              id="tab-completed"
              onClick={() => { setActiveTab('completed'); setSearchQuery(''); }}
              className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl cursor-pointer transition-all ${activeTab === 'completed' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
            >
              ✅ {t('completed')}
            </button>
            <button
              id="tab-quiz"
              onClick={() => { setActiveTab('quiz'); setSearchQuery(''); }}
              className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl cursor-pointer transition-all ${activeTab === 'quiz' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
            >
              🎯 {t('quick_quiz')}
            </button>
            <button
              id="tab-guide"
              onClick={() => { setActiveTab('guide'); setSearchQuery(''); }}
              className={`px-4 py-2 text-xs md:text-sm font-bold rounded-xl cursor-pointer transition-all ${activeTab === 'guide' ? 'bg-white text-gray-900 shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
            >
              🎓 {t('parent_guide')}
            </button>
          </div>

          {/* Inline search bar (only visible for list views) */}
          {activeTab !== 'quiz' && activeTab !== 'guide' && (
            <div className="relative w-full lg:w-72" id="search-input-field">
              <div className={`absolute top-1/2 -translate-y-1/2 flex items-center p-2.5 text-gray-400 ${isRtl ? 'right-1' : 'left-1'}`}>
                <Search size={16} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('search_placeholder')}
                className={`w-full py-2 bg-white border border-gray-150 rounded-xl text-sm text-gray-700 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all ${isRtl ? 'pr-9 text-right' : 'pl-9 text-left'}`}
                id="search-input"
              />
            </div>
          )}
        </div>
      </section>

      {/* MAIN SWITCHBOARD VIEWS AREA */}
      <main id="main-content-panels">
        {/* INTERACTIVE QUIZ TAB VIEW */}
        {activeTab === 'quiz' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl mx-auto bg-white border border-gray-150 rounded-3xl p-6 md:p-8 shadow-sm text-center"
            id="interactive-quiz-panel"
          >
            <div className="flex justify-center mb-3">
              <span className="bg-emerald-50 p-2.5 rounded-2xl text-emerald-600">
                <HelpCircle size={32} />
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 font-sans mb-1" id="quiz-title-header">
              {t('quiz_title')}
            </h2>
            <p className="text-xs md:text-sm text-gray-500 max-w-md mx-auto mb-6 leading-relaxed" id="quiz-intro-sub">
              {t('quiz_intro')}
            </p>

            {!quizFinished ? (
              <div className="space-y-6" id="active-quiz-flow">
                {/* Question progress */}
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono" id="quiz-progress-metrics">
                  <span>Question {currentQuizIdx + 1} of {quizQuestions.length}</span>
                  <span>{t('quiz_score')}: {quizScore}</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 transition-all duration-300"
                    style={{ width: `${((currentQuizIdx) / quizQuestions.length) * 100}%` }}
                  />
                </div>

                {/* Question Text in beautiful big typography */}
                <div className="bg-gray-50/50 p-5 rounded-2xl border border-gray-100/50" id="quiz-question-box">
                  <p className="text-base md:text-lg font-bold text-gray-800 font-sans leading-relaxed">
                    {quizQuestions[currentQuizIdx].question[language] || quizQuestions[currentQuizIdx].question['en']}
                  </p>
                </div>

                {/* Multiple choices selection grid */}
                <div className="grid grid-cols-1 gap-3" id="quiz-options-picker">
                  {quizQuestions[currentQuizIdx].choices.map((choice, idx) => {
                    const isSelected = selectedAns === idx;
                    const isCorrect = idx === quizQuestions[currentQuizIdx].correctIdx;
                    
                    let btnStyle = "bg-white border-gray-200 hover:bg-emerald-50 hover:border-emerald-200 text-gray-700";
                    if (selectedAns !== null) {
                      if (isSelected) {
                        btnStyle = isCorrect ? "bg-emerald-50 border-emerald-500 text-emerald-950" : "bg-rose-50 border-rose-450 text-rose-950";
                      } else if (isCorrect) {
                        btnStyle = "bg-emerald-50 border-emerald-300 text-emerald-950 block-disabled";
                      } else {
                        btnStyle = "bg-white border-gray-100 text-gray-300 block-disabled";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSubmit(idx)}
                        disabled={selectedAns !== null}
                        id={`choice-btn-${idx}`}
                        className={`w-full p-4 rounded-xl border text-sm md:text-base font-semibold text-center cursor-pointer transition-all flex items-center justify-between shadow-2xs ${btnStyle}`}
                      >
                        <span className="w-full text-center">
                          {choice[language] || choice['en']}
                        </span>
                        {selectedAns !== null && isSelected && (
                          isCorrect ? <CheckCircle2 size={18} className="text-emerald-600" /> : <X size={18} className="text-rose-500" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Immediate correctness feedback prompt */}
                {selectedAns !== null && (
                  <div className="mt-4 animate-fade-in" id="quiz-feedback-prompt">
                    <p className={`text-sm font-extrabold mb-3 ${quizFeedback === 'correct' ? 'text-emerald-600' : 'text-rose-500'}`}>
                      {quizFeedback === 'correct' ? t('quiz_correct') : t('quiz_wrong')}
                    </p>
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => setActiveProphetId(quizQuestions[currentQuizIdx].prophetId)}
                        id="read-prophet-story-btn"
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-gray-700 text-xs font-bold rounded-lg cursor-pointer"
                      >
                        📖 Review Story
                      </button>
                      <button
                        onClick={nextQuizQuestion}
                        id="next-quiz-btn"
                        className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1 hover:scale-105"
                      >
                        <span>Next Question</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Quiz completion view
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 animate-fade-in"
                id="quiz-victory-screen"
              >
                <div className="p-6 bg-gradient-to-tr from-yellow-100 to-amber-200 rounded-3xl inline-flex text-amber-700 mb-2">
                  <Award size={60} fill="currentColor" className="animate-bounce" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-800">
                    {t('quiz_congrats')}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {t('quiz_result_msg').replace('{score}', quizScore.toString()).replace('{total}', quizQuestions.length.toString())}
                  </p>
                </div>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={restartQuiz}
                    id="reset-quiz-btn"
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-sm cursor-pointer flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <RefreshCw size={14} />
                    <span>{t('quiz_reset')}</span>
                  </button>
                  <button
                    onClick={() => { setActiveTab('all'); }}
                    id="return-all-stories-btn"
                    className="px-6 py-2.5 bg-gray-150 hover:bg-gray-200 text-gray-700 font-semibold rounded-full cursor-pointer"
                  >
                    {t('back_to_collection')}
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* EDUCATIONAL FAMILY PARENT GUIDE VIEW */}
        {activeTab === 'guide' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-3xl mx-auto bg-white border border-gray-150 rounded-3xl p-6 md:p-8 shadow-sm space-y-6"
            id="parent-instructional-guide"
          >
            <div className="flex items-start gap-4 text-start" id="guide-intro">
              <span className="bg-emerald-50 p-3 rounded-2xl text-emerald-604 shrink-0 mt-1">
                <Info size={30} />
              </span>
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-sans text-gray-900" id="guide-header">
                  {t('parent_guide')}
                </h2>
                <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                  {t('parent_guide_sub')}
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            <div className={`space-y-5 text-gray-850 font-sans text-sm md:text-base leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`} id="guide-paragraphs">
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm md:text-md mb-1 bg-emerald-50/40 p-2 rounded-lg text-start">
                  {t('guide_title_1')}
                </h3>
                <p className="pl-2 pr-2 text-start">
                  {t('guide_desc_1')}
                </p>
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900 text-sm md:text-md mb-1 bg-emerald-50/40 p-2 rounded-lg text-start">
                  {t('guide_title_2')}
                </h3>
                <p className="pl-2 pr-2 text-start">
                  {t('guide_desc_2')}
                </p>
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900 text-sm md:text-md mb-1 bg-emerald-50/40 p-2 rounded-lg text-start">
                  {t('guide_title_3')}
                </h3>
                <p className="pl-2 pr-2 text-start">
                  {t('guide_desc_3')}
                </p>
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900 text-sm md:text-md mb-1 bg-emerald-50/40 p-2 rounded-lg text-start">
                  {t('guide_title_4')}
                </h3>
                <p className="pl-2 pr-2 text-start">
                  {t('guide_desc_4')}
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-4" id="guide-bottom-toolbar">
              <button
                onClick={() => {
                  if (confirm(isRtl ? "هل أنت متأكد من إعادة ضبط كل التقدم والبيانات؟" : "Are you sure you want to reset all progress and bookmark data?")) {
                    resetProgress();
                  }
                }}
                id="reset-whole-app-btn"
                className="flex items-center gap-1 px-4 py-2 text-xs font-bold text-rose-600 hover:text-white bg-rose-50 hover:bg-rose-600 border border-rose-100 hover:border-rose-600 rounded-full cursor-pointer transition-all"
              >
                <Trash2 size={13} />
                <span>{t('reset_all_data')}</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* PROPHETS GRID VIEW: All, Favorites, or Completed */}
        {activeTab !== 'quiz' && activeTab !== 'guide' && (
          <div className="space-y-6" id="prophets-list-grid-view">
            {filteredProphets.length === 0 ? (
              <div className="text-center py-16 bg-white border border-gray-150 rounded-3xl" id="zero-state-view">
                <BookMarked className="h-12 w-12 text-gray-300 mx-auto mb-3 animate-pulse" />
                <p className="text-sm text-gray-500 max-w-sm mx-auto p-2" id="zero-state-message">
                  {activeTab === 'favorites' 
                    ? t('no_favorites') 
                    : activeTab === 'completed' 
                      ? t('no_completed') 
                      : 'No prophets match your search query.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" id="prophets-cards-grid">
                {filteredProphets.map((p) => {
                  const isFinished = completed.includes(p.id);
                  const isFav = favorites.includes(p.id);
                  
                  return (
                    <motion.div
                      key={p.id}
                      id={`prophet-card-${p.id}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`relative overflow-hidden cursor-pointer bg-white border border-gray-150 hover:border-emerald-350 rounded-2xl shadow-2xs hover:shadow-xs transition-all duration-300 hover:-translate-y-1`}
                      onClick={() => setActiveProphetId(p.id)}
                    >
                      {/* Decorative colored visual header bar with progress status */}
                      <div className={`h-2 bg-gradient-to-r ${p.colorTheme.gradient}`} id={`header-strip-${p.id}`} />

                      <div className="p-4 flex flex-col h-full justify-between" id={`card-inner-${p.id}`}>
                        <div className="space-y-3">
                          {/* Upper Card Metrics */}
                          <div className="flex items-center justify-between" id={`upper-card-${p.id}`}>
                            <span className="text-3xs font-mono font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full" id={`prophet-index-${p.id}`}>
                              {p.index} • 25
                            </span>
                            <div className="flex items-center gap-1" id={`status-icons-strip-${p.id}`}>
                              {isFav && <Heart size={14} className="text-red-500" fill="currentColor" />}
                              {isFinished && (
                                <span className="bg-emerald-50 text-emerald-700 text-4xs font-bold px-1.5 py-0.5 rounded-full border border-emerald-100 flex items-center gap-0.5">
                                  <Check size={9} strokeWidth={3} /> {t('completed_badge')}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Beautiful Avatar Image/Icon and Multi-language Names */}
                          <div className="flex items-center gap-3 text-start" id="avatar-and-names">
                            <div className={`h-11 w-11 rounded-xl flex items-center justify-center text-lg shadow-2xs bg-emerald-50 text-emerald-700`} id={`icon-box-${p.id}`}>
                              {renderProphetThemeIcon(p.iconName, "h-5 w-5")}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base font-bold text-gray-900 truncate" id={`name-${p.id}`}>
                                {p.names[language] || p.names['en']}
                              </h3>
                              <span className="text-3xs text-gray-400 block truncate" id={`title-${p.id}`}>
                                {p.titles[language] || p.titles['en']}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Card bottom section */}
                        <div className={`flex items-center justify-between mt-4 pt-3 border-t border-gray-100 flex-row`} id="card-action-bar">
                          <span className="text-3xs font-bold text-emerald-800 tracking-wide font-sans block" id={`arabic-${p.id}`}>
                            {p.arabicName.split(' ')[0]} {/* first arabic word */}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveProphetId(p.id);
                            }}
                            id={`read-now-${p.id}`}
                            className="px-3 py-1 bg-emerald-50 hover:bg-emerald-600 text-emerald-850 hover:text-white rounded-lg text-3xs font-extrabold cursor-pointer transition-all hover:scale-105"
                          >
                            {t('read_more')}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
export default HomePage;
