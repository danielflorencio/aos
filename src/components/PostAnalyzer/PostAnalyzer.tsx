import { FormEvent, useState } from "react"
export default function PostAnalyzer(){
    const [keywordAnalysis, setKeywordAnalysis] = useState({
        keyword: {name: '', count: 0}
     })

    const [inputFieldValues, setInputFieldValues] = useState<string[]>([''])

    interface KeywordCount {
        [key: string]: number;
    }
    let keywordCount: KeywordCount = {};
    
    function addNewInputField(e: FormEvent){
        e.preventDefault()
        setInputFieldValues([...inputFieldValues, ''])
    }

    function handleAnalysis(e: FormEvent){
        e.preventDefault()

        let rawText: string[] = []

        for(let i = 0; i < inputFieldValues.length; i++){
            rawText[i] = inputFieldValues[i].toLowerCase()
        }
        
        for(let i = 0; i < rawText.length; i++){
            rawText[i] = rawText[i].replace(/[.,!?]/g, "");
        }

        let treatedText: Array<Array<string>> = [[]]
        
        for(let i = 0; i < rawText.length; i++){
            treatedText[i] = rawText[i].split(" ")
        }

        console.log('Treated Text: ', treatedText) // Ok

        for(let i = 0; i < treatedText.length; i++){

            console.log('called the first for loop in the verification.')
            console.log('treatedText[i] value: ', treatedText[i])
            console.log('treatedText[i][n] value: ', treatedText[i][1])
            for(let n = 0; n < treatedText[i].length; n++)
            {
                console.log('last for loop called ', n, ' times')
                console.log('treatedText[i][n] value: ', treatedText[i][n])
                console.log('keywordCount value: ', keywordCount)
                if(keywordCount[treatedText[i][n]]){
                    keywordCount[treatedText[i][n]]++
                } else {
                    keywordCount[treatedText[i][n]] = 1;
                }
                
                // for(let z = 0; z < keywordCount.length; z++){
                //     if(keywordCount[treatedText[i][n]]){
                //         keywordCount[treatedText[i][n]]++
                //     }
                // }
            
            }
        
        }
        
        console.log(keywordCount)

    }


    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, index: number){
        let newInputFieldValues = [...inputFieldValues];
        newInputFieldValues[index] = e.target.value;
        setInputFieldValues(newInputFieldValues)
    }

    
    return(
        <>
            <h2>Post Analyzer.</h2>
            <form>
            
            {inputFieldValues.map((inputField, index) => 
                <input key={index} type='textarea' value={inputField} onChange={(e) => handleInputChange(e, index)}></input>
            )}
            <button onClick={e => addNewInputField(e)}>Add Job Posting.</button>
            <button onClick={e => handleAnalysis(e)}>Analyze Job Postings.</button>
            </form>
        </>
    )
}