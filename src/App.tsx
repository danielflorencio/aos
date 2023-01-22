import { useState } from 'react'
import './App.css'
// import IntroductionPost from './components/IntroductionPost/IntroductionPost'
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