import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Globe, Check } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, isRtl } = useLanguage();

  const options: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🕋' },
    { code: 'sv', label: 'Svenska', flag: '🇸🇪' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
  ];

  return (
    <div className={`flex items-center gap-1 p-1 bg-white/85 shadow-sm border border-emerald-100 rounded-full select-none ${isRtl ? 'flex-row-reverse' : 'flex-row'}`} id="language-selector-container">
      <div className="flex items-center justify-center p-1.5 text-emerald-600">
        <Globe size={16} id="language-globe-icon" />
      </div>
      <div className="flex items-center gap-1 flex-wrap" id="language-options-list">
        {options.map((opt) => {
          const isSelected = language === opt.code;
          return (
            <button
              key={opt.code}
              id={`lang-btn-${opt.code}`}
              onClick={() => setLanguage(opt.code)}
              className={`flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 text-4xs xs:text-xs sm:text-sm font-bold transition-all duration-300 rounded-full cursor-pointer
                ${isSelected 
                  ? 'bg-emerald-600 text-white shadow-sm scale-102' 
                  : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
            >
              <span className="text-xs sm:text-base" id={`flag-${opt.code}`}>{opt.flag}</span>
              <span className="text-[11px] sm:text-xs md:text-sm" id={`label-${opt.code}`}>{opt.label}</span>
              {isSelected && <Check size={10} className="ml-0.5 shrink-0" id={`check-${opt.code}`} />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default LanguageSelector;
