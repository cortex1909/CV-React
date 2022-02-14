import './style/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import LeftSide from './Pages/LeftSide'
import RightSide from './Pages/RightSide'

const App = () => {
  const appName = 'Create my CV'
  return (
    <>
      <Header appName={appName} />
      <div className="container flex">
        <LeftSide />
        <RightSide />
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
