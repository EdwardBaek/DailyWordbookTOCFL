import { Word, LEVEL } from "../models";

export const MOCK_SAMPLE_WORD_DATA: any[] = [
{
        index : 1,
        word : '成績',
        sound : 'chéngjī',
        explain : 'grade(at school), academic record, achievement',
        class: '(N)',
        level: 'Level 1'
},
{
    index : 101,
    word : '真',
    sound : 'zhēn',
    explain : 'to be real, true',
    class: '(VS)',
    level: 'Level 2'
},
{
    index : 301,
    word : '看法',
    sound : 'kànfǎ',
    explain : 'way of looking at sth, view',
    class: '(N)',
    level: 'Level 3'
},
{
    index : 1902,
    word : '基本',
    sound : 'jīběn',
    explain : 'fundamental, essential, main',
    class: '(VS)',
    level: 'Level 4'
},
{
    index : 2414,
    word : '認錯',
    sound : 'rèncuò',
    explain : 'admit mistake,apologize',
    class: '(VA)',
    level: 'Level 5'
}
];
export const MOCK_WORD_DATA: any[] = [
{
    id: LEVEL.LEVEL_1,
    data:
    {
        index : 1,
        word : '成績',
        sound : 'chéngjī',
        explain : 'grade(at school), academic record, achievement',
        class: '(N)',
        level: 'Level 1'
    }
},
{
    id: LEVEL.LEVEL_2,
    data:
    {
        index : 101,
        word : '真',
        sound : 'zhēn',
        explain : 'to be real, true',
        class: '(VS)',
        level: 'Level 2'
    }
},
{
    id: LEVEL.LEVEL_3,
    data:
    {
        index : 301,
        word : '看法',
        sound : 'kànfǎ',
        explain : 'way of looking at sth, view',
        class: '(N)',
        level: 'Level 3'
    }
},
{
    id: LEVEL.LEVEL_4,
    data:
    {
        index : 1902,
        word : '基本',
        sound : 'jīběn',
        explain : 'fundamental, essential, main',
        class: '(VS)',
        level: 'Level 4'
    }
},
{
    id: LEVEL.LEVEL_5,
    data:
    {
        index : 2414,
        word : '認錯',
        sound : 'rèncuò',
        explain : 'admit mistake,apologize',
        class: '(VA)',
        level: 'Level 5'
    }
}
];

