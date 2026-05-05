const questions = [
    {
        id: 1,
        question: "What hook do you use to store data in a component?",
        options: ["useEffect", "useRef", "useState", "useContext"],
        answer: "useState",
    },
    {
        id: 2,
        question: "What does JSX stand for?",
        options: [
            "JavaScript XML",
            "Java Syntax Extension",
            "JSON XML",
            "JavaScript Extension",
        ],
        answer: "JavaScript XML",
    },
    {
        id: 3,
        question: "Which hook runs code after a component renders?",
        options: ["useState", "useEffect", "useCallback", "useMemo"],
        answer: "useEffect",
    },
    {
        id: 4,
        question: "How do you pass data from parent to child in React?",
        options: ["state", "refs", "props", "context"],
        answer: "props",
    },
    {
        id: 5,
        question: "What method do you use to render a list in React?",
        options: [".forEach()", ".filter()", ".reduce()", ".map()"],
        answer: ".map()",
    },
];

export default questions;