export const quizDetails = [
    {
        question: "An insurer has extended the ABContact entity in ContactManager with an array of Notes to capture information of about the contact over time. A developer has been asked to write a function to process all the notes for a given com... Which code satisfies the requirement and follows best practices?",
        options: [
            {
                id: 1,
                value: `while (exists (note in anABContact. Notes)) {
    //do something
}
                    `
            },
            {
                id: 2, value: `for (note in anABContact Notes) {
    //do something
}` },
            {
                id: 3, value: `for (i = 1,,janABContact.Notes.length) {
    //do something
}
            ` },
            {
                id: 4, value: `var aNote = anABContact Notes.firstWhere(/note -> note Author != null)
            //do something` },
        ],
        correctOptions: [2],
    },
    {
        question: "What configuration is needed to add Group.GroupType to a list view using GroupParentView following best Practices?",
        options: [
            { id: 1, value: "Option 1" },
            { id: 2, value: "Option 2" },
            { id: 3, value: "Option 3" },
            { id: 4, value: "Option 4" },
        ],
        correctOptions: [3, 2],
    }
];
