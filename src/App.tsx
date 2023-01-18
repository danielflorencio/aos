import { useState } from 'react'
import './App.css'
// import ApplicationsCalculator from './components/ApplicationsCalculator/ApplicationsCalculator'
import IntroductionPost from './components/IntroductionPost/IntroductionPost'
// import PostAnalyzer from './components/PostAnalyzer/PostAnalyzer'
import { CustomRouter } from './components/CustomRouter/CustomRouter'

function App() {
  const [functionality, setFunctionality] = useState('calculator')

  
  function handleJobPostNavClick(){
    console.log('setPostAnalyzer called.')
    setFunctionality('postAnalyzer')
    console.log('functionality state: ', functionality)
  }

  function handleApplicationsNavClick(){
    console.log('setCalculator called.')
    setFunctionality('calculator')
    console.log('functionality state: ', functionality)
  }

  return (
    <div className='flex-center'>
      <div className='text-container'>
        {/* <IntroductionPost/> */}

        <div className='custom-nav-container'>
          <div className='nav-block' onClick={handleApplicationsNavClick}>
            <h4>Analyze daily applications</h4>
          </div>
          <div className='nav-block' onClick={handleJobPostNavClick}>
            <h4>Analyze Job Postings</h4>
          </div>
        </div>
        <CustomRouter functionality={functionality}/>
      </div>


    </div>
  )
}

export default App



var removeDuplicates = function(nums) {
  let newArray = nums[0]

  for(let i = 0; i < nums.length; i++){
    
    for(let n = 0; n < newArray.length; n++){
        
      if(newArray[n] !== nums[i]){
          newArray[n] = nums[i]
        }

      }
      
  }
  return newArray
  }
;