import OutputAbout from '../components/OutputAbout'
import OutputEducation from '../components/OutputEducation'
import OutputExp from '../components/OutputExp'
import OutputOther from '../components/OutputOther'

const RightSide = ({ state }) => {
  return (
    <div className="RightSide">
      <div className="outputBox">
        <h2>About Me</h2>
        {state.map(
          (about) =>
            about.id === 'about' && <OutputAbout key={about.id} state={about} />
        )}
      </div>
      <div className="outputBox">
        <h2>Education</h2>
        {state.map(
          (education) =>
            education.id === 'education' && (
              <OutputEducation key={education.id} state={education} />
            )
        )}
      </div>
      <div className="outputBox">
        <h2>Experience</h2>
        {state.map(
          (experience) =>
            experience.id === 'experience' && (
              <OutputExp key={experience.id} state={experience} />
            )
        )}
      </div>
      <div className="outputBox">
        <h2>Other Informations</h2>
        {state.map(
          (other) =>
            other.id === 'other' && <OutputOther key={other.id} state={other} />
        )}
      </div>
    </div>
  )
}

export default RightSide
