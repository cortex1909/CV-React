import { useState } from 'react'
import './style/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LeftSide from './Pages/LeftSide'
import RightSide from './Pages/RightSide'

const App = () => {
  const appName = 'Create my CV'
  const [state, setState] = useState([
    {
      id: 'about',
      firstName: 'Hrvoje',
      lastName: 'Đaković',
      email: 'hrvoje.dakovic98@gmail.com',
      location: 'Nova Gradiška, Hrvatska',
    },
    {
      id: 'education',
      schoolName: 'Virovitica College',
      startYear: '10/2018',
      endYear: '9/2021',
      location: 'Virovitica, Hrvatska',
    },
    {
      id: 'experience',
      jobName: 'Frontend Web Developer',
      startYear: '9/2017',
      endYear: '10/2021',
      location: 'Nova Gradiška, Hrvatska',
    },
    {
      id: 'other',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, illum. Corrupti in aperiam cumque omnis praesentium minus hic recusandae nihil.',
    },
  ])
  return (
    <>
      <Header appName={appName} />
      <div className="container flex">
        <LeftSide />
        <RightSide state={state} />
      </div>
      <Footer />
    </>
  )
}

export default App

/*

education {from-to, name, location, description, title}
work experience {from-to, name, description, location}
language skills {name of language, A1-C1 picker}
other skills input

*/
