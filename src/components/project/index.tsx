import { IProject } from '@/types/project.interface';
import Image from 'next/image';
import { Big_Shoulders_Text } from 'next/font/google'
import EyeIcon from '../svgs/EyeIcon';
import CodeIcon from '../svgs/CodeIcon';
const shoulders = Big_Shoulders_Text({ subsets: ["latin"]});

const Project = ({ screenshot, name, description, demo, code }: IProject) => {
  return (
    <div className="border sm:border-2 border-paleGold overflow-hidden rounded sm:rounded-2xl max-w-[400px] sm:w-[400px] md:max-w-xs h-auto sm:min-h-[500px] flex flex-col gap-2 sm:gap-4 justify-start items-center bg-black">
        <div className='relative h-80 w-full'>
            <Image
                src={screenshot}
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Project screenshot"
                className='object-cover'
            />
        </div>
        <h1 style={shoulders.style} className='text-2xl sm:text-3xl'>
            {name}
        </h1>
        <p className='px-2 sm:px-4 text-base sm:text-xl text-center'>
            {description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 px-2 mb-4 sm:gap-4 sm:px-4">
            <button
                className='group hover:bg-paleGold hover:text-black flex items-center gap-1 transition-all duration-300 ease-in-out cursor-pointer rounded text-base sm:text-xl font-medium py-1 px-3 sm:px-5 bg-transparent border border-paleGold'
                onClick={() => window.open(demo, '_blank', 'noopener,noreferrer')}
            >
                <EyeIcon iconStyling='group-hover:fill-black fill-paleGold w-4 sm:w-5 transition-all duration-300 ease-in-out' />
                Demo
            </button>
            <button
                className='group hover:bg-paleGold hover:text-black flex items-center gap-1 transition-all duration-300 ease-in-out cursor-pointer rounded text-base sm:text-xl font-medium py-1 px-3 sm:px-5 bg-transparent border border-paleGold'
                onClick={() => window.open(code, '_blank', 'noopener,noreferrer')}
            >
                <CodeIcon iconStyling='group-hover:fill-black fill-paleGold w-4 sm:w-5 transition-all duration-300 ease-in-out' />
                Code
            </button>
        </div>
    </div>
  );
};

export default Project;
  