export const MOCK_WORD_DATA_LEVEL_1: Word[] = [
    {  
      "index":1,
      "word":"成績",
      "sound":"chéngjī",
      "level":"Level 1",
      "class":"(N)",
      "explain":"grade(at school), academic record, achievement"
   },
   {  
      "index":2,
      "word":"一點兒",
      "sound":"yìdiǎnér",
      "level":"Level 1",
      "class":"(Det)",
      "explain":"some"
   },
   {  
      "index":3,
      "word":"塊",
      "sound":"kuài",
      "level":"Level 1",
      "class":"(M)",
      "explain":"partial measure word for lumps of foodstuff; individual measure word for currency"
   },
   {  
      "index":4,
      "word":"褲子",
      "sound":"kùzi",
      "level":"Level 1",
      "class":"(N)",
      "explain":"trousers, pants"
   },
   {  
      "index":5,
      "word":"寒假",
      "sound":"hánjià",
      "level":"Level 1",
      "class":"(N)",
      "explain":"winter vacation"
   },
   {  
      "index":6,
      "word":"懂",
      "sound":"dǒng",
      "level":"Level 1",
      "class":"(VS)",
      "explain":"to understand"
   },
   {  
      "index":7,
      "word":"窗",
      "sound":"chuāng",
      "level":"Level 1",
      "class":"(N)",
      "explain":"window"
   },
   {  
      "index":8,
      "word":"郵局",
      "sound":"yóujú",
      "level":"Level 1",
      "class":"(N)",
      "explain":"post office"
   },
   {  
      "index":9,
      "word":"熱狗",
      "sound":"règǒu",
      "level":"Level 1",
      "class":"(N)",
      "explain":"hot dog"
   },
   {  
      "index":10,
      "word":"腳踏車/自行車",
      "sound":"jiǎotàchē/zìxíngchē",
      "level":"Level 1",
      "class":"(N)",
      "explain":"bicycle"
   },
   {  
      "index":11,
      "word":"樹",
      "sound":"shù",
      "level":"Level 1",
      "class":"(N)",
      "explain":"tree"
   },
   {  
      "index":12,
      "word":"枝",
      "sound":"zhī",
      "level":"Level 1",
      "class":"(M)",
      "explain":"individual measure word for rod-shaped article"
   },
   {  
      "index":13,
      "word":"本子",
      "sound":"běnzi",
      "level":"Level 1",
      "class":"(N)",
      "explain":"book, notebook, edition"
   },
   {  
      "index":14,
      "word":"酒",
      "sound":"jiǔ",
      "level":"Level 1",
      "class":"(N)",
      "explain":"wine or liquor"
   },
   {  
      "index":15,
      "word":"傘",
      "sound":"sǎn",
      "level":"Level 1",
      "class":"(N)",
      "explain":"umbrella"
   },
   {  
      "index":16,
      "word":"郵票",
      "sound":"yóupiào",
      "level":"Level 1",
      "class":"(N)",
      "explain":"postage stamp"
   },
   {  
      "index":17,
      "word":"照相",
      "sound":"zhàoxiàng",
      "level":"Level 1",
      "class":"(VA)",
      "explain":"to take picture/ photograph"
   },
   {  
      "index":18,
      "word":"瓶",
      "sound":"píng",
      "level":"Level 1",
      "class":"(M)",
      "explain":"Cointainer measure word for the contents of a bottle"
   },
   {  
      "index":19,
      "word":"公寓",
      "sound":"gōngyù",
      "level":"Level 1",
      "class":"(N)",
      "explain":"apartment building"
   },
   {  
      "index":20,
      "word":"紙",
      "sound":"zhǐ",
      "level":"Level 1",
      "class":"(N)",
      "explain":"paper"
   },
];
export const MOCK_WORD_DATA_LEVEL_2: Word[] = [
    {
    "index":1,
        "word":"清楚",
        "sound":"qīngchǔ",
        "level":"Level 2",
        "class":"(VS)",
        "explain":"to be clear"
    },
    {  
        "index":2,
        "word":"盤子",
        "sound":"pánzi",
        "level":"Level 2",
        "class":"(N)",
        "explain":"plate"
    },
    {  
        "index":3,
        "word":"種",
        "sound":"zhòng",
        "level":"Level 2",
        "class":"(VA)",
        "explain":"to plant, cultivate, sow"
    },
    {  
        "index":4,
        "word":"害怕",
        "sound":"hàipà",
        "level":"Level 2",
        "class":"(VS)",
        "explain":"be afraid/  scared"
    },
    {  
        "index":5,
        "word":"塊",
        "sound":"kuài",
        "level":"Level 2",
        "class":"(M)",
        "explain":"Individual measure word for a solid substance with a regular shape"
    },
    {  
        "index":6,
        "word":"零",
        "sound":"líng",
        "level":"Level 2",
        "class":"(Det)",
        "explain":"zero"
    },
    {  
        "index":7,
        "word":"年輕",
        "sound":"niánqīng",
        "level":"Level 2",
        "class":"(VS)",
        "explain":"to be young"
    },
    {  
        "index":8,
        "word":"涼快",
        "sound":"liángkuài",
        "level":"Level 2",
        "class":"(VS)",
        "explain":"to be(pleasantly)cool"
    },
    {  
        "index":9,
        "word":"難過",
        "sound":"nánguò",
        "level":"Level 2",
        "class":"(VA)",
        "explain":"to be sad, to be distressed"
    },
    {  
        "index":10,
        "word":"或是",
        "sound":"huòshì",
        "level":"Level 2",
        "class":"(Conj)",
        "explain":"or, perhaps"
    },
    {  
        "index":11,
        "word":"瓶子",
        "sound":"píngzi",
        "level":"Level 2",
        "class":"(N)",
        "explain":"bottle"
    },
    {  
        "index":12,
        "word":"破",
        "sound":"pò",
        "level":"Level 2",
        "class":"(VS)",
        "explain":"to be broken"
    },
    {  
        "index":13,
        "word":"聲音",
        "sound":"shēngyīn",
        "level":"Level 2",
        "class":"(N)",
        "explain":"sound, voice"
    },
    {  
        "index":14,
        "word":"解決",
        "sound":"jiějué",
        "level":"Level 2",
        "class":"(VA)",
        "explain":"to resolve, settle"
    },
    {  
        "index":15,
        "word":"工作",
        "sound":"gōngzuò",
        "level":"Level 2",
        "class":"(VA)",
        "explain":"to work"
    },
    {  
        "index":16,
        "word":"院(子)",
        "sound":"yuàn(zi)",
        "level":"Level 2",
        "class":"(N)",
        "explain":"yard"
    },
    {  
        "index":17,
        "word":"打掃",
        "sound":"dǎsǎo",
        "level":"Level 2",
        "class":"(VA)",
        "explain":"to sweep, to clean"
    },
    {  
        "index":18,
        "word":"海",
        "sound":"hǎi",
        "level":"Level 2",
        "class":"(N)",
        "explain":"ocean, sea"
    },
    {  
        "index":19,
        "word":"安全",
        "sound":"ānquán",
        "level":"Level 2",
        "class":"(VS)",
        "explain":"to be safe, secure"
    },
    {  
        "index":20,
        "word":"叉(子)",
        "sound":"chā(zi)",
        "level":"Level 2",
        "class":"(N)",
        "explain":"fork"
    },
];
export const MOCK_WORD_DATA_LEVEL_3: Word[] = [
    {  
        "index":1,
        "word":"哎",
        "sound":"āi",
        "level":"Level 3",
        "class":"(P)",
        "explain":"of surprise/ warning/ dissatisfaction"
     },
     {  
        "index":2,
        "word":"愛",
        "sound":"ài",
        "level":"Level 3",
        "class":"(N)",
        "explain":"love"
     },
     {  
        "index":3,
        "word":"安排",
        "sound":"ānpái",
        "level":"Level 3",
        "class":"(N)",
        "explain":"arrangement"
     },
     {  
        "index":4,
        "word":"安排",
        "sound":"ānpái",
        "level":"Level 3",
        "class":"(VA)",
        "explain":"to arrange, to plan, to fix up, to provide"
     },
     {  
        "index":5,
        "word":"安全",
        "sound":"ānquán",
        "level":"Level 3",
        "class":"(N)",
        "explain":"safety, security"
     },
     {  
        "index":6,
        "word":"巴士",
        "sound":"bāshì",
        "level":"Level 3",
        "class":"(N)",
        "explain":"bus"
     },
     {  
        "index":7,
        "word":"白",
        "sound":"bái",
        "level":"Level 3",
        "class":"(Adv)",
        "explain":"in vain, for nothing"
     },
     {  
        "index":8,
        "word":"白菜",
        "sound":"báicài",
        "level":"Level 3",
        "class":"(N)",
        "explain":"Chinese cabbage"
     },
     {  
        "index":9,
        "word":"白天",
        "sound":"báitiān",
        "level":"Level 3",
        "class":"(N)",
        "explain":"daytime, day"
     },
     {  
        "index":10,
        "word":"把",
        "sound":"bǎ",
        "level":"Level 3",
        "class":"(M)",
        "explain":"(1)individual measure word for a thing with a handle or something like a handle; (2)measure word for something fastened together"
     },
     {  
        "index":11,
        "word":"辦",
        "sound":"bàn",
        "level":"Level 3",
        "class":"(VA)",
        "explain":"to do, to handle, to manage, to set up, to run"
     },
     {  
        "index":12,
        "word":"搬家",
        "sound":"bānjiā",
        "level":"Level 3",
        "class":"(VA)",
        "explain":"to move one's house"
     },
     {  
        "index":13,
        "word":"半天",
        "sound":"bàntiān",
        "level":"Level 3",
        "class":"(N)",
        "explain":"half a day, a very long time"
     },
     {  
        "index":14,
        "word":"幫助",
        "sound":"bāngzhù",
        "level":"Level 3",
        "class":"(VA)",
        "explain":"to help, to assist"
     },
     {  
        "index":15,
        "word":"包",
        "sound":"bāo",
        "level":"Level 3",
        "class":"(VA)",
        "explain":"to wrap, to contain"
     },
     {  
        "index":16,
        "word":"飽",
        "sound":"bǎo",
        "level":"Level 3",
        "class":"(VS)",
        "explain":"to be full(after eating)"
     },
     {  
        "index":17,
        "word":"抱歉",
        "sound":"bàoqiàn",
        "level":"Level 3",
        "class":"(VS)",
        "explain":"be sorry/ apologetic"
     },
     {  
        "index":18,
        "word":"背",
        "sound":"bēi",
        "level":"Level 3",
        "class":"(VA)",
        "explain":"to carry on back, to shoulder"
     },
     {  
        "index":19,
        "word":"背",
        "sound":"bèi",
        "level":"Level 3",
        "class":"(N)",
        "explain":"back of body/ object"
     },
     {  
        "index":20,
        "word":"背",
        "sound":"bèi",
        "level":"Level 3",
        "class":"(VA)",
        "explain":"to learn by heart, to recite from memory"
     },
];

