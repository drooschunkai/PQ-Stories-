import { LanguageProvider } from './context/LanguageContext';
import { AppProvider, useAppContext } from './context/AppContext';
import { HomePage } from './components/HomePage';
import { StoryDisplay } from './components/StoryDisplay';
import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const { activeProphetId } = useAppContext();

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800 antialiased font-sans flex flex-col justify-between selection:bg-emerald-100 selection:text-emerald-950">
      {/* Dynamic transition layout */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProphetId ? 'story' : 'home'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          {activeProphetId ? <StoryDisplay /> : <HomePage />}
        </motion.div>
      </AnimatePresence>

      {/* Humble Footer */}
      <footer className="w-full text-center py-8 border-t border-gray-150 text-xs text-gray-400 font-sans tracking-wide">
        <p>Made with ❤️ for Muslim Families Worldwide</p>
        <p className="mt-1">
          "And indeed, in their stories, there is a lesson for men of understanding." - Quran 12:111
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </LanguageProvider>
  );
}

