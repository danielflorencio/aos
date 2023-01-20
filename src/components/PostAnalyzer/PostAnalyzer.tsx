import './styles.css'
import { FormEvent, useState } from "react"
export default function PostAnalyzer(){

    const [inputFieldValues, setInputFieldValues] = useState<string[]>([''])

    interface KeywordCount {[key: string]: number;}
    let keywordCount: KeywordCount = {};

    const [keywordCountState, setKeywordCountState] = useState<[string, number][]>()
    
    function addNewInputField(e: FormEvent){
        e.preventDefault()
        setInputFieldValues([...inputFieldValues, ''])
    }

    function handleAnalysis(e: FormEvent){
        e.preventDefault()

        let treatedText: Array<Array<string>> = [[]]
        
        for(let i = 0; i < inputFieldValues.length; i++){
            treatedText[i] = inputFieldValues[i].toLowerCase().replace(/[.,!?*]/g, "").split(" ")
        }

        for(let i = 0; i < treatedText.length; i++){
            for(let n = 0; n < treatedText[i].length; n++){
                if(keywordCount[treatedText[i][n]]){
                    keywordCount[treatedText[i][n]]++
                } else {
                    keywordCount[treatedText[i][n]] = 1;
                }
            }
        }
        setKeywordCountState(Object.entries(keywordCount).sort((a, b) => b[1] - a[1]))
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, index: number){
        let newInputFieldValues = [...inputFieldValues];
        newInputFieldValues[index] = e.target.value;
        setInputFieldValues(newInputFieldValues)
    }

    return(
        <>
            <h2>Post Analyzer.</h2>
            <form className='inputs-container'>            
                {inputFieldValues.map((inputField, index) => 
                    <input key={index} type='text' className='text-input' value={inputField} onChange={(e) => handleInputChange(e, index)}></input>
                )}                
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '5vh'}}>
                <button onClick={e => addNewInputField(e)}>Add Job Posting.</button>
                <button onClick={e => handleAnalysis(e)}>Analyze Job Postings.</button>
            </div>
            </form>
            <div>
                <ul>
                    {keywordCountState?.map((keyword, index) => (
                        <li key={index}>{keyword[0]} {keyword[1]}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}