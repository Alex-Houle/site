import Head from './components/Head.jsx'
import Skill from './components/Skill.jsx'
import HR from './components/HR.jsx'
import Exp from './components/Exp.jsx'
import Doc from './components/Doc.jsx'
import Project from './components/Project.jsx'

export default function App() {

  return (
    <>
      <div className='bg-everforest-bg text-everforest-fg w-full md:max-w-4xl mx-auto p-4' style={{ borderColor: '#2E383C' }}>
        <Head />
        <HR></HR>
        <Skill />
        <HR></HR>
        <Exp></Exp>
        <HR></HR>
        <Project/>
      </div>
      <Doc />
    </>
  )
}