export const MOCK_WORD_DATA_LEVEL_4 : Word[] = [
    {  
        "index":1,
        "word":"一一",
        "sound":"yīyī",
        "level":"Level 4",
        "class":"(Adv)",
        "explain":"one by one, one after another"
     },
     {  
        "index":2,
        "word":"一口氣",
        "sound":"yìkŏuqì",
        "level":"Level 4",
        "class":"(Adv)",
        "explain":"at a heat, at one blast,at a whack, holus-bolus"
     },
     {  
        "index":3,
        "word":"一大早",
        "sound":"yídàzăo",
        "level":"Level 4",
        "class":"(N)",
        "explain": "early in the morning"
     },
     {  
        "index":4,
        "word":"一天到晚",
        "sound":"yìtiāndàowăn",
        "level":"Level 4",
        "class":"(Adv)",
        "explain":"all day long"
     },
     {  
        "index":5,
        "word":"一方面",
        "sound":"yìfāngmiàn",
        "level":"Level 4",
        "class":"(Conj)",
        "explain":"one aspect only, on the one hand"
     },
     {  
        "index":6,
        "word":"一生",
        "sound":"yìshēng",
        "level":"Level 4",
        "class":"(N)",
        "explain":"all/throughout one's life"
     },
     {  
        "index":7,
        "word":"一再",
        "sound":"yízài",
        "level":"Level 4",
        "class":"(Adv)",
        "explain":"time and again, again and again"
     },
     {  
        "index":8,
        "word":"一同",
        "sound":"yìtóng",
        "level":"Level 4",
        "class":"(Adv)",
        "explain":"together"
     },
     {  
        "index":9,
        "word":"一向",
        "sound":"yíxiàng",
        "level":"Level 4",
        "class":"(Adv)",
        "explain":"consistently, all along, up to now"
     },
     {  
        "index":10,
        "word":"一致",
        "sound":"yízhì",
        "level":"Level 4",
        "class":"(VS)",
        "explain":"identical, unanimous"
     },
     {  
        "index":11,
        "word":"一面",
        "sound":"yímiàn",
        "level":"Level 4",
        "class":"(Adv)",
        "explain":"along, while"
     },
     {  
        "index":12,
        "word":"一旁",
        "sound":"yìpáng",
        "level":"Level 4",
        "class":"(N)",
        "explain":"side"
     },
     {  
        "index":13,
        "word":"一時",
        "sound":"yìshí",
        "level":"Level 4",
        "class":"(N)",
        "explain":"for a time, temporarily, a moment"
     },
     {  
        "index":14,
        "word":"一般",
        "sound":"yìbān",
        "level":"Level 4",
        "class":"(VS)",
        "explain":"generally"
     },
     {  
        "index":15,
        "word":"一般而言",
        "sound":"yìbānéryán",
        "level":"Level 4",
        "class":"(Conj)",
        "explain":"in general, generally speaking"
     },
     {  
        "index":16,
        "word":"一般來說",
        "sound":"yìbānláishuō",
        "level":"Level 4",
        "class":"(Conj)",
        "explain":"in general, generally speaking"
     },
     {  
        "index":17,
        "word":"一陣(子)",
        "sound":"yízhèn(zi)",
        "level":"Level 4",
        "class":"(N)",
        "explain":"a burst, a fit, a peal"
     },
     {  
        "index":18,
        "word":"一帶",
        "sound":"yídài",
        "level":"Level 4",
        "class":"(N)",
        "explain":"district, region"
     },
     {  
        "index":19,
        "word":"一連",
        "sound":"yìlián",
        "level":"Level 4",
        "class":"(Adv)",
        "explain":"successively, in succession, running"
     },
     {  
        "index":20,
        "word":"一齊",
        "sound":"yìqí",
        "level":"Level 4",
        "class":"(Adv)",
        "explain":"simultaneously, in unison, together"
     },
]
export const MOCK_WORD_DATA_LEVEL_5: Word[] = [
    
    {
        "index":1,
         "word":"一心",
         "sound":"yìxīn",
         "level":"Level 5",
         "class":"(Adv)",
         "explain":"wholeheartedly,of one mind"
      },
      {  
         "index":2,
         "word":"一旦",
         "sound":"yídàn",
         "level":"Level 5",
         "class":"(Conj)",
         "explain":"once,some time or other"
      },
      {  
         "index":3,
         "word":"一如",
         "sound":"yìrú",
         "level":"Level 5",
         "class":"(Prep)",
         "explain":"as"
      },
      {  
         "index":4,
         "word":"一味",
         "sound":"yíwèi",
         "level":"Level 5",
         "class":"(Adv)",
         "explain":"habitually, invariably,blindly,stubbornly"
      },
      {  
         "index":5,
         "word":"一度",
         "sound":"yídù",
         "level":"Level 5",
         "class":"(Adv)",
         "explain":"once, at one time, for a time, on one occasion"
      },
      {  
         "index":6,
         "word":"一律",
         "sound":"yílǜ",
         "level":"Level 5",
         "class":"(Adv)",
         "explain":"without exception, uniformly,equally"
      },
      {  
         "index":7,
         "word":"一流",
         "sound":"yìliú",
         "level":"Level 5",
         "class":"(VS)",
         "explain":"first-class"
      },
      {  
         "index":8,
         "word":"一貫",
         "sound":"yíguàn",
         "level":"Level 5",
         "class":"(VS)",
         "explain":"consistently,from first to last,all along"
      },
      {  
         "index":9,
         "word":"一連串",
         "sound":"yìliánchuàn",
         "level":"Level 5",
         "class":"(VS)",
         "explain":"in a row; in succession"
      },
      {  
         "index":10,
         "word":"一概",
         "sound":"yígài",
         "level":"Level 5",
         "class":"(Adv)",
         "explain":"one and all,without exception"
      },
      {  
         "index":11,
         "word":"一道",
         "sound":"yídào",
         "level":"Level 5",
         "class":"(Adv)",
         "explain":"together"
      },
      {  
         "index":12,
         "word":"乃",
         "sound":"năi",
         "level":"Level 5",
         "class":"(Adv)",
         "explain":"therefore"
      },
      {  
         "index":13,
         "word":"人士",
         "sound":"rénshì",
         "level":"Level 5",
         "class":"(N)",
         "explain":"personage"
      },
      {  
         "index":14,
         "word":"人手",
         "sound":"rénshǒu",
         "level":"Level 5",
         "class":"(N)",
         "explain":"manpower"
      },
      {  
         "index":15,
         "word":"人次",
         "sound":"réncì",
         "level":"Level 5",
         "class":"(N)",
         "explain":"man-times (analogous to \"man-hours\")"
      },
      {  
         "index":16,
         "word":"人情",
         "sound":"rénqíng",
         "level":"Level 5",
         "class":"(N)",
         "explain":"human feelings"
      },
      {  
         "index":17,
         "word":"人造",
         "sound":"rénzào",
         "level":"Level 5",
         "class":"(VS)",
         "explain":"synthetic,artificial"
      },
      {  
         "index":18,
         "word":"人群",
         "sound":"rénqún",
         "level":"Level 5",
         "class":"(N)",
         "explain":"crowd"
      },
      {  
         "index":19,
         "word":"人道",
         "sound":"réndào",
         "level":"Level 5",
         "class":"(N)",
         "explain":"humanity,human sympathy"
      },
      {  
         "index":20,
         "word":"人禍",
         "sound":"rénhuò",
         "level":"Level 5",
         "class":"(N)",
         "explain":"calamity caused by humans"
      },
]

