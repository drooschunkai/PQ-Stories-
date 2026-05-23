import { Prophet } from '../types';

export const prophetsPart1: Prophet[] = [
  {
    id: "adam",
    index: 1,
    arabicName: "آدم عليه السلام",
    iconName: "Trees",
    colorTheme: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      primary: "bg-emerald-600 hover:bg-emerald-700",
      border: "border-emerald-200",
      accent: "text-emerald-600",
      gradient: "from-emerald-500 to-teal-500"
    },
    names: { en: "Adam", ar: "آدم", sv: "Adam", de: "Adam" },
    titles: {
      en: "The Father of Humanity",
      ar: "أبو البشرية",
      sv: "Mänsklighetens fader",
      de: "Der Vater der Menschheit"
    },
    stories: {
      en: {
        title: "The Creation of Adam",
        introduction: "Allah created Prophet Adam from clay and gave him a great soul, teaching him the names of all things.",
        body: [
          "Allah created the first human being, Adam (peace be upon him), from the earth's clay. Allah taught him the names of all beautiful things—like stars, trees, and sea. Angels were asked to respect Adam, and he was given a home in the beautiful garden of Jannah with his wife, Hawa.",
          "Satan felt jealous and whispered bad ideas to them. When they made a mistake, they immediately realized it and turned back to Allah. They prayed: 'Our Lord! We have wronged ourselves, and if You forgive us not, we shall surely be among the losers.' Allah, the Most Merciful, forgave them and sent them to Earth to do good deeds."
        ],
        lessons: [
          "Always turn back to Allah and say 'Sorry' when we make a mistake.",
          "Allah is the Most Merciful and loves to forgive His servants."
        ],
        reflectionQuestions: [
          "Why did Satan feel jealous of Adam?",
          "What did Adam and Hawa do when they made a mistake?"
        ],
        dua: {
          arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
          transliteration: "Rabbana thalamna anfusana wa-in lam taghfir lana watarhamna lanakoonanna minal-khasireen",
          translation: {
            en: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
            ar: "ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين",
            sv: "Vår Herre, vi har gjort oss själva orätt, och om Du inte förlåter oss och förbarmar Dig över oss, kommer vi helt säkert att gå förlorade.",
            de: "Unser Herr, wir haben uns selbst Unrecht zugefügt, und wenn Du uns nicht vergibst und Dich unser erbarmst, werden wir ganz sicher zu den Verlierern gehören."
          }
        }
      },
      ar: {
        title: "خلق آدم عليه السلام",
        introduction: "خلق الله نبينا آدم من طين ونفخ فيه من روحه، وعلمه أسماء كل الأشياء كرمزة للعقل والعلم.",
        body: [
          "خلق الله العلي القدير أول إنسان وهو آدم عليه السلام من طين الأرض وعلمه أسماء كل الكائنات الجميلة كالنجوم والبحار والأشجار. ثم أمر الملائكة بالسجود له تقديراً، وسكن مع زوجته حواء في الجنة الجميلة.",
          "شعر الشيطان بالغيرة الشديدة ووسوس لهما ليخطئا، وعندما ارتكبا الهفوة سارعا بالندم والاستغفار والدعاء بكل خشوع لله. فبسط الله تعالى لهما واسع رحمته وغفر لهما، وجعلهما يبدآن حياة السعي وعمل الخير على الأرض."
        ],
        lessons: [
          "الاعتراف بالخطأ توبة فضيلة، والله يغفر دوماً للتائبين.",
          "العلم ميزة عظيمة كرم الله بها الإنسان."
        ],
        reflectionQuestions: [
          "لماذا وسوس الشيطان لآدم وحواء؟",
          "كيف نتصرف عندما نقع في خطأ ما بغير قصد؟"
        ],
        dua: {
          arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
          transliteration: "Rabbana thalamna anfusana wa-in lam taghfir lana watarhamna lanakoonanna minal-khasireen",
          translation: {
            en: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
            ar: "ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين",
            sv: "Vår Herre, vi har gjort oss själva orätt, och om Du inte förlåter oss och förbarmar Dig över oss, kommer vi helt säkert att gå förlorade.",
            de: "Unser Herr, wir haben uns selbst Unrecht zugefügt, und wenn Du uns nicht vergibst und Dich unser erbarmst, werden wir ganz sicher zu den Verlierern gehören."
          }
        }
      },
      sv: {
        title: "Skapelsen av Adam",
        introduction: "Allah skapade profeten Adam från lera och gav honom en själ och lärde honom namnen på alla ting.",
        body: [
          "Allah skapade den allra första människan, Adam (frid vare med honom). Allah lärde honom namnen på alla vackra ting i universum—såsom stjärnor, träd och hav. Änglarna ombads visa respekt för Adam, och han fick bo i den vackra trädgården Jannah med sin fru Hawa.",
          "Satan blev avundsjuk och viskade frestelser till dem. När de gjorde ett misstag vände de sig omedelbart till Allah i bön. Allah, den mest Barmhärtige, förlät dem och sände dem till jorden för att sprida godhet och bygga fungerande samhällen."
        ],
        lessons: [
          "Vänd dig alltid till Allah och säg förlåt när du gör ett misstag.",
          "Allah är fylld av barmhärtighet och älskar att förlåta oss."
        ],
        reflectionQuestions: [
          "Varför var Satan avundsjuk på Adam?",
          "Vad lärde Adam oss om att göra misstag?"
        ],
        dua: {
          arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
          transliteration: "Rabbana thalamna anfusana wa-in lam taghfir lana watarhamna lanakoonanna minal-khasireen",
          translation: {
            en: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
            ar: "ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين",
            sv: "Vår Herre, vi har gjort oss själva orätt, och om Du inte förlåter oss och förbarmar Dig över oss, kommer vi helt säkert att gå förlorade.",
            de: "Unser Herr, wir haben uns selbst Unrecht zugefügt, und wenn Du uns nicht vergibst und Dich unser erbarmst, werden wir ganz sicher zu den Verlierern gehören."
          }
        }
      },
      de: {
        title: "Die Schöpfung Adams",
        introduction: "Allah erschuf den Propheten Adam aus Lehm und blies ihm eine edle Seele ein. Er lehrte ihn alle Namen.",
        body: [
          "Allah erschuf den ersten Menschen, Adam (Friede sei mit ihm), aus Lehm der Erde. Allah brachte ihm die Bezeichnungen aller schönen Dinge bei. Auf Allahs Geheiß bezog Adam mit seiner Frau Hawa das herrliche Paradies.",
          "Satan war neidisch und verführte sie zu einem Fehler. Als sie diesen Fehler begingen, baten sie sofort aufrichtig um Vergebung. Allah, der Allbarmherzige, vergab ihnen in Seiner unendlichen Liebe und sandte sie auf die Erde, um Gutes zu tun."
        ],
        lessons: [
          "Kehre immer reumütig zu Allah zurück und bitte um Entschuldigung.",
          "Allah ist der Allbarmherzige und vergibt Seinen Dienern gern."
        ],
        reflectionQuestions: [
          "Warum war Satan eifersüchtig auf Adam?",
          "Welches Gebet sprachen Adam und Hawa nach ihrem Fehler?"
        ],
        dua: {
          arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
          transliteration: "Rabbana thalamna anfusana wa-in lam taghfir lana watarhamna lanakoonanna minal-khasireen",
          translation: {
            en: "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
            ar: "ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين",
            sv: "Vår Herre, vi har gjort oss själva orätt, och om Du inte förlåter oss och förbarmar Dig över oss, kommer vi helt säkert att gå förlorade.",
            de: "Unser Herr, wir haben uns selbst Unrecht zugefügt, und wenn Du uns nicht vergibst und Dich unser erbarmst, werden wir ganz sicher zu den Verlierern gehören."
          }
        }
      }
    }
  },
  {
    id: "idris",
    index: 2,
    arabicName: "إدريس عليه السلام",
    iconName: "PenTool",
    colorTheme: {
      bg: "bg-teal-50",
      text: "text-teal-900",
      primary: "bg-teal-600 hover:bg-teal-700",
      border: "border-teal-200",
      accent: "text-teal-600",
      gradient: "from-teal-500 to-cyan-500"
    },
    names: { en: "Idris", ar: "إدريس", sv: "Idris", de: "Idris" },
    titles: {
      en: "The Truthful Penman",
      ar: "شرف القلم والصدق",
      sv: "Den sannfärdige skribenten",
      de: "Der wahrhaftige Schreiber"
    },
    stories: {
      en: {
        title: "The Scholar Prophet",
        introduction: "Prophet Idris was renowned for his wisdom, being the first to write with a pen and teach people tailoring.",
        body: [
          "Prophet Idris (peace be upon him) was an extremely wise and patient man. He loved learning and thinking about Allah's grand universe. Tradition tells us he was the very first person to write with a pen, allowing people to record knowledge.",
          "He was also the first to tailor clothes from cotton, replacing heavy animal skins. He advised people: 'Do not be lazy, spend your time remembering Allah, and always speak absolute truth.'"
        ],
        lessons: [
          "Learning, writing, and school are precious gifts from Allah.",
          "Be clean, wear tidy clothes, and work hard with your hands."
        ],
        reflectionQuestions: [
          "What major tool was Idris the first to write with?",
          "How can we use our time wisely outside of sleep and playing?"
        ]
      },
      ar: {
        title: "النبي المعلم شرف العلم",
        introduction: "اشتهر نبي الله إدريس بالحكمة والصدق، وهو أول من خط بالقلم وعلم الناس الخياطة والكتابة.",
        body: [
          "كان نبي الله إدريس عليه السلام رجلاً حكيماً صابراً محباً للعلم والتفكر في خلق السماوات والأرض. وتروي السير أنه كان أول من مسك القلم ودوّن العلوم ليتعلمها الناس.",
          "كما كان أول من خاط الثياب من القطن بدلاً من جلود الحيوانات القاسية. وكان ينصح قومه: 'لا تتكاسلوا، واشغلوا أوقاتكم بذكر الله الكريم وقل الجمال والصدق للناس جميعاً'."
        ],
        lessons: [
          "الكتابة والتعلم والقراءة نعم جزيلة وهبها الله لنا.",
          "صنع الأشياء المفيدة باليد والعمل الصالح يرضي الله."
        ],
        reflectionQuestions: [
          "بماذا يتميز نبي الله إدريس عليه السلام؟",
          "كيف نستثمر أوقاتنا في تعلم ما يفيدنا ويفيد الأمة؟"
        ]
      },
      sv: {
        title: "Den lärde profeten",
        introduction: "Profeten Idris var känd för sin visdom och sägs vara den förste som skrev med en penna och lärde folk att sy kläder.",
        body: [
          "Profeten Idris (frid vare med honom) var en mycket klok och tålmodig person. Han älskade att lära sig nya saker och begrunda Guds fantastiska skapelse. Historien berättar att han var den allra första människan som skrev med en skarp penna.",
          "Han var också den förste som sydde kläder av bomullstyg istället för att bära tunga djurskinn. Han gav rådet: 'Var aldrig lat, fyll din tid med att minnas Allah och tala alltid sanning.'"
        ],
        lessons: [
          "Dygden i att lära sig läsa och skriva är mycket stor hos Allah.",
          "Flitigt arbete med händerna är uppskattat och ger välsignelse."
        ],
        reflectionQuestions: [
          "Vilket redskap var Idris bäst på att använda?",
          "Varför är det viktigt att vi inte är lata i skolan?"
        ]
      },
      de: {
        title: "Der gelehrte Prophet",
        introduction: "Prophet Idris war berühmt für seine Weisheit. Er nutzte als Erster die Feder und lehrte die Menschen das Schneidern.",
        body: [
          "Prophet Idris (Friede sei mit ihm) war ein außergewöhnlich kluger und gottesfürchtiger Prophet. Er gilt als der Erste, der mit der Feder schrieb und Wissen aufzeichnete.",
          "Er brachte den Menschen auch bei, wie man saubere Kleidung zuschneidet und näht. Er ermahnte sie: 'Verbringt eure Zeit sinnvoll im Gedenken an Allah und seid fleißig.'"
        ],
        lessons: [
          "Schreiben und Lernen sind Wege der Weisheit, die Allah liebt.",
          "Ehrliche Arbeit mit den eigenen Händen ist gesegnet."
        ],
        reflectionQuestions: [
          "Welche Erfindungen werden mit Prophet Idris verbunden?",
          "Wie können wir anderen Menschen durch unser Wissen helfen?"
        ]
      }
    }
  },
  {
    id: "nuh",
    index: 3,
    arabicName: "نوح عليه السلام",
    iconName: "Ship",
    colorTheme: {
      bg: "bg-blue-50",
      text: "text-blue-900",
      primary: "bg-blue-600 hover:bg-blue-700",
      border: "border-blue-200",
      accent: "text-blue-600",
      gradient: "from-blue-500 to-indigo-500"
    },
    names: { en: "Nuh", ar: "نوح", sv: "Nuh", de: "Nuh" },
    titles: {
      en: "The Great Ark Builder",
      ar: "بناء سفينة النجاة",
      sv: "Den stora arkbyggaren",
      de: "Der Erbauer der Arche"
    },
    stories: {
      en: {
        title: "The Ark of Noah",
        introduction: "Prophet Nuh built a gigantic wooden ark on dry land by Allah's command, saving his followers and pairs of all animals.",
        body: [
          "Prophet Nuh taught his people to worship only Allah for many hundreds of years, but most laughed at him. Undeterred, he kept sharing values of kindness. Through revelation, Allah asked him to construct a gigantic wooden Ark on hills and collect a pair of every animal.",
          "People joked seeing a ship being built with no river nearby. But when the rains poured down, the believers and beautiful land animals were completely safe on the floating Ark. They praised Allah for saving humanity from the massive waves."
        ],
        lessons: [
          "Trust Allah completely, even when others don't understand you.",
          "Patience and persistence eventually bring peace and victory."
        ],
        reflectionQuestions: [
          "Why did Nuh build a ship on dry land?",
          "How can we show patience when others laugh at our good habits?"
        ]
      },
      ar: {
        title: "سفينة نوح العظيمة",
        introduction: "صنع نبي الله نوح سفينة خشبية ضخمة بأمر من الله على أرض جافة، لينقذ المؤمنين وأزواجاً من المخلوقات.",
        body: [
          "دعا نبي الله نوح عليه السلام قومه إلى عبادة الله الواحد الصمد مئات السنين، فاستهزأ به الكثيرون. وبأمر حكيم من الله، بدأ ببناء سفينة ضخمة في مكان بعيد عن البحار وجمع فيها زوجين من كل حيوان طائر أو حشرة.",
          "كان الناس يسخرون من السفينة وسط الرمال الجافة. ولكن حين جاء الطوفان العارم وهطل المطر كالأنهار، نجى نبي الله وكل المؤمنين وحيواناتهم فوق المياه بسلام."
        ],
        lessons: [
          "الثقة المطلقة بالله هي سفينة النجاة من كل كرب.",
          "احترام ورعاية الحيوانات ركن عظيم في ديننا الحنيف."
        ],
        reflectionQuestions: [
          "ماذا فعل نبي الله نوح عندما كذبه قومه طويلاً؟",
          "ما هي الدروس التي نتعلمها من رعاية الحيوانات في السفينة؟"
        ]
      },
      sv: {
        title: "Noas ark",
        introduction: "Profeten Nuh byggde en gigantisk träark på torra land efter Guds order, vilket räddade de troende och alla djurarter.",
        body: [
          "Profeten Nuh predikade om Allahs godhet i många år, men de flesta lyssnade inte. Allah bad honom då att bygga en gigantisk träbåt på en kulle och samla ett par av varje djurtyp på jorden.",
          "Icke-troende skrattade åt att en hel båt byggdes där det inte fanns något hav. Men när jätteregnet kom flöt arken tryggt och räddade alla djuren och de visa människorna ombord."
        ],
        lessons: [
          "Lita alltid på Gud, även när andra inte förstår dina goda gärningar.",
          "Att skydda naturen och djuren är ett viktigt ansvar."
        ],
        reflectionQuestions: [
          "Varför skrattade människorna när de såg båten?",
          "Vilka djur skulle du vilja rädda först om du var på arken?"
        ]
      },
      de: {
        title: "Noahs große Arche",
        introduction: "Prophet Nuh baute auf Allahs Befehl hin eine riesige Arche auf trockenem Boden und rettete Mensch und Tier.",
        body: [
          "Prophet Nuh lud sein Volk geduldig Jahrhunderte zum Glauben ein, doch sie spotteten. Allah gebot ihm, eine Holz-Arche zu zimmern und von jedem Tier ein Paar an Bord zu holen.",
          "Als die Flut hereinbrach, rettete die schwimmende Arche alle Gläubigen und Tiere vor den Wellen. Sie dankten Allah für die Rettung."
        ],
        lessons: [
          "Vertraue Allahs Plänen, auch wenn andere dich nicht verstehen.",
          "Sei standhaft und verliere niemals die Hoffnung."
        ],
        reflectionQuestions: [
          "Warum bauten sie ein Schiff weit weg vom Ozean?",
          "Wie danken wir Allah, wenn wir vor Gefahren beschützt werden?"
        ]
      }
    }
  },
  {
    id: "hud",
    index: 4,
    arabicName: "هود عليه السلام",
    iconName: "Wind",
    colorTheme: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      primary: "bg-amber-600 hover:bg-amber-700",
      border: "border-amber-200",
      accent: "text-amber-600",
      gradient: "from-amber-500 to-yellow-500"
    },
    names: { en: "Hud", ar: "هود", sv: "Hud", de: "Hud" },
    titles: {
      en: "The Warner of 'Ad",
      ar: "ناصح عاد وقوتهم",
      sv: "Varnaren för 'Ad",
      de: "Der Warner des Volkes 'Ad"
    },
    stories: {
      en: {
        title: "The Wind Over 'Ad",
        introduction: "Prophet Hud was sent to teach the strong people of 'Ad, advising them to stay humble and appreciate their blessings.",
        body: [
          "Sent to the super-strong giant people of 'Ad, who carved mountains into huge mansions in dry oasis valleys. They grew proud, saying 'Who is stronger than us?'",
          "Prophet Hud (peace be upon him) pleaded with them to be humble, thank Allah for clean water and crops, and treat the weak with mercy. When they refused to change, a mighty cooling wind swept through, sparing only Hud and the kind-hearted believers."
        ],
        lessons: [
          "Strength and tall homes are gifts, never be proud or arrogant.",
          "Wealth and power are meant to help poor people, not bully them."
        ],
        reflectionQuestions: [
          "Why did the people of 'Ad think they were better than everyone?",
          "How can we stay humble when we win a school game or receive praise?"
        ]
      },
      ar: {
        title: "نبي التواضع والرياح الطيب",
        introduction: "بعث الله النبي هود إلى قوم 'عاد' الأقوياء ليدعوهم للتواضع والشكر لله على النعم الكبيرة.",
        body: [
          "أرسل الله نبينا هود عليه السلام إلى قوم عاد الذين بنوا بيوتاً شامخة في الجبال وبهرتهم قوتهم الجسدية الهائلة فتكبروا وقالوا في غرور: 'من أشد منا قوة؟'.",
          "نصحهم هود باللين واللطف وشكر الله الخالق واستخدام قوتهم في مساعدة الفقراء بدلاً من الظلم. وعندما أصروا على تعنتهم هبت رياح باردة شديدة ونجى الله هوداً وأتباعه الصالحين بسلام."
        ],
        lessons: [
          "التكبر عاقبته وخيمة، والحمد والشكر يحفظان النعم.",
          "القوة الحقيقية تكمن في الرفق بالضعيف ومساعدته."
        ],
        reflectionQuestions: [
          "كيف بنى قوم عاد بيوتهم؟",
          "كيف نشكر الله على جسمنا السليم وقوتنا؟"
        ]
      },
      sv: {
        title: "Vinden över 'Ad",
        introduction: "Profeten Hud skickades till det starka folket 'Ad för att lära dem att vara ödmjuka inför Guds gåvor.",
        body: [
          "Folket 'Ad var kända för sin fysiska styrka och de karvade ut enorma pelare i sanddalarna. De blev stolta och trodde att ingen kunde besegra dem.",
          "Profeten Hud (frid vare med honom) bad dem envist att sluta skryta, tacka Gud för vattnet och hjälpa de svaga. De lyssnade inte, och en svalkande men extremt kraftig storm nollställde staden, medan Hud räddades tack vare sin vänlighet."
        ],
        lessons: [
          "Styrka och rikedom är gåvor att dela med sig av, skryt aldrig.",
          "Ödmjukhet värmer andras hjärtan."
        ],
        reflectionQuestions: [
          "Vad sa folket 'Ad när de blev högmodiga?",
          "Hur kan vi vara ödmjuka i vår vardag?"
        ]
      },
      de: {
        title: "Der Wind über 'Ad",
        introduction: "Prophet Hud spornte das riesenhafte Volk 'Ad an, bescheiden zu sein und Allah für fruchtbare Oasen zu danken.",
        body: [
          "Das Volk 'Ad besaß gigantische Gebäude und viel Macht. Sie wurden stolz und fragten herablassend: 'Wer hat mehr Kraft als wir?'",
          "Prophet Hud rief sie zur Vernunft auf: Gutes zu tun und Gier abzulegen. Schließlich blies ein stürmischer Wind heran, der nur die Gläubigen schützte."
        ],
        lessons: [
          "Stärke schützt die Schwachen und bildet keine Plattform für Arroganz.",
          "Dankbarkeit festigt das gesunde Leben."
        ],
        reflectionQuestions: [
          "Womit rühmte sich das Volk 'Ad?",
          "Was bedeutet wahre Stärke im Alltag?"
        ]
      }
    }
  },
  {
    id: "salih",
    index: 5,
    arabicName: "صالح عليه السلام",
    iconName: "Compass",
    colorTheme: {
      bg: "bg-orange-50",
      text: "text-orange-900",
      primary: "bg-orange-600 hover:bg-orange-700",
      border: "border-orange-200",
      accent: "text-orange-600",
      gradient: "from-orange-500 to-amber-500"
    },
    names: { en: "Salih", ar: "صالح", sv: "Salih", de: "Salih" },
    titles: {
      en: "The Miracle She-Camel",
      ar: "ناقة ثمود المعجزة",
      sv: "Profeten med mirakelkamelen",
      de: "Die Wunder-Kamelin"
    },
    stories: {
      en: {
        title: "The Camel of Thamud",
        introduction: "Prophet Salih asked the people of Thamud to share their fresh well-water with a beautiful miracle she-camel.",
        body: [
          "The people of Thamud were amazing stonecutters. They carved castles directly out of rocky canyons. Prophet Salih told them: 'Be sweet, worship Allah, and share with your neighbors.'",
          "To believe, they demanded a miracle: a massive camel to appear from a solid rock cliff. By Allah's command, a beautiful she-camel stepped out. Prophet Salih asked them to let her drink from their well every alternate day. The she-camel also gave sweet fresh milk to all the poor kids in town."
        ],
        lessons: [
          "Share sharing-resources like clean water, air, and playgrounds fairly.",
          "Do not harm beautiful creatures of Allah."
        ],
        reflectionQuestions: [
          "What kind of miracle did the people of Thamud ask for?",
          "How can we share our toys and tools with our friends?"
        ]
      },
      ar: {
        title: "ناقة الله المباركة",
        introduction: "دعا نبي الله صالح قوم 'ثمود' لمشاركة مياه الآبار بإنصاف مع ناقة معجزة جميلة خرجت من صخرة صلبة.",
        body: [
          "كان قوم ثمود فنانين ممتازين ينحتون بيوتاً غاية في الروعة داخل الجبال الحجرية. أرسل الله إليهم صالحاً عليه السلام يدعوهم للعدالة وعبادة الإله الرحيم.",
          "طلبوا معجزة حية فاستجاب الله تعالى وخرجت ناقة عظيمة وجميلة من صخرة صماء. طلب منهم صالح أن تشركهم الناقة في شرب المشرع يوماً بعد يوم، وكانت الناقة تعطي حليباً وفيراً وشهياً لكل أبناء المدينة الطيبين."
        ],
        lessons: [
          "العدل والمشاركة هما أساس العيش السعيد مع الآخرين.",
          "الرفق بالحيوان والاهتمام بطعامهم وشرابهم واجب."
        ],
        reflectionQuestions: [
          "كيف ظهرت الناقة لقوم ثمود؟",
          "كيف نساعد الطيور والحيوانات في الصيف الحار؟"
        ]
      },
      sv: {
        title: "Mirakelkamelen",
        introduction: "Profeten Salih bad folket Thamud att dela sitt brunnsvatten med en vacker mirakelkamel.",
        body: [
          "Folket Thamud karvade palats direkt ur klipporna. Salih predikade rättvisa och bad dem sluta förtrycka varandra.",
          "Som bevis krävde de en stor levande kamel ur berget. Genom Guds vilja klev en jättefin kamel ut. Salih bad dem dela sötvattnet med henne varannan dag. Kamelen belönade de goda barnen med massor av jättegod söt mjölk."
        ],
        lessons: [
          "Dela naturens resurser rättvist med djur och människor.",
          "Värna om alla djur och låt dem leva fritt."
        ],
        reflectionQuestions: [
          "Var kom den vackra mirakelkamelen ifrån?",
          "Vad kan vi lära oss av att dela med oss av saker?"
        ]
      },
      de: {
        title: "Die Kamelin von Thamud",
        introduction: "Prophet Salih wies das Volk Thamud an, das Brunnenwasser mit einer gesegneten Wunder-Kamelstute zu teilen.",
        body: [
          "Das Volk Thamud hieb prächtige Paläste in Berghänge. Prophet Salih lehrte sie Barmherzigkeit.",
          "Als Zeichen spaltete sich auf Salihs Gebet ein Fels und ein Kamel trat hervor. Dieses versorgte die Kinder der Armen mit reichlich Milch, doch Neidische verletzten das Tier."
        ],
        lessons: [
          "Teile Ressourcen gerecht mit allen Mitmenschen.",
          "Schütze Tiere und pflege die Schöpfung Allahs."
        ],
        reflectionQuestions: [
          "Wie half das Kamel den bedürftigen Menschen?",
          "Warum ist Fairplay beim Teilen so wichtig?"
        ]
      }
    }
  },
  {
    id: "ibrahim",
    index: 6,
    arabicName: "إبراهيم عليه السلام",
    iconName: "Sparkles",
    colorTheme: {
      bg: "bg-yellow-50",
      text: "text-yellow-900",
      primary: "bg-yellow-500 hover:bg-yellow-600",
      border: "border-yellow-200",
      accent: "text-yellow-700",
      gradient: "from-yellow-500 to-orange-500"
    },
    names: { en: "Ibrahim", ar: "إبراهيم", sv: "Ibrahim", de: "Ibrahim" },
    titles: {
      en: "The Friend of Allah",
      ar: "خليل الرحمن",
      sv: "Allahs nära vän",
      de: "Der Freund Allahs"
    },
    stories: {
      en: {
        title: "Friend of the Most Merciful",
        introduction: "Prophet Ibrahim searched for the Creator by looking at stars, moon, and sun, concluding that Allah is the Maker of them all.",
        body: [
          "Prophet Ibrahim grew up in a land worshiping stone statues. He wondered: 'Who made the universe?' He watched stars fade, then the moon set, then the sun sink. He realized: 'These aren't creators! I turn to the Creator of the Heavens and Earth.'",
          "Because he stood for Truth, people built a giant campfire to scare him. When thrown in, he trusted Allah completely. An amazing miracle happened: Allah ordered the fire: 'O fire! Be cool and peaceful for Ibrahim!' It instantly became a safe, beautiful green garden!"
        ],
        lessons: [
          "Use your intellect and mind to appreciate the beautiful signs of Allah.",
          "Truth and honest character are stronger than any fear."
        ],
        reflectionQuestions: [
          "What did Ibrahim think when he saw the sun set?",
          "What miracle saved Ibrahim from the giant fire?"
        ]
      },
      ar: {
        title: "خليل الله والحديقة السحرية",
        introduction: "تفكر نبي الله إبراهيم في خلق الكواكب والنجوم وتوصل بذكاء إلى أن الله هو خالق كل شيء في هذا الكون البديع.",
        body: [
          "عاش إبراهيم عليه السلام في مجتمع يصنع تماثيل صامتة ويعبدها. فكر بعقله قائلاً: 'كيف أعبد حجراً لا يسمع؟' نظر إلى القمر والشمس والنجوم ورأى زوالها، فعلم بقلبه النير أن الخالق أعظم من كل هذه الأجرام.",
          "وعندما حاول قومه معاقبته برميّه في نار هائلة أوقدوها، كان قلبه واثقاً بربه الكريم. فحدثت معجزة خالدة حين أمر الله النار: 'يا نار كوني برداً وسلاماً على إبراهيم' فصارت النار كالحديقة الوردية الباردة."
        ],
        lessons: [
          "التفكير والتدبر والبحث عن الحقيقة قيم رفيعة.",
          "ثقتنا بالله تعم قلبنا بالسلام والأمان ضد المخاوف."
        ],
        reflectionQuestions: [
          "كيف أثبت نبي الله إبراهيم بطلان عبادة الأصنام؟",
          "بماذا أمر الله تعالى النار لتحمي إبراهيم؟"
        ]
      },
      sv: {
        title: "Ibrahim i elden",
        introduction: "Profeten Ibrahim sökte efter universums Skapare genom att studera stjärnor, måne och sol, och insåg att Allah skapat dem alla.",
        body: [
          "Ibrahim bodde i ett land där man tillbad mörka stenstatyer. Han tänkte:'Vem har skapat allt?'. Han såg månen gå ner och solen gå ner. Han sa: 'Jag tillber inte saker som försvinner. Jag litar på Himlens och Jordens Skapare.'",
          "De arga folket tände då en jätteeld för att skrämma honom. Men Ibrahim förlitade sig på Allah helt och hållet. Då beordrade Allah elden: 'O eld! Bli sval och fridfull för Ibrahim!' Det kalla askan blev genast som en vacker blomsterträdgård!"
        ],
        lessons: [
          "Använd ditt smarta huvud för att se tecken på skapelsen runt omkring dig.",
          "Sanning och gott mod vinner över ilska och rädsla."
        ],
        reflectionQuestions: [
          "Vad insåg Ibrahim när han såg månen försvinna?",
          "Vad hände med elden på Guds befallning?"
        ]
      },
      de: {
        title: "Ibrahims Suche nach Wahrheit",
        introduction: "Prophet Ibrahim betrachtete Sterne, Mond und Sonne und fand so seine tiefe Liebe zum Schöpfer des Himmels.",
        body: [
          "Der junge Ibrahim hinterfragte Götzenbilder. Er sah nachts die leuchtenden Planeten und erkannte, dass nur der Schöpfer dieser Lichter Anbetung verdient.",
          "Als man ihn wegen seines Glaubens in ein gewaltiges Feuer warf, befahl Allah den Flammen: 'O Feuer, sei Kühlung und Frieden für Ibrahim'. Er blieb unverletzt zwischen den Blumen."
        ],
        lessons: [
          "Nutze Verstand und Herz, um die Wunder der Erde zu staunen.",
          "Aufrichtiger Glaube schenkt inneren Frieden."
        ],
        reflectionQuestions: [
          "Wie widerstand Ibrahim dem Feuer?",
          "Was fasziniert dich nachts am Sternenhimmel?"
        ]
      }
    }
  },
  {
    id: "lut",
    index: 7,
    arabicName: "لوط عليه السلام",
    iconName: "ShieldAlert",
    colorTheme: {
      bg: "bg-slate-50",
      text: "text-slate-900",
      primary: "bg-slate-600 hover:bg-slate-700",
      border: "border-slate-200",
      accent: "text-slate-600",
      gradient: "from-slate-500 to-zinc-600"
    },
    names: { en: "Lut", ar: "لوط", sv: "Lut", de: "Lut" },
    titles: {
      en: "The Righteous Nephew",
      ar: "نبي الأمان والمحبة",
      sv: "Ibrahims rättfärdige brorson",
      de: "Der gerechte Beschützer"
    },
    stories: {
      en: {
        title: "The Protector of Guests",
        introduction: "Prophet Lut, the beloved nephew of Prophet Ibrahim, showed high morals and protected his family and visitors.",
        body: [
          "Prophet Lut (peace be upon him) moved to a distant town near Ibrahim's land. The people were behaving very badly, forgetting moral values, and being mean to travelers.",
          "Lut opened his doors to protect visitors that arrived. He stood tall by telling his neighbors: 'Be good-natured, respect family values, and play safe and fair.' True to his advice, he kept his small family and supporters safe."
        ],
        lessons: [
          "Always show ultimate kindness and safety to guests.",
          "Family values, good manners, and integrity keep us happy."
        ],
        reflectionQuestions: [
          "Which other great prophet was Lut related to?",
          "How do we treat guests and new kids when we welcome them?"
        ]
      },
      ar: {
        title: "نبي النصح الكرم",
        introduction: "عاش نبي الله لوط قريباً من نبي الله إبراهيم، وكان رجلاً صالحاً يحب إكرام الضيوف وحمايتهم وعلم الأخلاق النبيلة.",
        body: [
          "سكن نبي الله لوط عليه السلام في بلدة نسيتها الأخلاق الطيبة وكانوا يضايقون المسافرين والغرباء ويسيئون لبعضهم بعضاً.",
          "فتح نبي الله لوط بابه للزوار لحمايتهم وإطعامهم ودعا قومه قائلاً: 'احترموا الضيوف وحافظوا على نظافة بيوتكم وطهارة قلوبكم'. وأظهر شجاعة بالغة وضرب مثالاً في الالتزام بالقيم العليا."
        ],
        lessons: [
          "إكرام الضيف ومساعدة التائه وعابر السبيل خصلة إيمانية حميدة.",
          "الالتزام بالأخلاق والصدق وحماية الآخرين ينشر المحبة."
        ],
        reflectionQuestions: [
          "كيف أظهر نبي الله لوط الكرم وحب الضيوف؟",
          "كيف يمكننا استقبال أصدقائنا بابتسامة ومحبة في المنزل؟"
        ]
      },
      sv: {
        title: "Gästfrihetens profet",
        introduction: "Profeten Lut, brorson till Ibrahim, visade höga moraliska värderingar och skyddade sina gäster från fara.",
        body: [
          "Profeten Lut (frid vare med honom) flyttade till en stad i närheten av Ibrahims land. Folk i staden hade glömt bort goda seder och vackert uppförande.",
          "Lut visade stor gästfrihet och mod genom att alltid välkomna främlingar och skydda resenärer. Han rådde folk: 'Var ärliga, visa varandra hänsyn och respektera era hem.' Han skyddade de troende med gott exempel."
        ],
        lessons: [
          "Välkomna dina gäster med ett leende, gott fika och värme.",
          "Att stå upp mot mobbning och taskigt beteende är vår plikt."
        ],
        reflectionQuestions: [
          "Vad var Lut mest känd för att göra när resenärer kom till staden?",
          "Hur kan vi göra så att nya elever i klassen känner sig trygga?"
        ]
      },
      de: {
        title: "Schutz der Reisenden",
        introduction: "Prophet Lut brachte den Menschen Anstand, Familiensinn und den wertvollen Schutz von Gästen näher.",
        body: [
          "Prophet Lut war der Neffe von Prophet Ibrahim. Er wirkte in einer Stadt, wo Reisende schlecht behandelt und betrogen wurden.",
          "Lut schützte die Fremden furchtlos und predigte Gerechtigkeit, Sitte und Gastfreundschaft. Er bewahrte sein Haus vor Unruhe."
        ],
        lessons: [
          "Bringe Gästen stets Respekt und süße Verpflegung entgegen.",
          "Gutes Verhalten beschützt das Wohlbefinden aller."
        ],
        reflectionQuestions: [
          "Wie ging Lut mit fremden Besuchern um?",
          "Was bedeutet 'Höflichkeit' für dich?"
        ]
      }
    }
  },
  {
    id: "ismail",
    index: 8,
    arabicName: "إسماعيل عليه السلام",
    iconName: "Droplet",
    colorTheme: {
      bg: "bg-yellow-50",
      text: "text-amber-900",
      primary: "bg-amber-500 hover:bg-amber-600",
      border: "border-yellow-300",
      accent: "text-amber-700",
      gradient: "from-amber-400 to-yellow-600"
    },
    names: { en: "Ismail", ar: "إسماعيل", sv: "Ismail", de: "Ismail" },
    titles: {
      en: "The Willing Son & Builder of the Kaaba",
      ar: "بناء الكعبة والماء العذب",
      sv: "Det rinnande källvattnets son",
      de: "Erbauer der Kaaba"
    },
    stories: {
      en: {
        title: "The Springs of Zamzam",
        introduction: "Prophet Ismail and his mother Hajar were blessed with the miracle of Zamzam water, which gushed from dry sands near where the Kaaba was built.",
        body: [
          "When Prophet Ismail was a little baby, he and his mother Hajar were in the quiet desert valley of Makkah. Seeking water for her crying son, Hajar ran seven times between Safa and Marwa hills. She trusted Allah completely.",
          "By a miracle, Baby Ismail kicked his tiny foot on the ground, and cool Zamzam water came gushing out of dry sands! Later, Ibrahim and Ismail built the sacred house of Kaaba together, raising its stone walls as a beacon of unity."
        ],
        lessons: [
          "Mothers do everything they can for us; love and help them always.",
          "Zamzam is a blessed water full of power and healing."
        ],
        reflectionQuestions: [
          "How did Hajar search for water in the desert?",
          "What did Ibrahim and Ismail build together with their bare hands?"
        ]
      },
      ar: {
        title: "بئر زمزم المبارك",
        introduction: "أكرم الله الرضيع إسماعيل وأمه هاجر بمعجزة نبع ماء زمزم البارد في الصحراء، ثم بنى مع والده إبراهيم الكعبة العظمى.",
        body: [
          "عندما كان إسماعيل طفلاً صغيراً، سكن مع أمه هاجر في وادي مكة الهادئ الخالي من الزرع والماء. سعت الأم الكريمة بين جبلي الصفا والمروة سبع مرات بكل عزم بحثاً عن رواء لابنها العطش.",
          "حينئذٍ تفجرت معجزة من تحت قدمي الصغير، فنبع ماء زمزم الرقراق بارداً وحيّا! وعندما كبر إسماعيل، تعاون مع والده إبراهيم عليهما السلام في بناء الكعبة المشرفة ورفع قواعدها رمزاً للتوحيد والسلام."
        ],
        lessons: [
          "حب الأم عظيم، وهاجر تعلمنا السعي والتوكل الجميل.",
          "التعاون بين الأب وابنه في بناء المساجد وعمل الخير يقرب القلوب."
        ],
        reflectionQuestions: [
          "لماذا ركضت السيدة هاجر بين جبلي الصفا والمروة؟",
          "من الذي بنى الكعبة المشرفة في مكة؟"
        ]
      },
      sv: {
        title: "Källan vid Mekka",
        introduction: "Profeten Ismail och hans mamma Hajar fick den mirakulösa källan Zamzam mitt i öknen, och tillsammans med Ibrahim byggde han senare Kaba.",
        body: [
          "När Ismail var en liten bebis lämnades han och hans mamma Hajar i den tysta Mekkadalen. Hajar sprang sju gånger mellan kullarna Safa och Marwa för att hitta vatten till sin törstiga bebis.",
          "Genom ett vackert mirakel sprutade svalt källvatten—Zamzam—upp ur den torra sanden under bebisens fötter! Längre fram i livet bar Ibrahim och Ismail tunga stenar och byggde Kaba tillsammans."
        ],
        lessons: [
          "Mammas kärlek är ovärderlig; tacka henne varje dag.",
          "Zamzam är ett gott och välsignat vatten att dricka."
        ],
        reflectionQuestions: [
          "Mellan vilka två kullar sprang mamma Hajar?",
          "Att arbeta tillsammans som familj—vad kan vi bygga ihop?"
        ]
      },
      de: {
        title: "Die Zamzam-Quelle",
        introduction: "Aus dem Wüstensand unter den Füßen des kleinen Ismail sprudelte das gesegnete Zamzam-Wasser hervor. Später half er Ibrahim, die Kaaba zu errichten.",
        body: [
          "Hajar suchte in der Wüste Mekkas verzweifelt Wasser für ihren kleinen Sohn Ismail. Sie lief voller Vertrauen siebenmal zwischen den Hügeln Safa und Marwa hin und her.",
          "Da ließ Allah reines Wasser dort entspringen, wo der Säugling lag. Als Ismail herangewachsen war, bauten er und sein Vater die Grundmauern der Kaaba wieder auf."
        ],
        lessons: [
          "Liebe und elterliche Fürsorge sind wundervolle, schützenswerte Werte.",
          "Zamzam-Wasser stillt Durst und schenkt heilende Kraft."
        ],
        reflectionQuestions: [
          "Wie entstand die Zamzam-Quelle?",
          "Welches Bauwerk errichteten Vater und Sohn gemeinsam?"
        ]
      }
    }
  },
  {
    id: "ishaq",
    index: 9,
    arabicName: "إسحاق عليه السلام",
    iconName: "Gift",
    colorTheme: {
      bg: "bg-sky-50",
      text: "text-sky-900",
      primary: "bg-sky-600 hover:bg-sky-700",
      border: "border-sky-200",
      accent: "text-sky-600",
      gradient: "from-sky-400 to-blue-500"
    },
    names: { en: "Ishaq", ar: "إسحاق", sv: "Ishaq", de: "Ishaq" },
    titles: {
      en: "The Promised Gift",
      ar: "بشارة الخير الكبرى",
      sv: "Den utlovade gåvan",
      de: "Die verheißene Gabe"
    },
    stories: {
      en: {
        title: "The Good News",
        introduction: "Prophet Ishaq, the second son of Ibrahim, was promised by angels as a gift to his elderly parents, growing up to be exceptionally knowledgeable.",
        body: [
          "When Prophet Ibrahim and his wife Sarah were very old, angels visited them with incredibly happy news: 'You will have a son, a wise and knowledgeable builder of communities!' Sarah laughed in joy and surprise.",
          "This promised miracle baby was Ishaq (peace be upon him). He grew up with a peaceful and humble spirit, teaching people in Palestine to be soft-spoken, fair, and extremely loving."
        ],
        lessons: [
          "Nothing is impossible for Allah; miracles can happen anytime.",
          "Being polite and intellectual is more valuable than being loud."
        ],
        reflectionQuestions: [
          "How did Ishaq’s mother react to the happy news?",
          "What kind of person did Ishaq grow up to be?"
        ]
      },
      ar: {
        title: "البشارة بالولد الحكيم",
        introduction: "بشرت الملائكة نبينا إبراهيم وزوجته سارة في كبرهما بولادة ابنهما إسحاق الكريمة الذي نشأ عالماً مهتدياً.",
        body: [
          "عندما كان إبراهيم وزوجته سارة في سن متقدمة، زارتهم الملائكة الحافظون ليزفوا إليهم بشرى عظيمة: 'سترزقان بولد بار، وسيكون نبيّاً حكيماً مهذباً ومعلماً للناس'. ضحكت سارة فرحاً ودهشة.",
          "ولد إسحاق عليه السلام حاملاً معه البهجة والسرور لبيت النبوة، ونشأ كبيراً في العلم والأدب وعلم أهل فلسطين الرحمة والصدق ومبادرة الخير."
        ],
        lessons: [
          "الله قادر على تبديل اليأس بالدهشة والأفراح الكبيرة.",
          "الأطفال في البيوت هم هدايا وبشائر حب يجب الاهتمام بها."
        ],
        reflectionQuestions: [
          "كيف استقبلت الأم سارة بشارة الملائكة؟",
          "ما هي الأخلاق التي علمها إسحاق للناس؟"
        ]
      },
      sv: {
        title: "Den glada nyheten",
        introduction: "Profeten Ishaq, Ibrahims andre son, utlovades av änglar som en glad gåva till sina gamla föräldrar och blev mycket klok.",
        body: [
          "När Ibrahim och hans fru Sarah blivit gamla fick de besök av tindrande änglar. De sa: 'Du ska få en son som blir en kunskapsrik ledare!' Sarah log i glad överraskning.",
          "Detta lilla mirakelbarn var Ishaq (frid vare med honom). Han växte upp till en mycket fridsam och tålmodig person som visade människorna i Palestina hur man bor i fred och harmoni."
        ],
        lessons: [
          "Inget är omöjligt för Gud; var alltid hoppfull i ditt hjärta.",
          "Ett lugnt och hjälpsamt sinne skapar goda vänner."
        ],
        reflectionQuestions: [
          "Hur reagerade Ishaqs mamma när änglarna berättade nyheten?",
          "Var bodde Ishaq när han växte upp?"
        ]
      },
      de: {
        title: "Ishaq, das Geschenk Allahs",
        introduction: "Prophet Ishaq wurde seinen hochbetagten Eltern Sarah und Ibrahim von Engeln angekündigt und brachte Segen ins Haus.",
        body: [
          "Sarah hielt es kaum für möglich, im Alter noch ein Baby zu säugen. Doch die Engel erklärten, dass Allahs Segen vorzüglich wirkt.",
          "Ishaq wuchs behütet auf, las scharfsinnig und bewies Frieden. Er wurde ein weiser Herrscher und Prophet in Palästina."
        ],
        lessons: [
          "Freude und Zuversicht sind Geschenke Allahs für gläubige Herzen.",
          "Weisheit entsteht durch Gelehrsamkeit und Zuhören."
        ],
        reflectionQuestions: [
          "Wie reagierten die Eltern auf die Geburtsankündigung?",
          "Was zeichnet einen klugen Anführer aus?"
        ]
      }
    }
  },
  {
    id: "yaqub",
    index: 10,
    arabicName: "يعقوب عليه السلام",
    iconName: "Heart",
    colorTheme: {
      bg: "bg-violet-50",
      text: "text-violet-900",
      primary: "bg-violet-600 hover:bg-violet-700",
      border: "border-violet-200",
      accent: "text-violet-600",
      gradient: "from-violet-500 to-fuchsia-500"
    },
    names: { en: "Ya'qub", ar: "يعقوب", sv: "Yaqub", de: "Ya'qub" },
    titles: {
      en: "The Patient Father",
      ar: "صبر الأب والمحبة للمستقبل",
      sv: "Den tålmodige fadern",
      de: "Der geduldige Vater"
    },
    stories: {
      en: {
        title: "The Tears of Hope",
        introduction: "Prophet Yaqub (also called Israel) was a loving father who taught his children patience, devotion, and hope in Allah's plan.",
        body: [
          "Prophet Yaqub (peace be upon him) was the beloved son of Ishaq. He had twelve sons, and he loved his son Yusuf exceptionally. When Yusuf went missing, Yaqub became very sad but stayed incredibly patient (Sabrun Jameel).",
          "He never lost hope in Allah's warm mercy. He cried until his eyes became white, yet he told his sons: 'Do not despair of Allah's loving relief.' Eventually, Allah reunited him with Yusuf in Egypt, restoring his eyesight and happiness!"
        ],
        lessons: [
          "Never give up hope, even when you feel very sad or miss someone.",
          "Beautiful patience (Sabrun Jameel) means trusting Allah with dry tears."
        ],
        reflectionQuestions: [
          "What is the term Yaqub used for beautiful patience?",
          "How did Yaqub react when he missed his son Yusuf?"
        ]
      },
      ar: {
        title: "صبر يعقوب الجميل",
        introduction: "كان نبي الله يعقوب (الملقب بإسرائيل) أباً حنوناً محباً لأولاده، وعلمنا كيف نصبر ونرتجي فرح الإله الكريم.",
        body: [
          "كان يعقوب عليه السلام رجلاً طيباً ولديه اثنا عشر ولداً، وكان Yusuf هو أحبهم إلى قلبه. وعندما غاب يوسف عنه طويلاً وحزن حزناً عظيماً، تمسك بالصبر الباسق مكرراً: 'صبر جميل'.",
          "بكى طويلاً حتى ضعف بصره، لكنه لم يتشكك أبداً بربه وكان يقول لأولاده: 'لا تيأسوا من روح الله'. وفي النهاية، جمع الله شمله بيوسف في مصر وعاد إليه بصره وفرحه الغامر بفضل ثقته."
        ],
        lessons: [
          "الصبر الجميل هو أن نرضى بنصيبنا منتظرين فرج الله بقلب متفائل.",
          "اليأس لا يليق بالمؤمنين، فالله دائماً يخزن لنا الأجمل."
        ],
        reflectionQuestions: [
          "ماالاسم الآخر لنبي الله يعقوب؟",
          "ماذا فعل يعقوب عندما فقد عيناه من أثر الحزن الدافئ؟"
        ]
      },
      sv: {
        title: "Det vackra tålamodet",
        introduction: "Profeten Yaqub var en kärleksfull pappa som lärde sina barn tålamod och att aldrig förlora hoppet om Allahs plan.",
        body: [
          "Profeten Yaqub var son till Ishaq. Han hade tolv söner och älskade sin son Yusuf väldigt mycket. När Yusuf försvann blev Yaqub jätteledsen, men han valde att ha ett 'vackert tålamod' (Sabrun Jameel).",
          "Yaqub grät så mycket att han tappade synen, men han gav aldrig upp sitt hopp. Till slut lät Allah honom återförenas med Yusuf i Egypten, och han fick sin syn och sin lycka tillbaka!"
        ],
        lessons: [
          "Förlora aldrig hoppet, även när du känner dig ensam eller ledsen.",
          "Att ha tålamod innebär att fortsätta hoppas och göra bra saker."
        ],
        reflectionQuestions: [
          "Vad kallas det tålamod Yaqub är känd för?",
          "Hur kände Yaqub när hans älskade son Yusuf kom tillbaka?"
        ]
      },
      de: {
        title: "Das schöne Jenseits des Schmerzes",
        introduction: "Prophet Ya'qub bewies vorbildliche Geduld, als er von seinem geliebten Sohn Yusuf getrennt war, und hielt die Hoffnung hoch.",
        body: [
          "Ya'qub warnte seine Kinder davor, eifersüchtig zu sein. Als Yusuf durch Verrat verschwand, weinte der Vater kummervoll, betonte jedoch: 'Schöne Geduld (Sabrun Jamil)'.",
          "Durch unerschütterliche Hoffnung wurde er schließlich mit Yusuf, der inzwischen Minister Ägyptens war, vereint."
        ],
        lessons: [
          "Weine, wenn du Trauer fühlst, aber zweifle nie an Allahs Hilfe.",
          "Zuversicht kehrt jede Notlage am Ende um."
        ],
        reflectionQuestions: [
          "Welche Charaktereigenschaft machte Ya'qub berühmt?",
          "Wie half ihm sein Glaube an Gott durch schwere Zeiten?"
        ]
      }
    }
  },
  {
    id: "yusuf",
    index: 11,
    arabicName: "يوسف عليه السلام",
    iconName: "Moon",
    colorTheme: {
      bg: "bg-purple-50",
      text: "text-purple-900",
      primary: "bg-purple-600 hover:bg-purple-700",
      border: "border-purple-200",
      accent: "text-purple-600",
      gradient: "from-purple-500 to-indigo-600"
    },
    names: { en: "Yusuf", ar: "يوسف", sv: "Yusuf", de: "Yusuf" },
    titles: {
      en: "The Beautiful Dreamer",
      ar: "جمال الأخلاق والملك",
      sv: "Den vackre drömmaren",
      de: "Ausleger der Träume"
    },
    stories: {
      en: {
        title: "The Beautiful Character",
        introduction: "Prophet Yusuf was gifted with half of all beauty and the ability to interpret dreams, becoming a kind and forgiving helper in Egypt.",
        body: [
          "Prophet Yusuf (peace be upon him) had a dream of eleven stars, the sun, and the moon bowing to him. Jealous of him, his older brothers threw him down a dark well, where a caravan found him and took him to Egypt.",
          "In Egypt, despite many trials and being in prison, he was honest and interpreted the King's dream of seven fat cows being eaten by seven thin ones. He saved the whole region from hunger during dry years, and when his brothers came seeking food, he forgave them fully with a big heart."
        ],
        lessons: [
          "Forgiveness is a beautiful attribute that makes you truly honorable.",
          "Jealousy hurts families; appreciate what your brother or sister has."
        ],
        reflectionQuestions: [
          "What did Yusuf see in his beautiful childhood dream?",
          "Why did Yusuf forgive his brothers when they came to his palace?"
        ]
      },
      ar: {
        title: "جمال يوسف وعفوه",
        introduction: "أكرم الله يوسف عليه السلام بجمال الوجه والقلب، وعلمه تفسير الرؤى والأحلام وأعطاه ملك مصر بعد ضيق شديد.",
        body: [
          "رأى يوسف في منامه أحد عشر كوكباً والشمس والقمر يسجدون له. وبسبب غيرة إخوته رموه في بئر مظلمة ملتقطاً بواسطة قافلة علموا بيبعه كغلام في مصر العظيمة.",
          "مرّ يوسف بظروف صعبة وسجن، لكن أمانته وتفسيره لرؤيا الملك عن السبع بقرات السمان أنقذت مصر والقرى المجاورة من مجاعة قاسية. وعندما جاءه إخوته يطلبون الطعام، سامحهم وعفا عنهم بقلب ممتلئ بالحب والخير."
        ],
        lessons: [
          "العفو عند المقدرة هو تاج الأخلاق الإسلامية الجميلة.",
          "الصدق والأمانة يفتحان لك أبواب الريادة ولو طال ظلم الناس."
        ],
        reflectionQuestions: [
          "ما هي الرؤيا التي فسرها يوسف لملك مصر؟",
          "كيف ضرب يوسف مثالاً رائعاً في مسامحة من آذاه؟"
        ]
      },
      sv: {
        title: "Yusufs vackra dröm",
        introduction: "Profeten Yusuf hade stor skönhet och gåvan att tyda drömmar, och han förlät sina bröder trots att de slängt honom i en djup brunn.",
        body: [
          "Yusuf drömde en natt att elva stjärnor, solen och månen bugade sig för honom. Hans avundsjuka bröder kastade honom då i en djup brunn, men några resenärer räddade honom till Egypten.",
          "Yusuf fick sitta fängslad oskyldig, men han tydde kungens dröm om sju tjocka kor som äts upp av sju smala kor. Kungen gjorde Yusuf till minister, och genom sin klokhet räddade han folket från svält. När hans bröder kom till slottet kramade han dem och förlät dem."
        ],
        lessons: [
          "Att förlåta de som gjort fel mot oss är en underbar egenskap.",
          "Avundsjuka förstör mycket; var glad för andras gåvor."
        ],
        reflectionQuestions: [
          "Vad handlade kungens dröm om sju kor om?",
          "Hur kände bröderna när Yusuf kramade dem på slottet?"
        ]
      },
      de: {
        title: "Der Glanz Ägyptens",
        introduction: "Yusuf überwand Neid und Kerkerhaft. Dank seiner Ehrlichkeit und Gabe der Traumdeutung wurde er Wirtschaftsminister Ägyptens.",
        body: [
          "In Jugendjahren neidisch in einen Brunnen geworfen, gelangte Yusuf als Sklave an den Hof. Doch er blieb gütig und deutete später des Herrschers Träume.",
          "Er legte Vorräte für sieben Hungerjahre an und verzieh am Nationalpalast seinen Reumütigen Brüdern mit offenem Herzen."
        ],
        lessons: [
          "Selbstlose Vergebung befreit den Geist und beendet Streitigkeiten.",
          "Geduld bringt am Ende Wohlstand und Segen."
        ],
        reflectionQuestions: [
          "Wie half Yusuf den Menschen Ägyptens?",
          "Wie reagierst du, wenn jemand dich ungerecht behandelt?"
        ]
      }
    }
  },
  {
    id: "shuayb",
    index: 12,
    arabicName: "شعيب عليه السلام",
    iconName: "Scale",
    colorTheme: {
      bg: "bg-cyan-50",
      text: "text-cyan-900",
      primary: "bg-cyan-600 hover:bg-cyan-700",
      border: "border-cyan-200",
      accent: "text-cyan-600",
      gradient: "from-cyan-500 to-teal-500"
    },
    names: { en: "Shu'ayb", ar: "شعيب", sv: "Shu'ayb", de: "Schu'aib" },
    titles: {
      en: "The Speaker of Midian",
      ar: "خطيب الأنبياء والعدل",
      sv: "Midians eloquence talare",
      de: "Geachte Redner von Midian"
    },
    stories: {
      en: {
        title: "Honesty in the Marketplace",
        introduction: "Prophet Shuayb taught the merchants of Midian to use accurate weights and measures, promoting fair business for everyone.",
        body: [
          "Prophet Shuayb was sent to the energetic merchants of Midian. They owned lush shaded forests but did something bad: they cheated customer kids by manipulating scales to look heavy.",
          "Shuayb advised: 'Be fair, measure with justice, and do not steal money by lying.' He was called 'the Eloquent Speaker' because of his beautiful voice and arguments. Honest tradesmen joined him, finding peace in true earnings."
        ],
        lessons: [
          "Always be honest when buying, selling, or playing games—no cheating!",
          "We should respect other people's property and money."
        ],
        reflectionQuestions: [
          "Why did Shuayb talk about scales in business?",
          "How can we play games in a fair way without cheating our classmates?"
        ]
      },
      ar: {
        title: "خطيب الأنبياء والميزان العادل",
        introduction: "بعث الله نبينا شعيباً إلى أهل مدين ليعلمهم الأمانة في البيع والشراء مستخدماً الميزان العادل بكل صدق ونقاء.",
        body: [
          "أرسل الله نبينا شعيباً عليه السلام إلى تجار مدينة مدين، الذين عاشوا حول غابات خضراء لكنهم اعتادوا غش المشترين بتعديل كفة الميزان لينقصوا البضائع عمداً.",
          "نصحهم شعيب بصوت مهيب وبلاغة واضحة: 'أوفوا الكيل والميزان بالعدل، ولا تبخسوا الناس أشياءهم'. ولقب بخطيب الأنبياء لحسن كلامه ومحبته لنشر الأمانة."
        ],
        lessons: [
          "الأمانة في القول والعمل واللعب واجب أساسي لكل مسلم.",
          "غش الآخرين يسرق البركة، والأموال الصادقة تدوم أطول."
        ],
        reflectionQuestions: [
          "بماذا لُقّب نبي الله شعيب عليه السلام؟",
          "لماذا تعد الأمانة في المتجر أمراً هاماً للجميع؟"
        ]
      },
      sv: {
        title: "Ärlighet på marknaden",
        introduction: "Profeten Shuayb lärde köpmännen i Midian att väga sina varor rättvist och aldrig lura sina kunder.",
        body: [
          "Shuayb skickades till handelsmännen i staden Midian. De var skickliga i affärer men fuskade ibland med vågarna för att ta för mycket betalt.",
          "Shuayb förklarade med vackra ord: 'Väg ärligt och luras inte i butiken, ty det dolda fusket tar bort glädjen ur era hem.' Han kallades 'profeternas talare' på grund av sina trevliga presentationer."
        ],
        lessons: [
          "Fuska aldrig, varken i spel, lek eller när du byter leksaker med vänner.",
          "Håll dina löften och låt dina kompisar få vad de har rätt till."
        ],
        reflectionQuestions: [
          "Varför använde folk fuskvågar i Midian?",
          "Vad innebär det att vara en ärlig kompis vid fuskfria lekar?"
        ]
      },
      de: {
        title: "Aufrichtigkeit im Handel",
        introduction: "Prophet Schu'aib wies die Kaufleute von Midian an, das Maß vollzumachen und Kunden stets fair und korrekt zu behandeln.",
        body: [
          "Das Volk von Midian betrog Kunden durch falsche Gewichte auf Waagschalen. Prophet Schu'aib rüttelte sie mit glänzenden Reden auf.",
          "Er warnte sie vor Korruption und Habgier. Die ehrlichen Mitbürger nahmen seine Lehren an und erlangten langanhaltenden Segen."
        ],
        lessons: [
          "Sei stets ehrlich in der Schule und beim Einkaufen. Betrüge nie.",
          "Gerechtigkeit schafft Vertrauen unter Freunden."
        ],
        reflectionQuestions: [
          "Wie betrogen die Kaufleute von Midian?",
          "Warum schätzen wir ehrliche Menschen am meisten?"
        ]
      }
    }
  }
];
