import { checkAnswers } from "../utils/checkAnswer";

type optionType = {
    id: number;
    value: string;
}
export default function Options({ option, optIdx, quesId, multipleAns }: { option: optionType, optIdx: number, quesId: number, multipleAns: boolean }) {

    return (
        <>
            <div className="options">
                <input type={!multipleAns ? "radio" : "checkbox"} name={`option${quesId}`} id={`${quesId.toString()}${optIdx.toString()}`}
                    onClick={(e) => {
                        checkAnswers(quesId, option.id, e.currentTarget);
                    }} />
                <label htmlFor={`${quesId.toString()}${optIdx.toString()}`}><pre>{option.value}</pre></label>
            </div>
        </>
    )
}
