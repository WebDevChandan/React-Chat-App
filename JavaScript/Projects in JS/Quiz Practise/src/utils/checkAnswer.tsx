import { Flip, toast } from 'react-toastify';
import { quizDetails } from '../api/seed';

export const checkAnswers = (quesId: number, optId: number, currentElement: HTMLElement) => {
    const totalCorrectOptions = quizDetails[quesId].correctOptions;


    const ans = totalCorrectOptions.find(ansOptNum => ansOptNum === (optId));

    if (ans)
        toast.success("Correct", { transition: Flip, autoClose: 500, hideProgressBar: true, position: "top-left" });
    else
        toast.error("Wrong", { transition: Flip, autoClose: 500, hideProgressBar: true, position:"top-left" });

    currentElement.setAttribute("disabled", "true");

}