export interface Question {
    index: number;
    selectedWordIndex?: number;
    isAnswerCorrect?: boolean;
    questionWord : Word;
    answers: Word[];
}

export const MOCK_QUIZ_QUESTION_WORDS = 
[  
    {  
      "index":42,
      "word":"難",
      "sound":"nán",
      "level":"Level 1",
      "class":"(VS)",
      "explain":"to be difficult"
    },
    {  
      "index":307,
      "word":"最",
      "sound":"zuì",
      "level":"Level 1",
      "class":"(Adv)",
      "explain":"the most, -est"
    },
    {  
      "index":491,
      "word":"(飛)機場",
      "sound":"(fēi)jīchǎng",
      "level":"Level 1",
      "class":"(N)",
      "explain":"airport"
    },
    {  
      "index":236,
      "word":"每",
      "sound":"měi",
      "level":"Level 1",
      "class":"(Det)",
      "explain":"every"
    },
    {  
      "index":124,
      "word":"漂亮",
      "sound":"piāoliàng",
      "level":"Level 1",
      "class":"(VS)",
      "explain":"to be beautiful, to be pretty"
    }
];
export const MOCK_QUIZ_QUESTIONS = 
[  
    {  
        "index":1,
        "questionWord":{  
        "index":302,
        "word":"回來",
        "sound":"huílái",
        "level":"Level 1",
        "class":"(VA)",
        "explain":"to come back"
        },
        "answers":[  
        {  
            "index":165,
            "word":"一起",
            "sound":"yìqǐ",
            "level":"Level 1",
            "class":"(Adv)",
            "explain":"together"
        },
        {  
            "index":302,
            "word":"回來",
            "sound":"huílái",
            "level":"Level 1",
            "class":"(VA)",
            "explain":"to come back"
        },
        {  
            "index":90,
            "word":"告訴",
            "sound":"gàosù",
            "level":"Level 1",
            "class":"(VA)",
            "explain":"to tell, to inform"
        },
        {  
            "index":166,
            "word":"小時",
            "sound":"xiǎoshí",
            "level":"Level 1",
            "class":"(N)",
            "explain":"hour"
        }
        ]
    },
    {  
        "index":2,
        "questionWord":{  
        "index":57,
        "word":"洗澡",
        "sound":"xǐzǎo",
        "level":"Level 1",
        "class":"(VA)",
        "explain":"to take a bath or shower"
        },
        "answers":[  
        {  
            "index":57,
            "word":"洗澡",
            "sound":"xǐzǎo",
            "level":"Level 1",
            "class":"(VA)",
            "explain":"to take a bath or shower"
        },
        {  
            "index":140,
            "word":"山",
            "sound":"shān",
            "level":"Level 1",
            "class":"(N)",
            "explain":"mountain"
        },
        {  
            "index":348,
            "word":"手",
            "sound":"shǒu",
            "level":"Level 1",
            "class":"(N)",
            "explain":"hand"
        },
        {  
            "index":146,
            "word":"公司",
            "sound":"gōngsī",
            "level":"Level 1",
            "class":"(N)",
            "explain":"company"
        }
        ]
    },
    {  
        "index":3,
        "questionWord":{  
        "index":416,
        "word":"西(邊)",
        "sound":"xī(biān)",
        "level":"Level 1",
        "class":"(N)",
        "explain":"west"
        },
        "answers":[  
        {  
            "index":364,
            "word":"今天",
            "sound":"jīntiān",
            "level":"Level 1",
            "class":"(N)",
            "explain":"today"
        },
        {  
            "index":114,
            "word":"家人",
            "sound":"jiārén",
            "level":"Level 1",
            "class":"(N)",
            "explain":"family members"
        },
        {  
            "index":416,
            "word":"西(邊)",
            "sound":"xī(biān)",
            "level":"Level 1",
            "class":"(N)",
            "explain":"west"
        },
        {  
            "index":459,
            "word":"感冒",
            "sound":"gǎnmào",
            "level":"Level 1",
            "class":"(VS)",
            "explain":"to have a cold; cold, flu"
        }
        ]
    },
    {  
        "index":4,
        "questionWord":{  
        "index":14,
        "word":"酒",
        "sound":"jiǔ",
        "level":"Level 1",
        "class":"(N)",
        "explain":"wine or liquor"
        },
        "answers":[  
        {  
            "index":139,
            "word":"考試",
            "sound":"kǎoshì",
            "level":"Level 1",
            "class":"(VA)",
            "explain":"to take a test"
        },
        {  
            "index":14,
            "word":"酒",
            "sound":"jiǔ",
            "level":"Level 1",
            "class":"(N)",
            "explain":"wine or liquor"
        },
        {  
            "index":367,
            "word":"吃",
            "sound":"chī",
            "level":"Level 1",
            "class":"(VA)",
            "explain":"to eat"
        },
        {  
            "index":41,
            "word":"被",
            "sound":"bèi",
            "level":"Level 1",
            "class":"(Prep)",
            "explain":"a passive voice indicator"
        }
        ]
    },
    {  
        "index":5,
        "questionWord":{  
        "index":141,
        "word":"結束",
        "sound":"jiéshù",
        "level":"Level 1",
        "class":"(VS)",
        "explain":"to end, close, conclude"
        },
        "answers":[  
        {  
            "index":30,
            "word":"教室",
            "sound":"jiàoshì",
            "level":"Level 1",
            "class":"(N)",
            "explain":"classroom"
        },
        {  
            "index":461,
            "word":"狗",
            "sound":"gǒu",
            "level":"Level 1",
            "class":"(N)",
            "explain":"dog"
        },
        {  
            "index":88,
            "word":"再",
            "sound":"zài",
            "level":"Level 1",
            "class":"(Adv)",
            "explain":"again, then"
        },
        {  
            "index":141,
            "word":"結束",
            "sound":"jiéshù",
            "level":"Level 1",
            "class":"(VS)",
            "explain":"to end, close, conclude"
        }
        ]
    }
];
export const MOCK_QUIZ_RESULT = 
[  
    {  
      "index":1,
      "questionWord":{  
        "index":42,
        "word":"難",
        "sound":"nán",
        "level":"Level 1",
        "class":"(VS)",
        "explain":"to be difficult"
      },
      "answers":[  
        {  
          "index":109,
          "word":"大樓",
          "sound":"dàlóu",
          "level":"Level 1",
          "class":"(N)",
          "explain":"multi-storied building"
        },
        {  
          "index":162,
          "word":"便宜",
          "sound":"piányi",
          "level":"Level 1",
          "class":"(VS)",
          "explain":"to be cheap"
        },
        {  
          "index":10,
          "word":"腳踏車/自行車",
          "sound":"jiǎotàchē/zìxíngchē",
          "level":"Level 1",
          "class":"(N)",
          "explain":"bicycle"
        },
        {  
          "index":42,
          "word":"難",
          "sound":"nán",
          "level":"Level 1",
          "class":"(VS)",
          "explain":"to be difficult"
        }
      ],
      "selectedWordIndex":42,
      "isAnswerCorrect":true
    },
    {  
      "index":2,
      "questionWord":{  
        "index":307,
        "word":"最",
        "sound":"zuì",
        "level":"Level 1",
        "class":"(Adv)",
        "explain":"the most, -est"
      },
      "answers":[  
        {  
          "index":314,
          "word":"好",
          "sound":"hǎo",
          "level":"Level 1",
          "class":"(VS)",
          "explain":"to be good"
        },
        {  
          "index":103,
          "word":"上班",
          "sound":"shàngbān",
          "level":"Level 1",
          "class":"(VA)",
          "explain":"to begin work, to start work, to go to work"
        },
        {  
          "index":497,
          "word":"更",
          "sound":"gèng",
          "level":"Level 1",
          "class":"(Adv)",
          "explain":"even more, still more"
        },
        {  
          "index":307,
          "word":"最",
          "sound":"zuì",
          "level":"Level 1",
          "class":"(Adv)",
          "explain":"the most, -est"
        }
      ],
      "selectedWordIndex":314,
      "isAnswerCorrect":false
    },
    {  
      "index":3,
      "questionWord":{  
        "index":491,
        "word":"(飛)機場",
        "sound":"(fēi)jīchǎng",
        "level":"Level 1",
        "class":"(N)",
        "explain":"airport"
      },
      "answers":[  
        {  
          "index":491,
          "word":"(飛)機場",
          "sound":"(fēi)jīchǎng",
          "level":"Level 1",
          "class":"(N)",
          "explain":"airport"
        },
        {  
          "index":27,
          "word":"小姐",
          "sound":"xiǎojiě",
          "level":"Level 1",
          "class":"(N)",
          "explain":"Miss"
        },
        {  
          "index":184,
          "word":"有點(兒)",
          "sound":"yǒudiǎn(ér)",
          "level":"Level 1",
          "class":"(Adv)",
          "explain":"somewhat, rather, a bit"
        },
        {  
          "index":87,
          "word":"太太",
          "sound":"tàitài",
          "level":"Level 1",
          "class":"(N)",
          "explain":"Mrs, wife"
        }
      ],
      "selectedWordIndex":491,
      "isAnswerCorrect":true
    },
    {  
      "index":4,
      "questionWord":{  
        "index":236,
        "word":"每",
        "sound":"měi",
        "level":"Level 1",
        "class":"(Det)",
        "explain":"every"
      },
      "answers":[  
        {  
          "index":285,
          "word":"一些",
          "sound":"yìxiē",
          "level":"Level 1",
          "class":"(Det)",
          "explain":"some"
        },
        {  
          "index":129,
          "word":"可是",
          "sound":"kěshì",
          "level":"Level 1",
          "class":"(Conj)",
          "explain":"but, however"
        },
        {  
          "index":236,
          "word":"每",
          "sound":"měi",
          "level":"Level 1",
          "class":"(Det)",
          "explain":"every"
        },
        {  
          "index":196,
          "word":"下雨",
          "sound":"xiàyǔ",
          "level":"Level 1",
          "class":"(VA)",
          "explain":"to rain"
        }
      ],
      "selectedWordIndex":236,
      "isAnswerCorrect":true
    },
    {  
      "index":5,
      "questionWord":{  
        "index":124,
        "word":"漂亮",
        "sound":"piāoliàng",
        "level":"Level 1",
        "class":"(VS)",
        "explain":"to be beautiful, to be pretty"
      },
      "answers":[  
        {  
          "index":33,
          "word":"床",
          "sound":"chuáng",
          "level":"Level 1",
          "class":"(N)",
          "explain":"bed"
        },
        {  
          "index":124,
          "word":"漂亮",
          "sound":"piāoliàng",
          "level":"Level 1",
          "class":"(VS)",
          "explain":"to be beautiful, to be pretty"
        },
        {  
          "index":66,
          "word":"暑假",
          "sound":"shǔjià",
          "level":"Level 1",
          "class":"(N)",
          "explain":"summer vacation"
        },
        {  
          "index":310,
          "word":"熱鬧",
          "sound":"rènào",
          "level":"Level 1",
          "class":"(VS)",
          "explain":"to be lively, to be fun, to be bustling with noise"
        }
      ],
      "selectedWordIndex":33,
      "isAnswerCorrect":false
    }
];

export const MOCK_QUIZ_SCORE = 
{  
    "score":3,
    "totalWords":5,
    "date":"2018-03-30T06:23:58.009Z",
    "level":1,
    "correctAnsweredWords":[  
      {  
        "index":42,
        "word":"難",
        "sound":"nán",
        "level":"Level 1",
        "class":"(VS)",
        "explain":"to be difficult"
      },
      {  
        "index":491,
        "word":"(飛)機場",
        "sound":"(fēi)jīchǎng",
        "level":"Level 1",
        "class":"(N)",
        "explain":"airport"
      },
      {  
        "index":236,
        "word":"每",
        "sound":"měi",
        "level":"Level 1",
        "class":"(Det)",
        "explain":"every"
      }
    ],
    "incorrectAnsweredWords":[  
      {  
        "index":307,
        "word":"最",
        "sound":"zuì",
        "level":"Level 1",
        "class":"(Adv)",
        "explain":"the most, -est"
      },
      {  
        "index":124,
        "word":"漂亮",
        "sound":"piāoliàng",
        "level":"Level 1",
        "class":"(VS)",
        "explain":"to be beautiful, to be pretty"
      }
    ]
};