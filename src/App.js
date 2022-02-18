import { useState, useRef } from 'react'
import './style/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LeftSide from './Pages/LeftSide'
import RightSide from './Pages/RightSide'
import emptyCV from './components/emptyCV'
import { useReactToPrint } from 'react-to-print'
import PrintPage from './Pages/PrintPage'

const App = () => {
  const appName = 'Create my CV'
  const [state, setState] = useState({
    about: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@cvapp.com',
      location: "Doe's Street 24",
    },
    education: {
      schoolName: 'College for Development',
      startYear: '10/2015',
      endYear: '9/2020',
      location: "Makaloo, Doe's",
    },
    experience: {
      jobName: 'Frontend Web Developer',
      startYear: '9/2019',
      endYear: 'Active',
      location: 'Maryland, Germany',
    },
    other: {
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, illum. Corrupti in aperiam cumque omnis praesentium minus hic recusandae nihil.',
    },
  })

  const handleChangeAbout = (e) => {
    const { name, value } = e.target

    setState((prevState) => ({
      ...prevState,
      about: {
        ...prevState.about,
        [name]: value,
      },
    }))
  }

  const handleChangeEducation = (e) => {
    const { name, value } = e.target

    setState((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        [name]: value,
      },
    }))
  }

  const handleChangeExperience = (e) => {
    const { name, value } = e.target

    setState((prevState) => ({
      ...prevState,
      experience: {
        ...prevState.experience,
        [name]: value,
      },
    }))
  }

  const handleChangeOther = (e) => {
    const { name, value } = e.target

    setState((prevState) => ({
      ...prevState,
      other: {
        ...prevState.other,
        [name]: value,
      },
    }))
  }

  const deleteCV = () => {
    setState(emptyCV)
  }

  const componentRef = useRef()

  const printCV = useReactToPrint({ content: () => componentRef.current })

  return (
    <>
      <Header appName={appName} />
      <div className="container flex">
        <LeftSide
          state={state}
          setState={setState}
          onChangeAbout={handleChangeAbout}
          onChangeEducation={handleChangeEducation}
          onChangeExperience={handleChangeExperience}
          onChangeOther={handleChangeOther}
          deleteCV={deleteCV}
          printCV={printCV}
        />
        <RightSide state={state} />
        <PrintPage state={state} ref={componentRef} />
      </div>
      <Footer />
    </>
  )
}

export default App
