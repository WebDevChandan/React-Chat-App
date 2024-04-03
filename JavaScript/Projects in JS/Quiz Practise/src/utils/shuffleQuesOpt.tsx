interface quizDetailType {
    question: string;
    options: {
        id: number;
        value: string;
    }[];
    correctOptions: number[];
}[]

export const shuffleQuesOpt = (quizDetails: quizDetailType[]) => {
    let currentIndex = quizDetails.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [quizDetails[currentIndex], quizDetails[randomIndex]] = [
            quizDetails[randomIndex], quizDetails[currentIndex]];

        shuffleOpt(quizDetails[currentIndex].options);
    }


    return quizDetails;
}


const shuffleOpt = (options: { id: number; value: string; }[]) => {
    let currentIndex = options.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [options[currentIndex], options[randomIndex]] = [
            options[randomIndex], options[currentIndex]];
    }
}