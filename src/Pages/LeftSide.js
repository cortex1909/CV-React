import AboutBox from '../components/AboutBox'
import EducationBox from '../components/EducationBox'
import ExperienceBox from '../components/ExperienceBox'
import OtherBox from '../components/OtherBox'

const LeftSide = ({
  state,
  onChangeAbout,
  onChangeEducation,
  onChangeExperience,
  onChangeOther,
  deleteCV,
  printCV,
}) => {
  return (
    <div className="LeftSide">
      <AboutBox
        key={state['about'].id}
        state={state}
        onChange={onChangeAbout}
      />
      <EducationBox
        key={state['education'].id}
        state={state}
        onChange={onChangeEducation}
      />
      <ExperienceBox
        key={state['experience'].id}
        state={state}
        onChange={onChangeExperience}
      />
      <OtherBox
        key={state['other'].id}
        state={state}
        onChange={onChangeOther}
      />
      <button className="btn" onClick={deleteCV}>
        Empty CV
      </button>
      <button className="btn" onClick={printCV}>
        Print CV
      </button>
    </div>
  )
}

export default LeftSide

/*

    <div className="LeftSide">
      {state.map(
        (about) =>
          about.id === 'about' && (
            <AboutBox
              key={about.id}
              aboutState={about}
              setState={setState}
              onChange={onChangeAbout}
            />
          )
      )}
      {state.map(
        (education) =>
          education.id === 'education' && (
            <EducationBox key={education.id} educationState={education} />
          )
      )}
      {state.map(
        (experience) =>
          experience.id === 'experience' && (
            <ExperienceBox key={experience.id} experienceState={experience} />
          )
      )}
      {state.map(
        (other) =>
          other.id === 'other' && <OtherBox key={other.id} otherState={other} />
      )}
    </div>

*/
