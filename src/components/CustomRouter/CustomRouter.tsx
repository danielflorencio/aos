import ApplicationsCalculator from "../ApplicationsCalculator/ApplicationsCalculator"
import PostAnalyzer from "../PostAnalyzer/PostAnalyzer"
export function CustomRouter({functionality} : {functionality: string}){
    switch(functionality){
      case 'calculator':
        return(<><ApplicationsCalculator/></>) 
        break; 
      case 'postAnalyzer':
        return(<><PostAnalyzer/></>)
        break;
    }
    return(<></>) // Do not delete this line. The component needs a valid JSX outside of the switch statement Return to work.
  }