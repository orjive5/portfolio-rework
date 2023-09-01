import HtmlIcon from '../svgs/HtmlIcon';
import CssIcon from '../svgs/CssIcon';
import JavaScriptIcon from '../svgs/JavaScriptIcon';
import TypeScriptIcon from '../svgs/TypeScriptIcon';
import ReactIcon from '../svgs/ReactIcon';
import NextJsIcon from '../svgs/NextJsIcon';
import ReduxIcon from '../svgs/ReduxIcon';
import { Big_Shoulders_Text } from 'next/font/google'
import TailwindCssIcon from '../svgs/TailwindCssIcon';
import NodeJsIcon from '../svgs/NodeJsIcon';
import ExpressJsIcon from '../svgs/ExpressJsIcon';
import MongoDBIcon from '../svgs/MongoDBIcon';
import GitIcon from '../svgs/GitIcon';
import GitHubIconSkills from '../svgs/GitHubIconSkills';
import FigmaIcon from '../svgs/FigmaIcon';
import SanityIcon from '../svgs/SanityIcon';
const shoulders = Big_Shoulders_Text({ subsets: ["latin"]});

const Skills = () => {
  return (
    <div className='flex flex-col items-center gap-8'>
        <div className="flex-col lg:flex-row flex gap-8 lg:items-start">
            <div className="flex-col gap-4 md:flex-row flex justify-between lg:justify-center lg:flex-col items-center md:gap-8 lg:gap-4">
                <h1 style={shoulders.style} className='text-3xl'>
                    Frontend
                </h1>
                <div className="flex-wrap w-auto h-auto flex-row font-medium justify-center p-4 flex lg:flex-col items-center gap-8 lg:gap-4 text-xl rounded-2xl min-w-[270px] bg-black">
                    <div className="flex flex-col gap-2 items-center">
                        <HtmlIcon />
                        <h2>HTML5</h2>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <CssIcon />
                        <h2>CSS3</h2>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <JavaScriptIcon />
                        <h2>JavaScript</h2>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <TypeScriptIcon />
                        <h2>TypeScript</h2>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <ReactIcon />
                        <h2>React</h2>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <NextJsIcon />
                        <h2>NextJS</h2>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <ReduxIcon />
                        <h2>Redux Toolkit</h2>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <TailwindCssIcon />
                        <h2>TailwindCSS</h2>
                    </div>
                </div>
            </div>
        <div className="flex-col gap-4 md:flex-row flex justify-between lg:justify-center lg:flex-col items-center md:gap-8 lg:gap-4">
            <h1 style={shoulders.style} className='text-3xl'>
                Backend
            </h1>
            <div className="flex-wrap w-auto h-auto flex-row font-medium justify-center p-4 flex lg:flex-col items-center gap-8 lg:gap-4 text-xl rounded-2xl min-w-[270px] bg-black">
                <div className="flex flex-col gap-2 items-center">
                    <NodeJsIcon />
                    <h2>NodeJS</h2>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <ExpressJsIcon />
                    <h2>ExpressJS</h2>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <MongoDBIcon />
                    <h2>MongoDB</h2>
                </div>
            </div>
        </div>
        <div className="flex-col gap-4 md:flex-row flex justify-between lg:justify-center lg:flex-col items-center md:gap-8 lg:gap-4">
            <h1 style={shoulders.style} className='text-3xl'>
                Miscellaneous
            </h1>
            <div className="flex-wrap w-auto h-auto flex-row font-medium justify-center p-4 flex lg:flex-col items-center gap-8 lg:gap-4 text-xl rounded-2xl min-w-[270px] bg-black">
                <div className="flex flex-col gap-2 items-center">
                    <GitIcon />
                    <h2>Git</h2>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <GitHubIconSkills />
                    <h2>GitHub</h2>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <ReactIcon />
                    <h2>React Native</h2>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <SanityIcon />
                    <h2>Sanity</h2>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <FigmaIcon />
                    <h2>Figma</h2>
                </div>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Skills;

