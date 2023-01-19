import { FormEvent, useState } from "react"
export default function PostAnalyzer(){
    const [keywordAnalysis, setKeywordAnalysis] = useState({
        keyword: {name: '', count: 0}
     })

    const [inputFieldValues, setInputFieldValues] = useState<string[]>([''])


    
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

        console.log('Raw text before the split: ', rawText)

        let treatedText: Array<Array<string>> = [[]]
        
        for(let i = 0; i < rawText.length; i++){
            treatedText[i] = rawText[i].split(" ")
        }
        
        console.log('Final treated text: ', treatedText)
        
        // let myString = "Hello, world! How are you today?";
        // myString = myString.replace(/[.,!?]/g, "");
        
        
        
        // let myArray = myString.split(" ");
        // Do the analysis here.
        
        // for(let i = 0; i < inputFieldValues.length; i++){
        //     setInputFieldValues(inputFieldValues[])
        // }

        // toLowercase

        // removeCommmasAnd.




        // Do the analysis here.

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