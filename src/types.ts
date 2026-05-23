export type Language = 'en' | 'ar' | 'sv' | 'de';

export interface MeaningfulDua {
  arabic: string;
  transliteration: string;
  translation: {
    en: string;
    ar: string;
    sv: string;
    de: string;
  };
}

export interface ProphetStoryContent {
  title: string;
  introduction: string;
  body: string[]; // rich paragraphs
  lessons: string[];
  reflectionQuestions: string[];
  dua?: MeaningfulDua;
}

export interface Prophet {
  id: string; // e.g., 'adam', 'idris', ...
  index: number; // 1 to 25
  arabicName: string;
  iconName: string; // Lucide icon lookup name
  colorTheme: {
    bg: string;
    text: string;
    primary: string;
    border: string;
    accent: string;
    gradient: string;
  };
  names: {
    en: string;
    ar: string;
    sv: string;
    de: string;
  };
  titles: {
    en: string;
    ar: string;
    sv: string;
    de: string;
  };
  stories: {
    en: ProphetStoryContent;
    ar: ProphetStoryContent;
    sv: ProphetStoryContent;
    de: ProphetStoryContent;
  };
}

export interface UserProgress {
  favorites: string[]; // Prophet IDs
  completed: string[]; // Prophet IDs
  selectedLanguage: Language;
}
