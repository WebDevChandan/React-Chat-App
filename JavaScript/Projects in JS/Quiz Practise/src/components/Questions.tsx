import Options from "./Options";
import '../styles/question.scss';

type optionsType = { id: number; value: string; }[];

export default function Questions({ question, options, quesId, correctOptions }: { question: string, options: optionsType, quesId: number, correctOptions: number[] }) {
    return (
        <div className="question">


            <h2> {`${quesId + 1}. ${question}`}</h2>
            {options.map((optionObj, index) => (
                <Options option={optionObj} optIdx={index} quesId={quesId} key={index} multipleAns={correctOptions.length > 1 ? true : false} />
            ))}
        </div>

    )
}
