export const contents = [
  ["I want to create a subcomonent like card", "This is the back page"],
  ["I want to watch EdRoh and connect to MongoDB"],
  [
    "How to align text at the center?",
    "display: flex,align-items: center,justify-content: center",
  ],
  [
    "What is Mongoose?",
    "ODM, Object Document Mapping, like the ORM for NoSQL database",
  ],
  [
    "RTK Query",
    "use createAPI to make endpoints that we can use to call our backends/grab data from our backend with particular set up",
  ],
  [
    "Boilerplate Code",
    "code that are repeated in multiple places with little to no variation.",
  ],
  [
    `export const store = configureStore({
  reducer: {[api.reducerPath]: api.reducer},
  middleware: (getDefault) => getDefault().concat(api.middleware)
})
setupListeners(store.dispatch);`,
    `1. pass Redux toolkit API over here with API reducer(The thing we exported earlier,
    2. middleware and listen is a configuration we need to set up with our API to make redux work` 
  ],
  [
    "how to add customized style in Tailwind CSS",
    "Use <Style> component following with {``} and add the class Name to the component you want to customize. "
  ],
  [
    "dotenv", "handle environment variables"
  ],
  ["helmet", "handle API endpoint security"],
  ["morgan", "handle console logs anytime hitting an endpoint"],
]; 

export const PHASE = ["Ideation", "Innocent Period", "Suspicion", "Lightening", "Killing", "Fruition"]

export const TASK_LEVEL = ["small task", "medium task", "large task"]

export const CODING = [
  {
    week: "01",
    q: [
      {
        type: ["BP"],
        title: "704",
      },
      {
        type: ["BP"],
        title: "35",
      },
      {
        type: ["BP"],
        title: "33",
      },
      {
        type: ["BP"],
        title: "6974",
      },
      { type: ["Two Pointers", "Sliding Window"], title: "11" },
      { type: ["Two Pointers", "Sliding Window"], title: "905" },
      { type: ["Two Pointers", "Sliding Window"], title: "350" },
      { type: ["Two Pointers", "Sliding Window"], title: "215" },
      { type: ["Two Pointers", "Sliding Window"], title: "3" },
      { type: ["String"], title: "344 - Reverse String" },
      { type: ["String"], title: "28 - Implement strStr()" },
      { type: ["String"], title: "242 - Valid Anagram" },
      { type: ["String"], title: "387 - First Unique Character in a String" },
      { type: ["String"], title: "14 - Longest Common Prefix" },
      { type: ["String"], title: "125 - Valid Palindrome" },
      { type: ["String"], title: "696 - Count Binary Substrings" },
      { type: ["String"], title: "205 - Isomorphic Strings" },
      { type: ["String"], title: "38 - Count and Say" },
      { type: ["String"], title: "67 - Add Binary" },
    ],
  },
  {
    week: "02",
    q: [
      { type: ["Linked List", "Stack", "Queue"], title: "83" },
      { type: ["Linked List", "Stack", "Queue"], title: "21" },
      { type: ["Linked List", "Stack", "Queue"], title: "19" },
      { type: ["Linked List", "Stack", "Queue"], title: "20" },
      { type: ["Linked List", "Stack", "Queue"], title: "735" },
      { type: ["Hash Table", "Prefix Sum"], title: "303" },
      { type: ["Hash Table", "Prefix Sum"], title: "560" },
      { type: ["Hash Table", "Prefix Sum"], title: "525" },
      { type: ["Hash Table", "Prefix Sum"], title: "523" },
      { type: ["Hash Table", "Prefix Sum"], title: "41" },
      { "type": ["String"], "title": "58 - Length of Last Word" },
      { "type": ["String"], "title": "290 - Word Pattern" },
      { "type": ["String"], "title": "345 - Reverse Vowels of a String" },
      { "type": ["String"], "title": "443 - String Compression" },
      { "type": ["String"], "title": "165 - Compare Version Numbers" },
      { "type": ["String"], "title": "541 - Reverse String II" },
      { "type": ["String"], "title": "8 - String to Integer (atoi)" },
      { "type": ["String"], "title": "68 - Text Justification" },
      { "type": ["String"], "title": "49 - Group Anagrams" },
      { "type": ["String"], "title": "1507 - Reformat Date" }
    ],
  },
  {
    week: "03",
    q: [
      { type: ["BFS"], title: "102" },
      { type: ["BFS"], title: "116" },
      { type: ["BFS"], title: "130" },
      { type: ["BFS"], title: "752" },
      { type: ["BFS"], title: "127" },
      { type: ["DFS"], title: "22" },
      { type: ["DFS"], title: "78" },
      { type: ["DFS"], title: "90" },
      { type: ["DFS"], title: "301" },
      { type: ["DFS"], title: "46" },
      { "type": ["String"], "title": "93 - Restore IP Addresses" },
      { "type": ["String"], "title": "71 - Simplify Path" },
      { "type": ["String"], "title": "20 - Valid Parentheses" },
      { "type": ["String"], "title": "32 - Longest Valid Parentheses" },
      { "type": ["String"], "title": "168 - Excel Sheet Column Title" },
      { "type": ["String"], "title": "13 - Roman to Integer" },
      { "type": ["String"], "title": "12 - Integer to Roman" },
      { "type": ["String"], "title": "38 - Count and Say" },
      { "type": ["String"], "title": "58 - Length of Last Word" },
      { "type": ["String"], "title": "6 - Zigzag Conversion" }
    ],
  },
  {
    week: "04",
    q: [
      { type: ["Tree"], title: "144" },
      { type: ["Tree"], title: "94" },
      { type: ["Tree"], title: "145" },
      { type: ["Tree"], title: "100" },
      { type: ["Tree"], title: "98" },
      { type: ["Graph"], title: "684" },
      { type: ["Graph"], title: "207" },
      { type: ["Graph"], title: "210" },
      { type: ["Graph"], title: "2115" },
      { type: ["Graph"], title: "743" },
      { "type": ["String"], "title": "5 - Longest Palindromic Substring" },
      { "type": ["String"], "title": "3 - Longest Substring Without Repeating Characters" },
      { "type": ["String"], "title": "49 - Group Anagrams" },
      { "type": ["String"], "title": "438 - Find All Anagrams in a String" },
      { "type": ["String"], "title": "647 - Palindromic Substrings" },
      { "type": ["String"], "title": "424 - Longest Repeating Character Replacement" },
      { "type": ["String"], "title": "76 - Minimum Window Substring" },
      { "type": ["String"], "title": "3 - Longest Substring Without Repeating Characters" },
      { "type": ["String"], "title": "394 - Decode String" },
      { "type": ["String"], "title": "227 - Basic Calculator II" }
    ],
  },
  {
    week: "05",
    q: [
      { type: ["Heap", "Top K"], title: "692" },
      { type: ["Heap", "Top K"], title: "23" },
      { type: ["Heap", "Top K"], title: "295" },
      { type: ["Heap", "Top K"], title: "373" },
      { type: ["Heap", "Top K"], title: "973" },
    ],
  },
  {
    week: "06",
    q: ["I'm not sure", "so ugly", "why?"],
  },
  {
    week: "07",
    q: ["I'm not sure", "so ugly", "why?"],
  },
  {
    week: "08",
    q: ["I'm not sure", "so ugly", "why?"],
  },
];

export const TODAY = {title: "07/22/2024", lists: [{content:"Yoga" , completed: false}, {content:"W2 Recruiter Contact" , completed:true}, {content: "Marketing Strategy", completed:false}]}