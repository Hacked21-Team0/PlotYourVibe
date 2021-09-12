
const historyData = [
    {
        _id: "1",
        mood: "Happy",
        scale: 8,
        description: "Visited my mom today.",
        date: "2021-09-12"
    },
    {
        _id: "2",
        mood: "Neutral",
        scale: 3,
        description: "Just a lazy day.",
        date: "2021-09-10"
    },
    {
        _id: "3",
        mood: "Happy",
        scale: 4,
        description: "",
        date: "2021-09-9"
    },
    {
        _id: "4",
        mood: "Anxious",
        scale: 10,
        description: "Exam day. Need prayers. ",
        date: "2021-09-7"
    },
    {
        _id: "5",
        mood: "Neutral",
        scale: 0,
        description: "",
        date: "2021-09-6"
    },
    {
        _id: "6",
        mood: "Sad",
        scale: 7,
        description: "Had a rough day at the office",
        date: "2021-09-5"
    },
    {
        _id: "7",
        mood: "Sad",
        scale: 9,
        description: "Don't wanna talk about it",
        date: "2021-09-2"
    },
    {
        _id: "8",
        mood: "Excited",
        scale: 8,
        description: "Going on a movie date",
        date: "2021-09-1"
    },
];

export function getHistoryReport() {
    return historyData;
}

export function getHistoryId(id) {
    return historyData.find(m => m._id ===id)
}