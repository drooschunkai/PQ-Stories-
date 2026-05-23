import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { prophets, getAdjacentProphets } from '../data/prophets';
import { AudioPlayer } from './AudioPlayer';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { 
  ArrowLeft, ArrowRight, Heart, BookmarkCheck, Sparkles, BookOpen, 
  HelpCircle, Lightbulb, Compass, Star 
} from 'lucide-react';

// Dynamic search map helper for Lucide Icons
const renderProphetIcon = (iconName: string, className?: string) => {
  const IconComponent = (LucideIcons as any)[iconName];
  if (IconComponent) {
    return <IconComponent className={className} />;
  }
  return <BookOpen className={className} />;
};

export const StoryDisplay: React.FC = () => {
  const { 
    activeProphetId, 
    setActiveProphetId, 
    favorites, 
    completed, 
    toggleFavorite, 
    toggleCompleted 
  } = useAppContext();

  const { language, t, isRtl } = useLanguage();

  const prophet = prophets.find(p => p.id === activeProphetId);

  if (!prophet) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center" id="story-not-found">
        <BookOpen className="text-emerald-500 h-16 w-16 mb-4 animate-bounce" />
        <h2 className="text-xl font-bold font-sans text-gray-800">Select a story to begin!</h2>
        <button 
          onClick={() => setActiveProphetId(null)}
          className="mt-4 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-sm cursor-pointer"
        >
          {t('back_to_stories')}
        </button>
      </div>
    );
  }

  const isFavorited = favorites.includes(prophet.id);
  const isCompleted = completed.includes(prophet.id);
  
  // High utility top navigation helpers
  const { prev, next } = getAdjacentProphets(prophet.index);
  const storyData = prophet.stories[language] || prophet.stories['en'];

  // Safe navigation transition
  const navigateTo = (id: string | null) => {
    // Stop any speech synthesis if running
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setActiveProphetId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={prophet.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-4xl mx-auto p-4 md:p-6"
        id={`story-pane-${prophet.id}`}
      >
        {/* Navigation Toolbar & Core Menu */}
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3" id="story-header-nav-toolbar">
          <button
            onClick={() => navigateTo(null)}
            className="flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 px-4 py-2 rounded-full transition-all cursor-pointer"
            id="back-home-button"
          >
            <ArrowLeft size={16} className={isRtl ? "rotate-180" : ""} />
            <span>{t('back_to_stories')}</span>
          </button>

          <div className="flex items-center gap-2" id="story-quick-action-favorites">
            {/* Click to Toggle Favorite */}
            <button
              onClick={() => toggleFavorite(prophet.id)}
              id="favorite-story-toggle"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs md:text-sm font-bold shadow-2xs transition-all cursor-pointer select-none
                ${isFavorited 
                  ? 'bg-red-50 text-red-700 border-red-200' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
            >
              <Heart size={16} fill={isFavorited ? "currentColor" : "none"} className={isFavorited ? "scale-110 text-red-650" : ""} />
              <span>{isFavorited ? t('remove_favorite') : t('add_favorite')}</span>
            </button>

            {/* Complete Toggle Icon */}
            <button
              onClick={() => toggleCompleted(prophet.id)}
              id="complete-story-toggle"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs md:text-sm font-bold shadow-2xs transition-all cursor-pointer select-none
                ${isCompleted 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }`}
            >
              <BookmarkCheck size={16} fill={isCompleted ? "currentColor" : "none"} className={isCompleted ? "text-emerald-600 scale-105" : ""} />
              <span>{isCompleted ? t('completed_badge') : t('mark_completed')}</span>
            </button>
          </div>
        </div>

        {/* TOP PAGINATION SECTION: Highly Visible Above Story Content */}
        <div className="w-full bg-white border border-gray-150 rounded-2xl p-3 md:p-4 mb-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-center" id="top-pagination-container">
          {/* Previous Prophet Step */}
          {prev ? (
            <button
              onClick={() => navigateTo(prev.id)}
              className="px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 rounded-full flex items-center justify-center gap-1 cursor-pointer transition-all self-center hover:scale-[1.03]"
              id="pagination-prev-btn"
            >
              <ArrowLeft size={14} className={isRtl ? "rotate-180" : ""} />
              <span>{t('prev_story')} ({prev.names[language] || prev.names['en']})</span>
            </button>
          ) : (
            <div className="hidden sm:block text-xs text-gray-300 pointer-events-none" id="pagination-prev-empty">
              •
            </div>
          )}

          {/* Current Story Progress Indicator */}
          <div className="flex flex-col items-center justify-center" id="pagination-center-counter">
            <span className="text-xs text-gray-500 font-mono tracking-wide">
              {t('story_counter').replace('{current}', prophet.index.toString()).replace('{total}', '25')}
            </span>
            <div className="flex gap-1 mt-1 justify-center max-w-[200px]" id="story-indicator-ticks">
              {prophets.map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigateTo(p.id)}
                  className={`h-1.5 rounded-full cursor-pointer transition-all duration-300
                    ${p.id === prophet.id 
                      ? 'w-4 bg-emerald-600' 
                      : completed.includes(p.id)
                        ? 'w-1.5 bg-emerald-400 hover:bg-emerald-500'
                        : 'w-1.5 bg-gray-200 hover:bg-gray-300'
                    }`}
                  title={`${p.index}. ${p.names[language]}`}
                />
              ))}
            </div>
          </div>

          {/* Next Prophet Step */}
          {next ? (
            <button
              onClick={() => navigateTo(next.id)}
              className="px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 rounded-full flex items-center justify-center gap-1 cursor-pointer transition-all self-center hover:scale-[1.03]"
              id="pagination-next-btn"
            >
              <span>({next.names[language] || next.names['en']}) {t('next_story')}</span>
              <ArrowRight size={14} className={isRtl ? "rotate-180" : ""} />
            </button>
          ) : (
            <div className="hidden sm:block text-xs text-gray-300 pointer-events-none" id="pagination-next-empty">
              •
            </div>
          )}
        </div>

        {/* PROPHET HERO STORY CARD */}
        <div className={`overflow-hidden bg-white border border-gray-150 rounded-3xl shadow-sm mb-7`} id="story-main-hero-card">
          {/* Styled color header depending on theme */}
          <div className={`p-6 md:p-8 bg-gradient-to-r ${prophet.colorTheme.gradient} text-white relative`} id="story-card-top-gradient">
            <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none font-sans font-bold text-7xl select-none uppercase">
              {prophet.id}
            </div>

            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10 ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`} id="hero-names-layout">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white text-3xl shadow-sm" id="prophet-avatar-box">
                  {renderProphetIcon(prophet.iconName, "h-8 w-8")}
                </div>
                <div>
                  <span className="text-white/80 uppercase tracking-widest text-xs font-bold font-mono" id="prophet-badge-index">
                    Prophet {prophet.index} of 25
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans drop-shadow-xs" id="prophet-display-name">
                    {prophet.names[language] || prophet.names['en']}
                  </h1>
                  <p className="text-white/90 text-sm md:text-base italic mt-0.5" id="prophet-display-title">
                    {prophet.titles[language] || prophet.titles['en']}
                  </p>
                </div>
              </div>

              {/* Calligraphy spelling column */}
              <div className="text-center sm:text-right flex flex-col justify-center" id="arabic-spelling-pillar">
                <span className="text-xs text-white/70 font-sans block">{t('arabic_spelling')}</span>
                <span className="text-2xl md:text-3xl font-bold block filter drop-shadow-sm font-sans tracking-wide" id="arabicName-view">
                  {prophet.arabicName}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6" id="story-main-card-body">
            {/* Audio narration reader */}
            <AudioPlayer 
              title={storyData.title} 
              introduction={storyData.introduction} 
              paragraphs={storyData.body} 
            />

            {/* Introduction paragraph */}
            <blockquote className={`border-l-4 border-emerald-500 pl-4 py-1.5 my-4 bg-emerald-50/20 text-emerald-950 font-medium text-base md:text-lg leading-relaxed ${isRtl ? 'border-l-0 border-r-4 pl-0 pr-4 text-right' : 'text-left'}`} id="story-block-introduction">
              {storyData.introduction}
            </blockquote>

            {/* Paragraph sections */}
            <div className={`space-y-4 text-gray-800 font-sans text-base md:text-lg leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`} id="story-paragraphs-stack">
              {storyData.body.map((pText, i) => (
                <p key={i} className="indent-2" id={`para-${i}`}>{pText}</p>
              ))}
            </div>
          </div>
        </div>

        {/* EDUCATIONAL SCROLL & INSIGHTS CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7" id="lessons-and-reflections-deck">
          {/* Moral Lessons */}
          <div className="bg-amber-50/70 border border-amber-200/65 rounded-3xl p-6 shadow-xs relative overflow-hidden" id="moral-lessons-block">
            <div className="absolute top-0 right-0 p-4 text-amber-200/30">
              <Lightbulb size={40} />
            </div>
            <div className={`flex items-center gap-2 mb-3.5 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`} id="moral-lessons-title-bar">
              <span className="bg-amber-100 p-2 rounded-xl text-amber-700">
                <Sparkles size={18} />
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-amber-950 font-sans">
                {t('moral_lessons')}
              </h3>
            </div>
            <ul className="space-y-3.5" id="moral-lessons-list">
              {storyData.lessons.map((lesson, index) => (
                <li key={index} className={`flex items-start gap-2.5 text-amber-900 text-sm md:text-base leading-relaxed ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`} id={`moral-item-${index}`}>
                  <span className="h-5 w-5 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5" id={`moral-badge-${index}`}>
                    {index + 1}
                  </span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Let's Reflect Panel */}
          <div className="bg-sky-50/70 border border-sky-200/65 rounded-3xl p-6 shadow-xs relative overflow-hidden" id="reflection-questions-block">
            <div className="absolute top-0 right-0 p-4 text-sky-200/30">
              <HelpCircle size={40} />
            </div>
            <div className={`flex items-center gap-2 mb-3.5 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`} id="reflection-title-bar">
              <span className="bg-sky-100 p-2 rounded-xl text-sky-700">
                <HelpCircle size={18} />
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-sky-950 font-sans">
                {t('reflection_questions')}
              </h3>
            </div>
            <ul className="space-y-3.5" id="reflection-questions-list">
              {storyData.reflectionQuestions.map((q, qindex) => (
                <li key={qindex} className={`flex items-start gap-2.5 text-sky-900 text-sm md:text-base leading-relaxed ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`} id={`ref-item-${qindex}`}>
                  <span className="h-5 w-5 rounded-full bg-sky-200 text-sky-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5" id={`ref-badge-${qindex}`}>
                    ?
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PROPHETIC SUPPLIANT DUA: Beautiful Golden Calligraphic Boarder */}
        {storyData.dua && (
          <div className="bg-gradient-to-br from-yellow-50/70 to-amber-50/60 border-2 border-dashed border-amber-300 rounded-3xl p-6 shadow-sm relative overflow-hidden text-center" id="prophetic-dua-panel">
            <div className="absolute top-0 left-0 p-4 text-amber-200/35 pointer-events-none">
              <Compass size={40} />
            </div>
            <div className="absolute bottom-0 right-0 p-4 text-amber-200/35 pointer-events-none">
              <Star size={40} />
            </div>

            <div className="max-w-xl mx-auto space-y-4" id="dua-content-box">
              <div className="flex justify-center" id="dua-upper-icon">
                <span className="px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold tracking-widest font-sans uppercase">
                  ⭐ {t('original_dua')} ⭐
                </span>
              </div>

              {/* Large calligraphic original text */}
              <p className="text-xl md:text-2xl font-bold text-slate-900 leading-wider font-sans py-2 text-center" dir="rtl" id="dua-arabic-display">
                {storyData.dua.arabic}
              </p>

              {/* Translation transliteration */}
              <div className="space-y-2 text-sm text-slate-700" id="dua-trans-translations">
                <p className="font-sans italic text-amber-950 text-xs md:text-sm" id="dua-transliteration-box">
                  <strong>{t('dua_transliteration')}:</strong> {storyData.dua.transliteration}
                </p>
                <p className="font-sans text-slate-800 text-sm md:text-base leading-relaxed" id="dua-translation-box">
                  <strong>{t('dua_translation')}:</strong> "{storyData.dua.translation[language] || storyData.dua.translation['en']}"
                </p>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM PAGINATION CONTROLS */}
        <div className="flex items-center justify-between mt-8 border-t border-gray-150 pt-5" id="story-bottom-pagination">
          {prev ? (
            <button
              onClick={() => navigateTo(prev.id)}
              className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 rounded-full flex items-center gap-1.5 cursor-pointer transition-all"
              id="bottom-prev-picker"
            >
              <ArrowLeft size={14} className={isRtl ? "rotate-180" : ""} />
              <span>{prev.names[language] || prev.names['en']}</span>
            </button>
          ) : (
            <div className="text-xs text-gray-300 pointer-events-none">•</div>
          )}

          <button
            onClick={() => navigateTo(null)}
            className="text-xs font-extrabold font-sans text-gray-500 hover:text-emerald-700 underline underline-offset-4"
            id="bottom-back-home"
          >
            {t('back_to_stories')}
          </button>

          {next ? (
            <button
              onClick={() => navigateTo(next.id)}
              className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 rounded-full flex items-center gap-1.5 cursor-pointer transition-all"
              id="bottom-next-picker"
            >
              <span>{next.names[language] || next.names['en']}</span>
              <ArrowRight size={14} className={isRtl ? "rotate-180" : ""} />
            </button>
          ) : (
            <div className="text-xs text-gray-300 pointer-events-none">•</div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default StoryDisplay;
