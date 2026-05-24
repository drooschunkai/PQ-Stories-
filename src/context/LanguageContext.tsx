import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    app_title: "Quranic Stories",
    app_subtitle: "The Complete Prophet Collection for Children",
    all_prophets: "All Prophets",
    favorites: "My Favorites",
    completed: "Read / Completed",
    quick_quiz: "Interactive Quiz",
    story_counter: "Story {current} of {total}",
    moral_lessons: "Moral Lessons for Us",
    reflection_questions: "Let's Reflect & Tell!",
    original_dua: "Beautiful Supplication (Dua)",
    mark_completed: "Mark as Completed",
    completed_badge: "Completed",
    add_favorite: "Add to Favorites",
    remove_favorite: "Remove Favorite",
    next_story: "Next Prophet",
    prev_story: "Previous Prophet",
    play_audio: "Listen to Story (Voice)",
    pause_audio: "Pause Voice",
    stop_audio: "Stop Voice",
    voice_speed: "Speed",
    read_more: "Read Story",
    search_placeholder: "Search prophet by name...",
    your_progress: "Your Noble Progress",
    stories_completed: "Stories Completed",
    completion_rate: "Completion Rate",
    favorites_count: "Favorite Stories",
    no_favorites: "No favorites added yet! Tap the heart button on any story to save a favorite.",
    no_completed: "No stories completed yet! Read stories and click 'Mark as Completed' to track your learning journey.",
    moral_badge: "Lesson",
    dua_transliteration: "Transliteration",
    dua_translation: "Meaning",
    parent_guide: "Parent & Teacher Guide",
    parent_guide_sub: "Educational tips & activities",
    quiz_title: "Prophets Knowledge Quiz",
    quiz_intro: "Match your knowledge against Islamic history! Tap the correct answer below.",
    quiz_score: "Score",
    quiz_correct: "Alhamdulillah! Correct!",
    quiz_wrong: "Try again! Read the story to find the answer.",
    quiz_reset: "Restart Quiz",
    quiz_congrats: "Masha'Allah! You answered all questions correctly!",
    audio_unsupported: "Text-to-speech option is not fully supported in this browser, but you can read along!",
    arabic_spelling: "Arabic Name",
    prophet_title: "Title / Honorific",
    back_to_stories: "Back to All Stories",
    back_to_collection: "Back to Collection",
    reset_all_data: "Reset All Learned Data / Progress",
    playing_audio: "Narrating Story...",
    books_unlocked_of: "{completed} of {total} Books Unlocked",
    quiz_result_msg: "Congratulations! You scored {score} / {total} correct answers.",
    guide_title_1: "1. 📖 How to read these stories together",
    guide_desc_1: "To get the absolute best out of this complete Quranic collection, read one story per night before sleep together with your children. Let them select their preferred Prophet and admire their unique visual icons (e.g., the beautiful blue Ark of Noah or the golden crown of Sulayman).",
    guide_title_2: "2. 🗣️ The Reflection Questions Panel",
    guide_desc_2: "At the end of each narrative, we've designed interactive kids-parent questions. Spend 5 minutes discussing: \"How would you show patient smiles like Hazrat Ayyub?\" or \"How can we share toys fairly like Prophet Salih shared water?\". This builds critical thinking and core Islamic manners (Akhlaq).",
    guide_title_3: "3. 🧠 Real-time Progress Tracking",
    guide_desc_3: "Reward children for unlocking books! Each time they read, encourage them to tap the green \"Mark as Completed\" button. Watch the Progress Indicator and percentage rise in the home dashboard. There's also the interactive matching Quiz to test their knowledge.",
    guide_title_4: "4. ⚙️ Total Privacy & Offline Readiness",
    guide_desc_4: "This application is built 100% offline-first and privacy-focused. No personal statistics or names are collected or transmitted. All favorite bookmarks and unlocked stories are kept safely in your local device's browser memory (LocalStorage)."
  },
  ar: {
    app_title: "قصص الأنبياء للأطفال",
    app_subtitle: "المجموعة الكاملة لقصص الأنبياء من القرآن الكريم",
    all_prophets: "جميع الأنبياء",
    favorites: "قصصي المفضلة",
    completed: "القصص المقروءة",
    quick_quiz: "مسابقة تفاعلية",
    story_counter: "القصة {current} من {total}",
    moral_lessons: "الدروس المستفادة والعبر",
    reflection_questions: "لنتأمل ونتحدث معاً!",
    original_dua: "الدعاء المبارك للمرسل",
    mark_completed: "تمت القراءة بنجاح",
    completed_badge: "مكتمل",
    add_favorite: "إضافة للمفضلة",
    remove_favorite: "حذف من المفضلة",
    next_story: "النبي التالي",
    prev_story: "النبي السابق",
    play_audio: "استمع للقصة (صوت)",
    pause_audio: "إيقاف مؤقت للقصة",
    stop_audio: "إيقاف الصوت",
    voice_speed: "سرعة الصوت",
    read_more: "اقرأ القصة",
    search_placeholder: "ابحث عن النبي بالاسم...",
    your_progress: "مستوى تقدمك المبارك",
    stories_completed: "القصص المنجزة",
    completion_rate: "نسبة الإنجاز",
    favorites_count: "القصص المفضلة",
    no_favorites: "لم تقم بإضافة قصص للمفضلة بعد! انقر على رمز القلب في أي قصة لحفظها.",
    no_completed: "لم تقرأ أي قصة بعد! اقرأ القصص وانقر على زر 'تمت القراءة' لتسجيل تقدمك في رحلة التعلم.",
    moral_badge: "العظة",
    dua_transliteration: "طريقة النطق باللاتينية",
    dua_translation: "معنى الدعاء",
    parent_guide: "دليل الآباء والمعلمين",
    parent_guide_sub: "إرشادات تعليمية وأنشطة للأطفال",
    quiz_title: "مسابقة معلومات الأنبياء",
    quiz_intro: "اختبر معلوماتك من قصص القرآن العظيم! انقر على الإجابة الصحيحة.",
    quiz_score: "النقاط",
    quiz_correct: "الحمد لله! إجابة صحيحة!",
    quiz_wrong: "حاول مجدداً! اقرأ القصة جيداً لتجد الإجابة الصحيحة.",
    quiz_reset: "إعادة المسابقة",
    quiz_congrats: "ما شاء الله! لقد أجبت على جميع الأسئلة بشكل صحيح!",
    audio_unsupported: "ميزة قراءة الصوت غير مدعومة بالكامل في هذا المتصفح، ولكن يمكنك مواصلة القراءة بكل يسر!",
    arabic_spelling: "الاسم بالعربية",
    prophet_title: "اللقب",
    back_to_stories: "العودة لجميع القصص",
    back_to_collection: "العودة للمجموعة",
    reset_all_data: "إعادة ضبط كافة البيانات والتقدم",
    playing_audio: "جاري قراءة القصة...",
    books_unlocked_of: "تم فتح {completed} من {total} كتب بالأبواب",
    quiz_result_msg: "تهانينا! لقد حصلت على {score} من {total} من الإجابات الصحيحة.",
    guide_title_1: "1. 📖 طريقة قراءة هذه القصص معاً",
    guide_desc_1: "للحصول على أفضل فائدة من هذه المجموعة القرآنية الكاملة، اقرأ قصة واحدة كل ليلة قبل النوم مع أطفالك. دعهم يختارون نبيهم المفضل ليتأملوا الشارات والرموز البصرية الفريدة (مثل سفينة نوح الزرقاء الجميلة أو تاج سليمان الذهبي).",
    guide_title_2: "2. 🗣️ منصة أسئلة التأمل والتدبر",
    guide_desc_2: "في نهاية كل قصة، قمنا بتصميم أسئلة تفاعلية للأطفال والآباء. اقضوا 5 دقائق في التناقش: \"كيف يمكنك إظهار الابتسامة والصبر مثل نبي الله أيوب؟\" أو \"كيف يمكننا مشاركة الألعاب بالعدل مثل ناقة صالح؟\". هذا يبني التفكير الإيجابي والأخلاق الإسلامية الفاضلة.",
    guide_title_3: "3. 🧠 متابعة التقدم في الوقت الفعلي",
    guide_desc_3: "كافئ الأطفال على إكمال قراءة الكتب! في كل مرة يقرؤون فيها، شجعهم على الضغط على زر \"تمت القراءة بنجاح\" الأخضر. شاهدوا مؤشر التقدم والنسبة المئوية يرتفعان في الصفحة الرئيسية. هناك أيضاً المسابقة التفاعلية لاختبار معلوماتهم.",
    guide_title_4: "4. ⚙️ الخصوصية الكاملة واستعداد عدم الاتصال",
    guide_desc_4: "هذا التطبيق مبني بنسبة 100% ليعمل دون الحاجة للاتصال بالإنترنت ومطوّر مع مراعاة كاملة للخصوصية. لا يتم جمع أو نقل أي إحصاءات شخصية أو أسماء. يتم حفظ جميع العلامات المرجعية والتقدم بأمان في ذاكرة المتصفح المحلية (LocalStorage)."
  },
  sv: {
    app_title: "Profetberättelser",
    app_subtitle: "Den kompletta samlingen om profeterna i Koranen",
    all_prophets: "Alla profeter",
    favorites: "Mina favoriter",
    completed: "Läst / Slutfört",
    quick_quiz: "Interaktivt quiz",
    story_counter: "Berättelse {current} av {total}",
    moral_lessons: "Moraliska lärdomar för oss",
    reflection_questions: "Låt oss reflektera och berätta!",
    original_dua: "Vacker bön (Dua)",
    mark_completed: "Markera som läst",
    completed_badge: "Slutförd",
    add_favorite: "Lägg till i favoriter",
    remove_favorite: "Ta bort favorit",
    next_story: "Nästa profet",
    prev_story: "Föregående profet",
    play_audio: "Lyssna på berättelsen (Röst)",
    pause_audio: "Pausa röst",
    stop_audio: "Stoppa röst",
    voice_speed: "Hastighet",
    read_more: "Läs berättelsen",
    search_placeholder: "Sök profet efter namn...",
    your_progress: "Dina fina framsteg",
    stories_completed: "Slutförda berättelser",
    completion_rate: "Procent slutförda",
    favorites_count: "Favoritberättelser",
    no_favorites: "Inga favoriter tillagda än! Tryck på hjärtat på valfri berättelse för att spara en favorit.",
    no_completed: "Inga berättelser lästa än! Läs berättelser och klicka på 'Markera som läst' för att följa dina framsteg.",
    moral_badge: "Lärdom",
    dua_transliteration: "Transkription",
    dua_translation: "Betydelse",
    parent_guide: "Föräldra- & lärarguide",
    parent_guide_sub: "Pedagogiska tips och hemma-aktiviteter",
    quiz_title: "Profeternas kunskapsquiz",
    quiz_intro: "Testa dina kunskaper om islamisk historia! Klicka på rätt svar nedan.",
    quiz_score: "Poäng",
    quiz_correct: "Alhamdulillah! Rätt svar!",
    quiz_wrong: "Försök igen! Läs berättelsen för att hitta svaret.",
    quiz_reset: "Starta om quiz",
    quiz_congrats: "Masha'Allah! Du svarade rätt på alla frågor!",
    audio_unsupported: "Text-till-tal stöds inte fullt ut i denna webbläsare, men du kan följa med genom att läsa!",
    arabic_spelling: "Arabiskt namn",
    prophet_title: "Titel / Hedersnamn",
    back_to_stories: "Tillbaka till alla berättelser",
    back_to_collection: "Tillbaka till samlingen",
    reset_all_data: "Återställ all inlärd data och framsteg",
    playing_audio: "Berättelsen läses upp...",
    books_unlocked_of: "{completed} av {total} böcker upplåsta",
    quiz_result_msg: "Grattis! Du fick {score} av {total} rätta svar.",
    guide_title_1: "1. 📖 Hur man läser dessa berättelser tillsammans",
    guide_desc_1: "För att få ut det absolut bästa av denna kompletta koraniska samling, läs en berättelse varje kväll före läggdags tillsammans med dina barn. Låt dem välja sin favoritprofet och beundra deras unika symboler (t.ex. Noas vackra blå ark eller Sulaymans gyllene krona).",
    guide_title_2: "2. 🗣️ Panel för reflektionsfrågor",
    guide_desc_2: "I slutet av varje berättelse har vi skapat interaktiva frågor för barn och föräldrar. Ägna 5 minuter åt att diskutera: \"Hur kan du visa tålmodiga leenden som Hazrat Ayyub?\" eller \"Hur kan vi dela leksaker rättvist som profeten Salih delade vatten?\". Detta bygger upp ett kritiskt tänkande och god islamisk karaktär (Akhlaq).",
    guide_title_3: "3. 🧠 Framstegsmätning i realtid",
    guide_desc_3: "Belöna barnen när de läser klart böckerna! Varje gång de läst färdigt, uppmuntra dem att klicka på \"Markera som läst\". Se framstegsmätaren och procenten stiga på startsidan. Det finns också ett interaktivt quiz för att testa deras kunskaper.",
    guide_title_4: "4. ⚙️ Fullständig integritet och offline-kapacitet",
    guide_desc_4: "Denna applikation är byggd 100% offline-först och med fokus på integritet. Inga personliga uppgifter eller namn samlas in eller överförs. Alla favoritbokmärken och lästa berättelser sparas säkert i din enhets lokala webbläsxminne (LocalStorage)."
  },
  de: {
    app_title: "Prophetengeschichten",
    app_subtitle: "Die komplette Sammlung der Propheten des Korans für Kinder",
    all_prophets: "Alle Propheten",
    favorites: "Meine Favoriten",
    completed: "Gelesen / Beendet",
    quick_quiz: "Interaktives Quiz",
    story_counter: "Geschichte {current} von {total}",
    moral_lessons: "Moralische Lektionen für uns",
    reflection_questions: "Lass uns nachdenken & erzählen!",
    original_dua: "Wunderschönes Bittgebet (Dua)",
    mark_completed: "Als gelesen markieren",
    completed_badge: "Gelesen",
    add_favorite: "Zu Favoriten hinzufügen",
    remove_favorite: "Aus Favoriten entfernen",
    next_story: "Nächster Prophet",
    prev_story: "Vorheriger Prophet",
    play_audio: "Geschichte anhören (Stimme)",
    pause_audio: "Stimme pausieren",
    stop_audio: "Stimme stoppen",
    voice_speed: "Geschwindigkeit",
    read_more: "Geschichte lesen",
    search_placeholder: "Suche Prophet nach Namen...",
    your_progress: "Dein edler Fortschritt",
    stories_completed: "Gelesene Geschichten",
    completion_rate: "Fortschrittsrate",
    favorites_count: "Lieblingsgeschichten",
    no_favorites: "Noch keine Favoriten hinzugefügt! Klicke auf das Herz auf einer Geschichte, um sie zu speichern.",
    no_completed: "Noch keine Geschichten gelesen! Lies die Geschichten und klicke auf 'Als gelesen markieren' für das Fortschritts-Tracking.",
    moral_badge: "Lektion",
    dua_transliteration: "Transliteration",
    dua_translation: "Bedeutung",
    parent_guide: "Anleitung für Eltern & Lehrer",
    parent_guide_sub: "Pädagogische Tipps & Aktivitäten",
    quiz_title: "Das Propheten-Quiz",
    quiz_intro: "Teste dein Wissen über die Propheten! Tippe auf die richtige Antwort.",
    quiz_score: "Punkte",
    quiz_correct: "Alhamdulillah! Richtig!",
    quiz_wrong: "Versuch es nochmal! Lies die Geschichte, um die Antwort zu finden.",
    quiz_reset: "Quiz neu starten",
    quiz_congrats: "Masha'Allah! Du hast alle Fragen richtig beantwortet!",
    audio_unsupported: "Text-zu-Sprache wird von diesem Browser nicht vollständig unterstützt, aber du kannst prima mitlesen!",
    arabic_spelling: "Arabischer Name",
    prophet_title: "Ehrentitel",
    back_to_stories: "Zurück zu allen Geschichten",
    back_to_collection: "Zurück zur Sammlung",
    reset_all_data: "Alle gelernten Daten / Fortschritte zurücksetzen",
    playing_audio: "Geschichte wird vorgelesen...",
    books_unlocked_of: "{completed} von {total} Büchern freigeschaltet",
    quiz_result_msg: "Glückwunsch! Du hast {score} von {total} richtigen Antworten erzielt.",
    guide_title_1: "1. 📖 Wie man diese Geschichten gemeinsam liest",
    guide_desc_1: "Um das Beste aus dieser vollständigen quranischen Sammlung herauszuholen, lesen Sie jeden Abend vor dem Schlafengehen eine Geschichte gemeinsam mit Ihren Kindern. Lassen Sie sie ihren Lieblingspropheten auswählen und die einzigartigen visuellen Symbole bewundern (z. B. die schöne blaue Arche Noahs oder die goldene Krone Sulaymans).",
    guide_title_2: "2. 🗣️ Das Panel für Reflexionsfragen",
    guide_desc_2: "Am Ende jeder Geschichte haben wir interaktive Fragen für Kinder und Eltern vorbereitet. Nehmen Sie sich 5 Minuten Zeit, um zu besprechen: \"Wie würdest du geduldig lächeln wie Hazrat Ayyub?\" oder \"Wie können wir Spielzeuge so gerecht teilen, wie Prophet Salih das Wasser geteilt hat?\". Dies fördert kritisches Denken und gute islamische Umgangsformen (Akhlaq).",
    guide_title_3: "3. 🧠 Fortschritts-Tracking in Echtzeit",
    guide_desc_3: "Belohnen Sie die Kinder für das Lesen der Bücher! Ermutigen Sie sie jedes Mal, wenn sie fertig sind, auf die grüne Schaltfläche \"Als gelesen markieren\" zu tippen. Beobachten Sie, wie die Fortschrittsanzeige auf dem Dashboard steigt. Es gibt auch das interaktive Quiz, um ihr Wissen zu testen.",
    guide_title_4: "4. ⚙️ Absolute Privatsphäre & Offline-Bereitschaft",
    guide_desc_4: "Diese Anwendung ist zu 100 % offline-first und auf Privatsphäre ausgerichtet. Es werden keine persönlichen Statistiken oder Namen gesammelt oder übertragen. Alle Lieblingsbuchzeichen und gelesenen Geschichten werden sicher im lokalen Speicher Ihres Browsers (LocalStorage) aufbewahrt."
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('selectedLanguage');
    if (saved === 'en' || saved === 'ar' || saved === 'sv' || saved === 'de') {
      return saved as Language;
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('selectedLanguage', lang);
  };

  const t = (key: string): string => {
    const dict = translations[language] || translations['en'];
    return dict[key] || translations['en'][key] || key;
  };

  const isRtl = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
