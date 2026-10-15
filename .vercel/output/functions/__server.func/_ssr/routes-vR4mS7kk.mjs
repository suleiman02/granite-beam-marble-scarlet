import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ListOrdered, c as GraduationCap, d as Check, f as BookOpen, i as RotateCcw, l as Flag, n as Star, o as Languages, r as Search, s as Landmark, u as Copy } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-vR4mS7kk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		id: "greetings",
		label: "Greetings"
	},
	{
		id: "questions",
		label: "Questions"
	},
	{
		id: "people",
		label: "People"
	},
	{
		id: "family",
		label: "Family"
	},
	{
		id: "body",
		label: "Body"
	},
	{
		id: "actions",
		label: "Actions"
	},
	{
		id: "home",
		label: "Home & land"
	},
	{
		id: "food",
		label: "Food"
	},
	{
		id: "animals",
		label: "Animals"
	},
	{
		id: "nature",
		label: "Sky & nature"
	},
	{
		id: "time",
		label: "Time"
	},
	{
		id: "numbers",
		label: "Numbers"
	},
	{
		id: "faith",
		label: "Faith"
	},
	{
		id: "words",
		label: "Useful words"
	}
];
var LEXICON = [
	{
		id: "hello",
		en: "Hello",
		bn: "Oku",
		alt: "Oku o",
		keys: [
			"hi",
			"hey",
			"greetings"
		],
		category: "greetings",
		kind: "phrase",
		note: "Oku opens almost every greeting. The reply is Oku as well."
	},
	{
		id: "morning",
		en: "Good morning",
		bn: "Oku be lazhin nyi",
		alt: "Kube lazhin",
		keys: ["morning"],
		category: "greetings",
		kind: "phrase",
		note: "Used until about mid-morning. Lazhin is the morning."
	},
	{
		id: "afternoon",
		en: "Good afternoon",
		bn: "Oku be yigidi nyi",
		alt: "Kube yigidi",
		keys: [
			"afternoon",
			"noon",
			"midday"
		],
		category: "greetings",
		kind: "phrase",
		note: "Yigidi is the sun. This greeting covers the bright middle of the day."
	},
	{
		id: "evening",
		en: "Good evening",
		bn: "Oku be lozun nyi",
		alt: "Kube lozun",
		keys: ["evening"],
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "night",
		en: "Good night",
		bn: "Sayi lazhin",
		keys: ["night", "sleep well"],
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "welcome",
		en: "Welcome",
		bn: "Oku be bo nyi",
		keys: ["welcome", "arrival"],
		category: "greetings",
		kind: "phrase",
		note: "A greeting for someone arriving. The reply is Oku be mi nyi."
	},
	{
		id: "welcome-reply",
		en: "Reply to welcome",
		bn: "Oku be mi nyi",
		category: "greetings",
		kind: "phrase",
		note: "Also said to someone who is at home."
	},
	{
		id: "greet-work",
		en: "Greeting someone at work",
		bn: "Oku be tun nyi",
		alt: "Gawama",
		keys: ["work", "working"],
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "greet-after-work",
		en: "Greeting after work",
		bn: "Oku be bo nyi tun",
		keys: ["tired", "finished work"],
		category: "greetings",
		kind: "phrase",
		note: "For someone who has finished working."
	},
	{
		id: "greet-sitting",
		en: "Greeting someone sitting",
		bn: "Oku be dunfe nyi",
		keys: ["sitting", "seated"],
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "greet-journey",
		en: "Safe journey",
		bn: "Oku be zan nyi",
		keys: [
			"journey",
			"travel",
			"goodbye trip"
		],
		category: "greetings",
		kind: "phrase",
		note: "Said to a person setting out on a journey."
	},
	{
		id: "long-time",
		en: "It has been a while",
		bn: "Oku be fo guba nyi",
		keys: ["long time", "two days"],
		category: "greetings",
		kind: "phrase",
		note: "Literally a greeting for two days — used after an absence. Guba is two."
	},
	{
		id: "greet-cold",
		en: "Greeting in the cold or wind",
		bn: "Oku be fe nyi",
		keys: ["cold", "wind"],
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "greet-heat",
		en: "Greeting in the heat",
		bn: "Oku be banagun nyi",
		keys: ["heat", "hot"],
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "greet-rain",
		en: "Greeting in the rain",
		bn: "Oku be bayeko nyi",
		keys: ["rain", "damp"],
		category: "greetings",
		kind: "phrase",
		note: "A greeting for damp, rainy weather — not a standalone word for rain."
	},
	{
		id: "greet-man",
		en: "Greeting a man",
		bn: "Zaki",
		keys: ["lion", "sir"],
		category: "greetings",
		kind: "phrase",
		note: "Literally “lion”. Men squat when greeting an elder."
	},
	{
		id: "greet-woman",
		en: "Greeting a woman",
		bn: "Nna",
		keys: ["madam", "ma"],
		category: "greetings",
		kind: "phrase",
		note: "Literally “mother”. Women kneel to greet."
	},
	{
		id: "how-are-you",
		en: "How are you?",
		bn: "Ke wun ra?",
		alt: "Ke wo wo na o?",
		keys: ["how are you", "how do you do"],
		category: "questions",
		kind: "phrase"
	},
	{
		id: "i-am-fine",
		en: "I am fine",
		bn: "Mo den ge",
		keys: [
			"i am well",
			"fine",
			"i'm fine",
			"i am good"
		],
		category: "greetings",
		kind: "phrase",
		note: "Ge means good. A fuller reply is Mo den ge sanyi — I am doing well."
	},
	{
		id: "i-am-great",
		en: "I am doing well",
		bn: "Mo den ge sanyi",
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "thanks",
		en: "Thank you",
		bn: "Kubetun",
		alt: "Kubechi",
		keys: ["thanks", "thankyou"],
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "please",
		en: "Please / excuse me / I am sorry",
		bn: "Gafara",
		keys: [
			"please",
			"sorry",
			"excuse me",
			"pardon"
		],
		category: "greetings",
		kind: "phrase",
		note: "Gafara is the courtesy word used across Nupe-speaking towns, including Bassa-Nge."
	},
	{
		id: "sit",
		en: "Have a seat",
		bn: "Fedun bosoko o",
		keys: ["sit down", "be seated"],
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "goodbye",
		en: "Goodbye",
		bn: "Eh da e cin",
		keys: ["bye", "farewell"],
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "see-later",
		en: "See you later",
		bn: "Sayi eka degi",
		alt: "A ni ye ga dagi",
		keys: ["later", "see you"],
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "you-are-welcome",
		en: "You are welcome",
		bn: "Kube ebo e",
		keys: ["welcome response", "don't mention it"],
		category: "greetings",
		kind: "phrase"
	},
	{
		id: "god-bless",
		en: "God bless you",
		bn: "Soko a ya we na kpe",
		keys: ["bless you", "blessing"],
		category: "faith",
		kind: "phrase"
	},
	{
		id: "god-good",
		en: "God is good",
		bn: "Soko ge",
		category: "faith",
		kind: "phrase"
	},
	{
		id: "come-here",
		en: "Come here",
		bn: "Be nana",
		keys: ["come"],
		category: "actions",
		kind: "phrase"
	},
	{
		id: "going-home",
		en: "I am going home",
		bn: "Mo lo kpa",
		keys: ["going home", "i'm going home"],
		category: "home",
		kind: "phrase",
		note: "In phrases, kpa is home. Emi is the house or building itself."
	},
	{
		id: "welcome-home",
		en: "Welcome home",
		bn: "Oku kpa",
		category: "home",
		kind: "phrase"
	},
	{
		id: "dont-know",
		en: "I don't know",
		bn: "Mo kpe nni",
		keys: ["i do not know"],
		category: "actions",
		kind: "phrase",
		note: "Nni at the end turns the sentence negative."
	},
	{
		id: "dont-want",
		en: "I don't want",
		bn: "Mo wan nni",
		keys: ["i do not want"],
		category: "actions",
		kind: "phrase"
	},
	{
		id: "your-name",
		en: "What is your name?",
		bn: "Ki eyi wo nyi o?",
		alt: "Ke den sun wo nni?",
		keys: [
			"name",
			"what's your name",
			"what is your name"
		],
		category: "questions",
		kind: "phrase"
	},
	{
		id: "where-going",
		en: "Where are you going?",
		bn: "Be we lo ra?",
		alt: "Babo wo e lo?",
		keys: ["where to", "where are you going"],
		category: "questions",
		kind: "phrase"
	},
	{
		id: "where-are-you",
		en: "Where are you?",
		bn: "We den bee?",
		category: "questions",
		kind: "phrase"
	},
	{
		id: "where-live",
		en: "Where do you live?",
		bn: "Bee we den nni?",
		keys: ["where do you stay", "address"],
		category: "questions",
		kind: "phrase"
	},
	{
		id: "what-this",
		en: "What is this?",
		bn: "Ke den nana nni?",
		keys: ["what is this", "what's this"],
		category: "questions",
		kind: "phrase"
	},
	{
		id: "i-love-you",
		en: "I love you",
		bn: "Mo ye nwu",
		keys: ["love you", "i love you"],
		category: "family",
		kind: "phrase",
		note: "Ye also means “see”, on a different tone. Tone changes the meaning."
	},
	{
		id: "love-too",
		en: "I love you too",
		bn: "Mo ye nwu ga",
		category: "family",
		kind: "phrase"
	},
	{
		id: "you-beautiful",
		en: "You are beautiful",
		bn: "We ge dede",
		keys: ["beautiful", "handsome"],
		category: "words",
		kind: "phrase"
	},
	{
		id: "it-is-okay",
		en: "It is okay",
		bn: "Wun ge",
		keys: [
			"okay",
			"alright",
			"it's fine"
		],
		category: "words",
		kind: "phrase"
	},
	{
		id: "at-noon",
		en: "At noon",
		bn: "Be yigidi",
		category: "time",
		kind: "phrase"
	},
	{
		id: "why-not",
		en: "Why not?",
		bn: "Ki a kan o?",
		category: "questions",
		kind: "phrase"
	},
	{
		id: "never-mind",
		en: "Never mind",
		bn: "Ga gansun ma",
		category: "words",
		kind: "phrase"
	},
	{
		id: "pron-i",
		en: "I / me",
		bn: "Mi",
		alt: "Mo",
		keys: ["i", "me"],
		category: "words",
		kind: "word",
		note: "Mo comes before a verb: Mo den ge. Mi is me."
	},
	{
		id: "pron-you",
		en: "You",
		bn: "Wo",
		alt: "We",
		keys: ["you"],
		category: "words",
		kind: "word"
	},
	{
		id: "pron-he",
		en: "He / she",
		bn: "Wu",
		alt: "Wun",
		keys: [
			"he",
			"she",
			"him",
			"her"
		],
		category: "words",
		kind: "word"
	},
	{
		id: "pron-we",
		en: "We",
		bn: "Yi",
		keys: ["we", "us"],
		category: "words",
		kind: "word"
	},
	{
		id: "pron-they",
		en: "They",
		bn: "A",
		keys: ["they", "them"],
		category: "words",
		kind: "word"
	},
	{
		id: "yes",
		en: "Yes",
		bn: "Oo",
		alt: "A",
		keys: ["yes", "yeah"],
		category: "words",
		kind: "word",
		note: "Short answers differ by village. Inside a sentence, agreement is often just tone and Oku."
	},
	{
		id: "no",
		en: "No",
		bn: "Aa",
		keys: ["no", "nope"],
		category: "words",
		kind: "word",
		note: "To negate a verb, speakers usually add nni: Mo wan nni."
	},
	{
		id: "not",
		en: "Not (at the end of a sentence)",
		bn: "Nni",
		keys: [
			"not",
			"don't",
			"do not"
		],
		category: "words",
		kind: "word"
	},
	{
		id: "good",
		en: "Good",
		bn: "Ge",
		keys: [
			"good",
			"well",
			"fine"
		],
		category: "words",
		kind: "word"
	},
	{
		id: "this",
		en: "This",
		bn: "Nana",
		keys: ["this"],
		category: "words",
		kind: "word"
	},
	{
		id: "all",
		en: "All",
		bn: "Kpata",
		keys: [
			"all",
			"everything",
			"completely"
		],
		category: "words",
		kind: "word"
	},
	{
		id: "true",
		en: "True",
		bn: "Akika",
		keys: ["true", "truth"],
		category: "words",
		kind: "word"
	},
	{
		id: "big",
		en: "Big",
		bn: "Kpaku",
		keys: ["big", "large"],
		category: "words",
		kind: "word"
	},
	{
		id: "small",
		en: "Small",
		bn: "Kori",
		keys: ["small", "little"],
		category: "words",
		kind: "word"
	},
	{
		id: "short",
		en: "Short",
		bn: "Kolu",
		keys: ["short"],
		category: "words",
		kind: "word"
	},
	{
		id: "quickly",
		en: "Quickly",
		bn: "Kpasa",
		keys: [
			"quickly",
			"fast",
			"hurry"
		],
		category: "words",
		kind: "word"
	},
	{
		id: "who",
		en: "Who",
		bn: "Ze",
		alt: "Zi",
		keys: ["who"],
		category: "questions",
		kind: "word"
	},
	{
		id: "soko",
		en: "God",
		bn: "Soko",
		keys: ["god", "lord"],
		category: "faith",
		kind: "word",
		note: "Soko appears in Bassa-Nge names: Sarotasoko, Erewtasoko."
	},
	{
		id: "tsoci",
		en: "Owner of all",
		bn: "Tsoci",
		keys: ["owner", "creator"],
		category: "faith",
		kind: "word",
		note: "A praise name for God."
	},
	{
		id: "etsu",
		en: "King / chief",
		bn: "Etsu",
		keys: [
			"king",
			"chief",
			"ruler"
		],
		category: "people",
		kind: "word",
		note: "The Bassa-Nge chief is the Etsu. Ruling houses take turns."
	},
	{
		id: "bagi",
		en: "Man",
		bn: "Bagi",
		keys: ["man", "male"],
		category: "people",
		kind: "word"
	},
	{
		id: "nzagi",
		en: "Woman",
		bn: "Nzagi",
		keys: ["woman", "female"],
		category: "people",
		kind: "word"
	},
	{
		id: "eza",
		en: "Person",
		bn: "Eza",
		keys: [
			"person",
			"someone",
			"human"
		],
		category: "people",
		kind: "word"
	},
	{
		id: "baba",
		en: "Father",
		bn: "Baba",
		alt: "Nda",
		keys: [
			"father",
			"dad",
			"papa"
		],
		category: "family",
		kind: "word"
	},
	{
		id: "nna",
		en: "Mother",
		bn: "Nna",
		keys: [
			"mother",
			"mum",
			"mama",
			"mom"
		],
		category: "family",
		kind: "word"
	},
	{
		id: "egi",
		en: "Child",
		bn: "Egi",
		keys: [
			"child",
			"kid",
			"baby"
		],
		category: "family",
		kind: "word"
	},
	{
		id: "nyimi",
		en: "Wife",
		bn: "Nyimi",
		keys: ["wife"],
		category: "family",
		kind: "word"
	},
	{
		id: "roke",
		en: "Married woman",
		bn: "Roke",
		keys: ["married woman", "bride"],
		category: "family",
		kind: "word"
	},
	{
		id: "yebo",
		en: "Love",
		bn: "Yebo",
		keys: ["love"],
		category: "family",
		kind: "word"
	},
	{
		id: "mayemde",
		en: "I have my own",
		bn: "Mayemde",
		keys: [
			"mayemde",
			"ma'ade",
			"maade"
		],
		category: "family",
		kind: "word",
		note: "A Bassa-Nge name, shortened to Ma’ade. Given after a prayer for a child. Naming is on the eighth day."
	},
	{
		id: "sarotasoko",
		en: "God’s kingdom / God’s bosom",
		bn: "Sarotasoko",
		keys: ["sarotasoko"],
		category: "faith",
		kind: "word",
		note: "A Bassa-Nge personal name."
	},
	{
		id: "erewtasoko",
		en: "God’s gift",
		bn: "Erewtasoko",
		keys: ["erewtasoko", "gift of god"],
		category: "faith",
		kind: "word",
		note: "A Bassa-Nge personal name."
	},
	{
		id: "eti",
		en: "Head",
		bn: "Eti",
		keys: ["head"],
		category: "body",
		kind: "word"
	},
	{
		id: "nyagba",
		en: "Chest",
		bn: "Nyagba",
		keys: ["chest"],
		category: "body",
		kind: "word"
	},
	{
		id: "ebo",
		en: "Back",
		bn: "Ebo",
		keys: ["back"],
		category: "body",
		kind: "word"
	},
	{
		id: "aika",
		en: "Teeth",
		bn: "Aika",
		keys: ["teeth", "tooth"],
		category: "body",
		kind: "word"
	},
	{
		id: "bici",
		en: "Leg",
		bn: "Bici",
		keys: ["leg", "foot"],
		category: "body",
		kind: "word"
	},
	{
		id: "misun",
		en: "Mouth",
		bn: "Misun",
		alt: "Ena",
		keys: ["mouth"],
		category: "body",
		kind: "word",
		note: "Misun is the community spelling. Older dictionaries also record ena."
	},
	{
		id: "gbako",
		en: "Stomach",
		bn: "Gbako",
		keys: ["stomach", "belly"],
		category: "body",
		kind: "word"
	},
	{
		id: "egwa",
		en: "Hand",
		bn: "Egwa",
		keys: ["hand", "arm"],
		category: "body",
		kind: "word"
	},
	{
		id: "neck",
		en: "Neck",
		bn: "Koro",
		keys: ["neck"],
		category: "body",
		kind: "word",
		note: "A different tone is the navel. Do not guess the tone."
	},
	{
		id: "robo",
		en: "Throat",
		bn: "Robo",
		keys: ["throat"],
		category: "body",
		kind: "word"
	},
	{
		id: "emi",
		en: "House",
		bn: "Emi",
		keys: [
			"house",
			"home",
			"building"
		],
		category: "home",
		kind: "word",
		note: "The building. “Home” in “I am going home” is kpa."
	},
	{
		id: "kpa",
		en: "Home (in phrases)",
		bn: "Kpa",
		keys: ["home"],
		category: "home",
		kind: "word"
	},
	{
		id: "kata",
		en: "Room",
		bn: "Kata",
		keys: ["room"],
		category: "home",
		kind: "word"
	},
	{
		id: "ezhi",
		en: "Village",
		bn: "Ezhi",
		keys: ["village", "town"],
		category: "home",
		kind: "word"
	},
	{
		id: "patti",
		en: "Mountain",
		bn: "Patti",
		keys: [
			"mountain",
			"hill",
			"rock"
		],
		category: "home",
		kind: "word"
	},
	{
		id: "edu",
		en: "River",
		bn: "Edu",
		keys: ["river", "niger"],
		category: "nature",
		kind: "word",
		note: "Bassa-Nge towns sit by the Niger and its creeks. Travel between villages was often by canoe."
	},
	{
		id: "edi",
		en: "Stream",
		bn: "Edi",
		keys: ["stream", "creek"],
		category: "nature",
		kind: "word"
	},
	{
		id: "nuwon",
		en: "Water",
		bn: "Nuwon",
		alt: "Nuwan",
		keys: ["water"],
		category: "nature",
		kind: "word"
	},
	{
		id: "nyagici",
		en: "Food",
		bn: "Nyagici",
		keys: ["food", "meal"],
		category: "food",
		kind: "word"
	},
	{
		id: "roma",
		en: "Soup / broth",
		bn: "Roma",
		keys: [
			"soup",
			"broth",
			"stew"
		],
		category: "food",
		kind: "word"
	},
	{
		id: "rogo",
		en: "Cassava",
		bn: "Rogo",
		keys: ["cassava"],
		category: "food",
		kind: "word"
	},
	{
		id: "kpanmi",
		en: "Okra",
		bn: "Kpanmi",
		keys: ["okra"],
		category: "food",
		kind: "word"
	},
	{
		id: "alubasa",
		en: "Onion",
		bn: "Alubasa",
		keys: ["onion"],
		category: "food",
		kind: "word"
	},
	{
		id: "konkeni",
		en: "Pawpaw",
		bn: "Konkeni",
		keys: ["pawpaw", "papaya"],
		category: "food",
		kind: "word"
	},
	{
		id: "konkoro",
		en: "Cocoyam",
		bn: "Konkoro",
		keys: ["cocoyam", "taro"],
		category: "food",
		kind: "word"
	},
	{
		id: "yengi",
		en: "Garden egg",
		bn: "Yengi",
		keys: [
			"garden egg",
			"eggplant",
			"aubergine"
		],
		category: "food",
		kind: "word"
	},
	{
		id: "donci",
		en: "Mortar",
		bn: "Donci",
		keys: ["mortar"],
		category: "food",
		kind: "word",
		note: "At a traditional wedding the bride was bathed in a mortar, a sign she was leaving single life."
	},
	{
		id: "etun",
		en: "Pestle",
		bn: "Etun",
		keys: ["pestle"],
		category: "food",
		kind: "word"
	},
	{
		id: "daro",
		en: "Kettle",
		bn: "Daro",
		keys: ["kettle"],
		category: "food",
		kind: "word"
	},
	{
		id: "kpankuru",
		en: "Edible snail",
		bn: "Kpankuru",
		keys: ["snail"],
		category: "food",
		kind: "word"
	},
	{
		id: "nanko",
		en: "Cow",
		bn: "Nanko",
		keys: ["cow", "cattle"],
		category: "animals",
		kind: "word"
	},
	{
		id: "dagba",
		en: "Elephant",
		bn: "Dagba",
		keys: ["elephant"],
		category: "animals",
		kind: "word"
	},
	{
		id: "adintsu",
		en: "Rat",
		bn: "Adintsu",
		keys: ["rat"],
		category: "animals",
		kind: "word"
	},
	{
		id: "araara",
		en: "Ram",
		bn: "Araara",
		keys: ["ram", "sheep"],
		category: "animals",
		kind: "word"
	},
	{
		id: "kparo",
		en: "Partridge",
		bn: "Kparo",
		keys: ["partridge", "bird"],
		category: "animals",
		kind: "word"
	},
	{
		id: "rakun",
		en: "Camel",
		bn: "Rakun",
		keys: ["camel"],
		category: "animals",
		kind: "word"
	},
	{
		id: "zaki-animal",
		en: "Lion",
		bn: "Zaki",
		keys: ["lion"],
		category: "animals",
		kind: "word",
		note: "Also a greeting for a man."
	},
	{
		id: "yigidi",
		en: "Sun",
		bn: "Yigidi",
		keys: ["sun"],
		category: "nature",
		kind: "word"
	},
	{
		id: "etswa",
		en: "Moon",
		bn: "Etswa",
		alt: "Twangi",
		keys: ["moon"],
		category: "nature",
		kind: "word",
		note: "Etswa is the usual word. Some speakers also say Twangi."
	},
	{
		id: "tswangi",
		en: "Star",
		bn: "Tswangi",
		keys: ["star"],
		category: "nature",
		kind: "word"
	},
	{
		id: "lazhi",
		en: "Morning",
		bn: "Lazhi",
		alt: "Lazhin",
		keys: ["morning"],
		category: "time",
		kind: "word"
	},
	{
		id: "kpara",
		en: "Thunder",
		bn: "Kpara",
		keys: ["thunder"],
		category: "nature",
		kind: "word"
	},
	{
		id: "zanariya",
		en: "Gold",
		bn: "Zanariya",
		keys: ["gold"],
		category: "nature",
		kind: "word"
	},
	{
		id: "rayi",
		en: "Life",
		bn: "Rayi",
		keys: ["life"],
		category: "words",
		kind: "word"
	},
	{
		id: "ewo",
		en: "Money",
		bn: "Ewo",
		keys: [
			"money",
			"cash",
			"price"
		],
		category: "words",
		kind: "word"
	},
	{
		id: "yetu",
		en: "Hope",
		bn: "Yetu",
		keys: ["hope"],
		category: "words",
		kind: "word"
	},
	{
		id: "albarika",
		en: "Blessing",
		bn: "Albarika",
		keys: ["blessing"],
		category: "faith",
		kind: "word"
	},
	{
		id: "alada",
		en: "Custom",
		bn: "Alada",
		keys: [
			"custom",
			"tradition",
			"culture"
		],
		category: "words",
		kind: "word"
	},
	{
		id: "asiri",
		en: "Secret",
		bn: "Asiri",
		keys: ["secret"],
		category: "words",
		kind: "word"
	},
	{
		id: "alamu",
		en: "Idea",
		bn: "Alamu",
		keys: ["idea"],
		category: "words",
		kind: "word"
	},
	{
		id: "zawoya",
		en: "Kindness",
		bn: "Zawoya",
		keys: ["kindness", "kind"],
		category: "words",
		kind: "word"
	},
	{
		id: "asara",
		en: "Loss",
		bn: "Asara",
		keys: ["loss"],
		category: "words",
		kind: "word"
	},
	{
		id: "anfani",
		en: "Profit",
		bn: "Anfani",
		keys: ["profit", "gain"],
		category: "words",
		kind: "word"
	},
	{
		id: "ami",
		en: "Amen",
		bn: "Ami",
		keys: ["amen"],
		category: "faith",
		kind: "word"
	},
	{
		id: "anasara",
		en: "Christian",
		bn: "Anasara",
		keys: ["christian", "church person"],
		category: "faith",
		kind: "word"
	},
	{
		id: "koran",
		en: "The Koran",
		bn: "Alukoranu",
		keys: [
			"koran",
			"quran",
			"qur'an"
		],
		category: "faith",
		kind: "word"
	},
	{
		id: "sunday",
		en: "Sunday",
		bn: "Alade",
		keys: ["sunday"],
		category: "time",
		kind: "word"
	},
	{
		id: "thursday",
		en: "Thursday",
		bn: "Alami",
		keys: ["thursday"],
		category: "time",
		kind: "word"
	},
	{
		id: "saturday",
		en: "Saturday",
		bn: "Asibi",
		keys: ["saturday"],
		category: "time",
		kind: "word"
	},
	{
		id: "amali",
		en: "Judge",
		bn: "Amali",
		keys: ["judge"],
		category: "people",
		kind: "word"
	},
	{
		id: "v-go",
		en: "To go",
		bn: "Lo",
		keys: ["go", "going"],
		category: "actions",
		kind: "word"
	},
	{
		id: "v-come",
		en: "To come",
		bn: "Be",
		keys: ["come", "coming"],
		category: "actions",
		kind: "word"
	},
	{
		id: "v-see",
		en: "To see / to love",
		bn: "Ye",
		keys: ["see", "love"],
		category: "actions",
		kind: "word",
		note: "Same letters, different tone."
	},
	{
		id: "v-want",
		en: "To want",
		bn: "Wan",
		keys: ["want", "need"],
		category: "actions",
		kind: "word"
	},
	{
		id: "v-know",
		en: "To know",
		bn: "Kpe",
		keys: ["know"],
		category: "actions",
		kind: "word"
	},
	{
		id: "v-eat",
		en: "To eat",
		bn: "Gi",
		keys: ["eat", "eating"],
		category: "actions",
		kind: "word"
	},
	{
		id: "v-cook",
		en: "To cook",
		bn: "Din",
		keys: ["cook", "cooking"],
		category: "actions",
		kind: "word"
	},
	{
		id: "v-sing",
		en: "To sing",
		bn: "Kon",
		keys: ["sing", "song"],
		category: "actions",
		kind: "word"
	},
	{
		id: "v-finish",
		en: "To finish",
		bn: "Zo",
		keys: [
			"finish",
			"done",
			"complete"
		],
		category: "actions",
		kind: "word"
	},
	{
		id: "v-return",
		en: "To return",
		bn: "Zhin",
		keys: ["return", "come back"],
		category: "actions",
		kind: "word"
	},
	{
		id: "n1",
		n: 1,
		en: "One",
		bn: "Nini",
		keys: ["1"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n2",
		n: 2,
		en: "Two",
		bn: "Guba",
		keys: ["2"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n3",
		n: 3,
		en: "Three",
		bn: "Guta",
		keys: ["3"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n4",
		n: 4,
		en: "Four",
		bn: "Guni",
		keys: ["4"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n5",
		n: 5,
		en: "Five",
		bn: "Gutsun",
		keys: ["5"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n6",
		n: 6,
		en: "Six",
		bn: "Gutswanyi",
		keys: ["6"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n7",
		n: 7,
		en: "Seven",
		bn: "Gutwaba",
		keys: ["7"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n8",
		n: 8,
		en: "Eight",
		bn: "Gutota",
		keys: ["8"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n9",
		n: 9,
		en: "Nine",
		bn: "Gutwani",
		keys: ["9"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n10",
		n: 10,
		en: "Ten",
		bn: "Guwo",
		keys: ["10"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n11",
		n: 11,
		en: "Eleven",
		bn: "Guwo be nini",
		keys: ["11"],
		category: "numbers",
		kind: "word",
		note: "Ten and one."
	},
	{
		id: "n12",
		n: 12,
		en: "Twelve",
		bn: "Guwo be guba",
		keys: ["12"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n13",
		n: 13,
		en: "Thirteen",
		bn: "Guwo be guta",
		keys: ["13"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n14",
		n: 14,
		en: "Fourteen",
		bn: "Guwo be guni nyi",
		keys: ["14"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n15",
		n: 15,
		en: "Fifteen",
		bn: "Gwegi",
		keys: ["15"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n16",
		n: 16,
		en: "Sixteen",
		bn: "Gwegi be nini nyi",
		keys: ["16"],
		category: "numbers",
		kind: "word",
		note: "Fifteen and one."
	},
	{
		id: "n17",
		n: 17,
		en: "Seventeen",
		bn: "Gwegi be guba",
		keys: ["17"],
		category: "numbers",
		kind: "word"
	},
	{
		id: "n18",
		n: 18,
		en: "Eighteen",
		bn: "Eshi din guba",
		keys: ["18"],
		category: "numbers",
		kind: "word",
		note: "Twenty less two."
	},
	{
		id: "n19",
		n: 19,
		en: "Nineteen",
		bn: "Eshi din nini",
		keys: ["19"],
		category: "numbers",
		kind: "word",
		note: "Twenty less one."
	},
	{
		id: "n20",
		n: 20,
		en: "Twenty",
		bn: "Eshi",
		keys: ["20"],
		category: "numbers",
		kind: "word"
	}
];
var CATEGORY_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));
function entryById(id) {
	return LEXICON.find((e) => e.id === id);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var steps = [];
var crashes = [];
var installed = false;
function stamp() {
	return (/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	});
}
function trace(what) {
	steps.push({
		at: stamp(),
		what
	});
	if (steps.length > 16) steps.shift();
}
function rememberCrash(message) {
	const clean = message.replace(/\s+/g, " ").trim().slice(0, 400);
	if (!clean) return;
	crashes.push(`${stamp()} ${clean}`);
	if (crashes.length > 6) crashes.shift();
}
function installCrashCapture() {
	if (installed || typeof window === "undefined") return;
	installed = true;
	window.addEventListener("error", (event) => {
		rememberCrash(event.message || "Unknown error");
	});
	window.addEventListener("unhandledrejection", (event) => {
		const reason = event.reason;
		rememberCrash(reason instanceof Error ? reason.message : String(reason));
	});
}
function readTrace() {
	return {
		steps: steps.slice(),
		crashes: crashes.slice()
	};
}
function fold(value) {
	return value.toLowerCase().normalize("NFD").replace(/\p{M}/gu, "").replace(/[^a-z0-9\s'-]/g, " ").replace(/\s+/g, " ").trim();
}
function fieldsFor(entry, direction) {
	const bn = [entry.bn, entry.alt ?? ""];
	const en = [entry.en, ...entry.keys ?? []];
	if (direction === "en") return en;
	if (direction === "bn") return bn;
	return [...en, ...bn];
}
function scoreField(query, field) {
	const n = fold(field);
	if (!n) return 0;
	if (query.length < 2) return n === query ? 100 : 0;
	if (n === query) return 100;
	if (n.startsWith(query)) return 82;
	if (n.split(" ").includes(query)) return 74;
	if (n.includes(query)) return 56;
	const tokens = query.split(" ").filter((t) => t.length > 1);
	if (!tokens.length) return 0;
	const hits = tokens.filter((t) => n.includes(t)).length;
	if (hits === 0) return 0;
	return 18 + hits * 12 + (hits === tokens.length ? 10 : 0);
}
function searchEntries(query, direction) {
	const q = fold(query);
	if (!q) return [];
	return LEXICON.map((entry) => {
		let score = 0;
		for (const field of fieldsFor(entry, direction)) score = Math.max(score, scoreField(q, field));
		return {
			entry,
			score
		};
	}).filter((row) => row.score > 0).sort((a, b) => b.score - a.score || a.entry.en.localeCompare(b.entry.en) || a.entry.bn.localeCompare(b.entry.bn)).slice(0, 30).map((row) => row.entry);
}
function numbers() {
	return LEXICON.filter((e) => e.n != null).sort((a, b) => (a.n ?? 0) - (b.n ?? 0));
}
function quizPool() {
	const seenBn = /* @__PURE__ */ new Set();
	const seenEn = /* @__PURE__ */ new Set();
	return LEXICON.filter((entry) => {
		const bn = fold(entry.bn);
		const en = fold(entry.en);
		if (seenBn.has(bn) || seenEn.has(en)) return false;
		if (entry.bn.length > 42) return false;
		seenBn.add(bn);
		seenEn.add(en);
		return true;
	});
}
var PROMPTS = [
	"A translation looks wrong",
	"A word I need is missing",
	"Practice marked the wrong answer",
	"Something on the page broke"
];
function ProblemReport({ section, search, direction, topic, savedCount }) {
	const titleId = (0, import_react.useId)();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [happened, setHappened] = (0, import_react.useState)("");
	const [expected, setExpected] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		installCrashCapture();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		function onKey(event) {
			if (event.key === "Escape") setOpen(false);
		}
		window.addEventListener("keydown", onKey);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = previousOverflow;
		};
	}, [open]);
	function buildNote() {
		const { steps, crashes } = readTrace();
		return [
			"Bassa Nge — problem",
			`What happened: ${happened.trim() || "(not written)"}`,
			`What I expected: ${expected.trim() || "(not written)"}`,
			`Section: ${section}`,
			`Search: ${search || "(empty)"}`,
			`Direction: ${direction}`,
			`Topic: ${topic}`,
			`Saved words: ${savedCount}`,
			crashes.length ? `Errors:\n${crashes.map((line) => `- ${line}`).join("\n")}` : "Errors: none",
			steps.length ? `Recent steps:\n${steps.map((step) => `- ${step.at} ${step.what}`).join("\n")}` : "Recent steps: none"
		].join("\n");
	}
	async function copyNote(text) {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
		} catch {
			setCopied(false);
		}
	}
	function prepare() {
		const text = buildNote();
		setNote(text);
		setCopied(false);
		copyNote(text);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-line bg-sand p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "See a wrong word, a missing phrase, or a broken page? Write it down here, then paste the note into the chat."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => {
					setOpen(true);
					setCopied(false);
				},
				className: "mt-3 inline-flex h-11 items-center gap-2 rounded-full bg-river px-4 text-sm font-semibold text-sand hover:bg-clay focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Found a mistake?"]
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-40 flex items-end justify-center bg-ink/40 p-3 sm:items-center",
			onClick: () => setOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": titleId,
				className: "max-h-[min(40rem,calc(100dvh-1.5rem))] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-sand p-5 text-ink",
				onClick: (event) => event.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: titleId,
						className: "text-3xl text-river",
						children: "Tell me what went wrong"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-3 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Say what you did and what you expected." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tap “Make the note”. It copies if the page allows it." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Paste that note into the chat. One message is enough." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: PROMPTS.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setHappened(prompt),
							className: "h-10 rounded-full bg-bg px-3 text-sm font-semibold text-ink ring-1 ring-line hover:bg-river-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
							children: prompt
						}, prompt))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mt-4 block text-sm font-semibold",
						htmlFor: "problem-happened",
						children: "What happened?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "problem-happened",
						value: happened,
						onChange: (event) => setHappened(event.target.value),
						rows: 3,
						placeholder: "I looked up water and the Bassa-Nge word looked wrong.",
						className: "mt-1 w-full rounded-2xl border border-line bg-bg px-3 py-2 text-base text-ink outline-none placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mt-3 block text-sm font-semibold",
						htmlFor: "problem-expected",
						children: "What should it have been?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "problem-expected",
						value: expected,
						onChange: (event) => setExpected(event.target.value),
						rows: 2,
						placeholder: "The word should be … I heard it in Gboloko.",
						className: "mt-1 w-full rounded-2xl border border-line bg-bg px-3 py-2 text-base text-ink outline-none placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: prepare,
							className: "inline-flex h-11 items-center gap-2 rounded-full bg-clay px-4 text-sm font-semibold text-sand hover:bg-clay-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Note copied" : "Make the note"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(false),
							className: "h-11 rounded-full px-4 text-sm font-semibold text-ink ring-1 ring-line hover:bg-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
							children: "Close"
						})]
					}),
					note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Paste this into the chat"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							readOnly: true,
							value: note,
							rows: 8,
							className: "mt-1 w-full rounded-2xl border border-line bg-bg px-3 py-2 font-mono text-xs leading-relaxed text-ink",
							onFocus: (event) => event.currentTarget.select()
						})]
					}) : null
				]
			})
		}) : null]
	});
}
var SAVE_KEY = "bassa-nge-saved";
var BEST_KEY = "bassa-nge-best";
var ROUND = 8;
var MODES = [
	{
		id: "translate",
		label: "Translate",
		icon: Languages
	},
	{
		id: "topics",
		label: "Topics",
		icon: BookOpen
	},
	{
		id: "numbers",
		label: "Numbers",
		icon: ListOrdered
	},
	{
		id: "practice",
		label: "Practice",
		icon: GraduationCap
	},
	{
		id: "land",
		label: "The land",
		icon: Landmark
	},
	{
		id: "saved",
		label: "Saved",
		icon: Star
	}
];
function hourEntry() {
	const h = (/* @__PURE__ */ new Date()).getHours();
	return entryById(h < 11 ? "morning" : h < 16 ? "afternoon" : h < 21 ? "evening" : "night") ?? null;
}
function TranslatorApp() {
	const [mode, setMode] = (0, import_react.useState)("translate");
	const [query, setQuery] = (0, import_react.useState)("");
	const [direction, setDirection] = (0, import_react.useState)("both");
	const [topic, setTopic] = (0, import_react.useState)("greetings");
	const [saved, setSaved] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(null);
	const [greeting, setGreeting] = (0, import_react.useState)(null);
	const [openNumber, setOpenNumber] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(SAVE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed)) setSaved(parsed.filter((id) => typeof id === "string"));
			}
		} catch {}
		setGreeting(hourEntry());
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(SAVE_KEY, JSON.stringify(saved));
	}, [saved, ready]);
	const results = (0, import_react.useMemo)(() => searchEntries(query, direction), [query, direction]);
	function openMode(next) {
		trace(`Opened ${MODES.find((item) => item.id === next)?.label ?? next}`);
		setMode(next);
	}
	function toggleSave(id) {
		setSaved((prev) => {
			const on = prev.includes(id);
			trace(on ? `Unsaved ${id}` : `Saved ${id}`);
			return on ? prev.filter((x) => x !== id) : [id, ...prev];
		});
	}
	async function copyEntry(entry) {
		const text = `${entry.bn} — ${entry.en}`;
		try {
			await navigator.clipboard.writeText(text);
			setCopied(entry.id);
			window.setTimeout(() => setCopied((cur) => cur === entry.id ? null : cur), 1400);
		} catch {
			trace(`Could not copy ${entry.id}`);
			setCopied(null);
		}
	}
	const savedEntries = saved.map((id) => entryById(id)).filter((e) => Boolean(e));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line bg-sand",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-3xl items-start gap-3 px-4 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 grid size-11 shrink-0 place-items-center rounded-2xl bg-river text-sand",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block h-5 w-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 28 20",
								className: "h-full w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M1 14c4-6 6-6 9-1s5 5 9 0 5-5 8-1",
									fill: "none",
									className: "text-sand",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M1 8c4-6 6-6 9-1s5 5 9 0 5-5 8-1",
									fill: "none",
									className: "text-clay",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round"
								})]
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-clay uppercase",
								children: "Kogi State · Nupe-Tako"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl leading-none text-river",
								children: "Bassa Nge"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-base leading-relaxed text-muted",
								children: "English and the language of the Bassa-Nge people — Nupe as spoken below the Niger, in Bassa, Koton Karfe, and Lokoja."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mx-auto flex max-w-3xl flex-wrap gap-2 px-4 pb-4",
					"aria-label": "Sections",
					children: MODES.map((item) => {
						const Icon = item.icon;
						const active = mode === item.id;
						const count = item.id === "saved" ? saved.length : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => openMode(item.id),
							className: cn("inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay", active ? "bg-river text-sand" : "bg-bg text-ink hover:bg-river-soft"),
							"aria-current": active ? "page" : void 0,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4",
									"aria-hidden": "true"
								}),
								item.label,
								item.id === "saved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("tabular-nums", active ? "text-sand" : "text-muted"),
									children: count
								}) : null
							]
						}, item.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-3xl px-4 py-5 pb-16",
				children: [
					mode === "translate" || mode === "topics" || mode === "numbers" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
						query,
						direction,
						onQuery: setQuery,
						onDirection: setDirection
					}) : null,
					mode === "translate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TranslatePane, {
						query,
						results,
						greeting,
						saved,
						copied,
						onCopy: copyEntry,
						onSave: toggleSave
					}) : null,
					mode === "topics" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopicsPane, {
						topic,
						onTopic: setTopic,
						query,
						direction,
						saved,
						copied,
						onCopy: copyEntry,
						onSave: toggleSave
					}) : null,
					mode === "numbers" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumbersPane, {
						query,
						open: openNumber,
						onOpen: setOpenNumber,
						saved,
						copied,
						onCopy: copyEntry,
						onSave: toggleSave
					}) : null,
					mode === "practice" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PracticePane, {}) : null,
					mode === "land" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandPane, { onJump: (id) => {
						const entry = entryById(id);
						if (!entry) return;
						setQuery(entry.en);
						openMode("translate");
					} }) : null,
					mode === "saved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavedPane, {
						entries: savedEntries,
						saved,
						copied,
						onCopy: copyEntry,
						onSave: toggleSave
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProblemReport, {
				section: MODES.find((item) => item.id === mode)?.label ?? mode,
				search: query.trim(),
				direction: direction === "en" ? "English to Bassa-Nge" : direction === "bn" ? "Bassa-Nge to English" : "Either language",
				topic: mode === "topics" ? topic === "all" ? "All topics" : CATEGORY_LABEL[topic] : "not in Topics",
				savedCount: saved.length
			})
		]
	});
}
function SearchBar({ query, direction, onQuery, onDirection }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "lookup",
				className: "mb-2 block text-sm font-semibold text-ink",
				children: "Look up a word or phrase"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "lookup",
					value: query,
					onChange: (event) => onQuery(event.target.value),
					placeholder: "Try water, oku, thank you, etsu…",
					className: "h-12 w-full rounded-2xl border border-line bg-sand pr-4 pl-11 text-base text-ink outline-none placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
					autoComplete: "off",
					enterKeyHint: "search"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Search direction",
				children: [
					["both", "Either language"],
					["en", "English → Bassa-Nge"],
					["bn", "Bassa-Nge → English"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onDirection(id),
					className: cn("h-10 rounded-full px-3 text-sm font-semibold transition-colors", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay", direction === id ? "bg-clay text-sand" : "bg-sand text-ink ring-1 ring-line"),
					"aria-pressed": direction === id,
					children: label
				}, id))
			})
		]
	});
}
function EntryCard({ entry, saved, copied, onCopy, onSave, featured }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("rounded-2xl border border-line bg-sand p-4", featured && "bg-river text-sand"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("font-display text-2xl leading-tight", featured ? "text-sand" : "text-river"),
						children: entry.bn
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-1 text-base", featured ? "text-sand" : "text-ink"),
						children: entry.en
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onCopy,
						className: cn("grid size-11 place-items-center rounded-full transition-colors", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay", featured ? "text-sand hover:bg-clay" : "text-ink hover:bg-bg"),
						"aria-label": copied ? "Copied" : `Copy ${entry.bn}`,
						children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onSave,
						className: cn("grid size-11 place-items-center rounded-full transition-colors", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay", featured ? "text-sand hover:bg-clay" : "text-ink hover:bg-bg"),
						"aria-pressed": saved,
						"aria-label": saved ? `Remove ${entry.en} from saved` : `Save ${entry.en}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-5", saved && "fill-current", saved && (featured ? "text-sand" : "text-clay")) })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("rounded-full px-2.5 py-1 text-xs font-semibold", featured ? "bg-sand text-river" : "bg-gold-soft text-ink"),
					children: CATEGORY_LABEL[entry.category]
				}), entry.alt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("text-sm", featured ? "text-sand" : "text-muted"),
					children: ["Also ", entry.alt]
				}) : null]
			}),
			entry.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-2 text-sm leading-relaxed", featured ? "text-sand" : "text-muted"),
				children: entry.note
			}) : null
		]
	});
}
function TranslatePane({ query, results, greeting, saved, copied, onCopy, onSave }) {
	const trimmed = query.trim();
	if (!trimmed) {
		const starters = [
			"how-are-you",
			"thanks",
			"nuwon",
			"etsu",
			"i-love-you"
		].map((id) => entryById(id)).filter((e) => Boolean(e));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-2xl bg-river-soft px-4 py-3 text-sm leading-relaxed text-river",
					children: "This book only shows words it actually has. If a line is missing, it will say so — it will not invent Bassa-Nge. Tone changes meaning, and villages spell things a little differently."
				}),
				greeting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-lg text-ink",
					children: "For this hour"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryCard, {
					entry: greeting,
					featured: true,
					saved: saved.includes(greeting.id),
					copied: copied === greeting.id,
					onCopy: () => onCopy(greeting),
					onSave: () => onSave(greeting.id)
				})] }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 text-lg text-ink",
					children: "Start here"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: starters.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryCard, {
						entry,
						saved: saved.includes(entry.id),
						copied: copied === entry.id,
						onCopy: () => onCopy(entry),
						onSave: () => onSave(entry.id)
					}, entry.id))
				})] })
			]
		});
	}
	if (!results.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-line bg-sand p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl text-river",
			children: "Not in the book"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-base leading-relaxed text-muted",
			children: [
				"No confident match for “",
				trimmed,
				"”. Bassa-Nge here is Nupe-Tako, not Bassa-Komu and not the Bassa of Liberia or Cameroon. Try a simpler word such as water, mother, or thank you. Markets and place names are under The land."
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted",
			"aria-live": "polite",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: results.length
				}),
				" ",
				results.length === 1 ? "match" : "matches"
			]
		}), results.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryCard, {
			entry,
			saved: saved.includes(entry.id),
			copied: copied === entry.id,
			onCopy: () => onCopy(entry),
			onSave: () => onSave(entry.id)
		}, entry.id))]
	});
}
function TopicsPane({ topic, onTopic, query, direction, saved, copied, onCopy, onSave }) {
	const entries = (query.trim() ? searchEntries(query, direction) : LEXICON).filter((entry) => topic === "all" || entry.category === topic);
	const chips = [{
		id: "all",
		label: "All"
	}, ...CATEGORIES];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-4 flex gap-2 overflow-x-auto pb-1",
		role: "group",
		"aria-label": "Topics",
		children: chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onTopic(chip.id),
			className: cn("h-10 shrink-0 rounded-full px-3 text-sm font-semibold", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay", topic === chip.id ? "bg-river text-sand" : "bg-sand text-ink ring-1 ring-line"),
			"aria-pressed": topic === chip.id,
			children: chip.label
		}, chip.id))
	}), entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-2xl border border-line bg-sand p-4 text-muted",
		children: "Nothing in this topic matches that search."
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryCard, {
			entry,
			saved: saved.includes(entry.id),
			copied: copied === entry.id,
			onCopy: () => onCopy(entry),
			onSave: () => onSave(entry.id)
		}, entry.id))
	})] });
}
function NumbersPane({ query, open, onOpen, saved, copied, onCopy, onSave }) {
	const all = numbers();
	const q = query.trim();
	const matched = q ? searchEntries(q, "both").filter((e) => e.n != null) : [];
	const grid = q && matched.length > 0 ? matched : all;
	const active = (q && matched.length > 0 ? matched : all).find((e) => e.n === open) ?? grid[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Counted the way Nupe lessons teach it. Eleven is “ten and one”. Eighteen is “twenty less two”. The book stops at twenty — the rest of the pattern was not published in that lesson."
			}),
			active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryCard, {
				entry: active,
				featured: true,
				saved: saved.includes(active.id),
				copied: copied === active.id,
				onCopy: () => onCopy(active),
				onSave: () => onSave(active.id)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-5 gap-2",
				children: (q ? grid : all).map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => entry.n && onOpen(entry.n),
					className: cn("h-12 rounded-xl text-base font-semibold tabular-nums transition-colors", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay", entry.n === open ? "bg-clay text-sand" : "bg-sand text-ink ring-1 ring-line"),
					"aria-pressed": entry.n === open,
					"aria-label": `${entry.n} ${entry.bn}`,
					children: entry.n
				}, entry.id))
			}),
			q && matched.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No number matches that search. The full count is still here — try 7, five, or eshi."
			}) : null
		]
	});
}
function SavedPane({ entries, saved, copied, onCopy, onSave }) {
	if (!entries.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-line bg-sand p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl text-river",
			children: "Nothing saved yet"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted",
			children: "Star a greeting or a word. It stays on this device, ready the next time you open the book."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: entries.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryCard, {
			entry,
			saved: saved.includes(entry.id),
			copied: copied === entry.id,
			onCopy: () => onCopy(entry),
			onSave: () => onSave(entry.id)
		}, entry.id))
	});
}
function shuffle(list) {
	const next = [...list];
	for (let i = next.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[next[i], next[j]] = [next[j], next[i]];
	}
	return next;
}
function makeQuestion(pool, ask) {
	const prompt = pool[Math.floor(Math.random() * pool.length)];
	return {
		prompt,
		choices: shuffle([prompt, ...shuffle(pool.filter((entry) => entry.id !== prompt.id)).slice(0, 3)]),
		ask
	};
}
function PracticePane() {
	const pool = (0, import_react.useMemo)(() => quizPool(), []);
	const [ask, setAsk] = (0, import_react.useState)("bn");
	const [round, setRound] = (0, import_react.useState)([]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [correct, setCorrect] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const [best, setBest] = (0, import_react.useState)(0);
	const [live, setLive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setRound([makeQuestion(pool, "bn")]);
		setLive(true);
		const raw = localStorage.getItem(BEST_KEY);
		const n = raw ? Number(raw) : 0;
		if (!Number.isNaN(n)) setBest(n);
	}, [pool]);
	const question = round[index];
	if (!live || !question) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-2xl border border-line bg-sand p-5 text-muted",
		children: "Setting a round…"
	});
	function restart(nextAsk) {
		setAsk(nextAsk);
		setRound([makeQuestion(pool, nextAsk)]);
		setIndex(0);
		setPicked(null);
		setCorrect(0);
		setDone(false);
	}
	function choose(id) {
		if (picked || !question) return;
		setPicked(id);
		trace(id === question.prompt.id ? `Practice: correct for ${question.prompt.en}` : `Practice: chose ${id}, answer was ${question.prompt.id}`);
		if (id === question.prompt.id) setCorrect((n) => n + 1);
	}
	function next() {
		if (!question) return;
		const score = correct;
		if (index + 1 >= ROUND) {
			const finalScore = score;
			setDone(true);
			setBest((prev) => {
				const value = Math.max(prev, finalScore);
				localStorage.setItem(BEST_KEY, String(value));
				return value;
			});
			return;
		}
		setRound((prev) => [...prev, makeQuestion(pool, ask)]);
		setIndex((n) => n + 1);
		setPicked(null);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-line bg-sand p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-clay uppercase",
				children: "Round complete"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-1 text-4xl text-river",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: correct
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-2xl text-muted",
					children: [" / ", ROUND]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: ["Best on this device: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums font-semibold text-ink",
					children: best
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => restart(ask),
				className: "mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-clay px-4 font-semibold text-sand hover:bg-clay-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Another round"]
			})
		]
	});
	if (!question) return null;
	const promptText = question.ask === "bn" ? question.prompt.en : question.prompt.bn;
	const choiceText = (entry) => question.ask === "bn" ? entry.bn : entry.en;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-col gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm font-semibold text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-ink",
						children: index + 1
					}),
					" of ",
					ROUND
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => restart("bn"),
					className: cn("h-10 rounded-full px-3 text-sm font-semibold", ask === "bn" ? "bg-river text-sand" : "bg-sand ring-1 ring-line"),
					children: "Say it in Bassa-Nge"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => restart("en"),
					className: cn("h-10 rounded-full px-3 text-sm font-semibold", ask === "en" ? "bg-river text-sand" : "bg-sand ring-1 ring-line"),
					children: "Say it in English"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 h-1.5 overflow-hidden rounded-full bg-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full bg-clay transition-all",
				style: { width: `${index / ROUND * 100}%` }
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-semibold text-clay",
			children: question.ask === "bn" ? "How would you say this?" : "What does this mean?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-1 font-display text-4xl leading-tight text-river",
			children: promptText
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-2",
			children: question.choices.map((choice) => {
				const isRight = choice.id === question.prompt.id;
				const isPicked = picked === choice.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => choose(choice.id),
					className: cn("min-h-12 w-full rounded-2xl border px-4 py-3 text-left text-lg font-semibold transition-colors", "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay", !picked && "border-line bg-sand hover:border-clay", picked && isRight && "border-river bg-river text-sand", picked && isPicked && !isRight && "border-clay bg-clay text-sand", picked && !isRight && !isPicked && "border-line bg-sand text-muted"),
					children: choiceText(choice)
				}, choice.id);
			})
		}),
		picked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [question.prompt.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-sm text-muted",
				children: question.prompt.note
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: next,
				className: "inline-flex h-11 items-center rounded-full bg-clay px-5 font-semibold text-sand hover:bg-clay-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
				children: index + 1 >= ROUND ? "See score" : "Next"
			})]
		}) : null
	] });
}
var LAND = [
	{
		title: "Who the Bassa-Nge are",
		body: "The Bassa-Nge are a Nupe people of Kogi State. Oral history traces them to followers of Etsu Jimada who left the Nupe kingdom and settled south of the Niger. Linguists call their speech Nupe-Tako — “the Nupe below” — a dialect closest to central Nupe around Bida. Speakers understand central Nupe from childhood, and the Nupe Bible has long been the one used in their churches."
	},
	{
		title: "Not the same as Bassa-Komu",
		body: "Kogi is also home to the Bassa-Komu, or Basa, whose language is a different family entirely and whose towns centre on Oguma. Colonial clerks folded both peoples into the name Bassa, then added Nge and Komu to pull them apart. This book is only for Bassa-Nge. It will not mix in Bassa-Komu, and it is not the Bassa of Liberia or Cameroon."
	},
	{
		title: "Where the language is at home",
		body: "Bassa-Nge is spoken in Bassa, Koton Karfe, and Lokoja local governments, in the confluence country of the Niger and the Benue. Gboloko is a principal town — speakers explain the name as Nupe Boloko or Bologi. Ajigido is another village. People speak of 144 villages in Bassa land. Ecewu market and Gboloko market meet every five days, and traders come in from the other villages. Between villages, the older road was often a canoe."
	},
	{
		title: "How to greet",
		body: "Respect is in the body as much as the word. Men squat. Women kneel. A man asking for a bride kneels and puts his hands to the floor. Almost every greeting begins with Oku, then names the moment: morning, sun, evening, work, rain, a journey, a long absence. Answer Oku with Oku."
	},
	{
		title: "Names, the Etsu, and a proverb",
		body: "Children are named on the eighth day. Mayemde — shortened Ma’ade — means “I have my own”. Sarotasoko is “God’s kingdom” or “God’s bosom”. Erewtasoko is “God’s gift”. Soko is God, and it sits inside many names. The chief is the Etsu. When he dies, kingmakers choose the next from a ruling house, and the houses rotate. One proverb a Bassa-Nge speaker offered in English: “The morsel of food that falls from your hand into the soup is for the comfort of the throat.” The Bassa-Nge wording of that line was not recorded, so it is not invented here."
	},
	{
		title: "Dress and the December festival",
		body: "Men wear a kaftan and a cap. Women wear a blouse and wrapper, another wrapper above the bust, and a gele with a second scarf folded over it. Bassa Day falls on the 26th of December, with masquerades. A wedding still has three movements in memory: the families ask, the bride herself sets the bride-price, and on the day an older woman bathes her. If the villages differed, the husband’s people once came by canoe. That last part is fading."
	},
	{
		title: "A name for the land",
		body: "One telling among Nupe speakers is that Bassa comes from ba’sa or ba’age, a pleasant place fit to settle, and that Nge comes from an exclamation. Treat that as a community story, not a settled etymology. What is settled is the language: Nupoid, written in Latin letters, and tonal. The same letters can mean different things. This book uses the practical spelling of community lessons and published Nupe word-lists, not a full tone transcription."
	}
];
function LandPane({ onJump }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "rounded-2xl bg-gold-soft p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "font-display text-2xl leading-snug text-ink",
					children: "The morsel of food that falls from your hand into the soup is for the comfort of the throat."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-muted",
					children: "A Bassa-Nge proverb, as told in English by Ma’ade Yaila of Ajigido."
				})]
			}),
			LAND.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-line bg-sand p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-river",
					children: section.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-base leading-relaxed text-ink",
					children: section.body
				})]
			}, section.title)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-river p-5 text-sand",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Open a word from the land"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [
						["morning", "Good morning"],
						["etsu", "Etsu"],
						["soko", "Soko"],
						["mayemde", "Mayemde"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onJump(id),
						className: "h-11 rounded-full bg-sand px-4 font-semibold text-river focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand",
						children: label
					}, id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: "Spellings follow Nupe-Tako greeting lists, a Nupe community counting lesson, word-lists shared by Nupe and Bassa-Nge speakers, notes in Roger Blench’s draft Nupe dictionary, and Ma’ade Yaila’s account of Bassa life in Kogi. This is a learner’s book, not a speaker’s last word. Ask an elder before you print a name, a price, or a prayer."
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TranslatorApp, {});
}
//#endregion
export { Home as component };
