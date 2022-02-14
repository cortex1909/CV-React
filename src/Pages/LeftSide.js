import AboutBox from '../components/AboutBox'
import EducationBox from '../components/EducationBox'
import ExperienceBox from '../components/ExperienceBox'
import OtherBox from '../components/OtherBox'

const LeftSide = () => {
  return (
    <div className="LeftSide">
      <AboutBox />
      <EducationBox />
      <ExperienceBox />
      <OtherBox />
    </div>
  )
}

export default LeftSide
