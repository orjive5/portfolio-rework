import { IProject } from '@/types/project.interface';
import Image from 'next/image';
import { Big_Shoulders_Text } from 'next/font/google'
import EyeIcon from '../svgs/EyeIcon';
import CodeIcon from '../svgs/CodeIcon';
const shoulders = Big_Shoulders_Text({ subsets: ["latin"]});

const Project = ({ screenshot, name, description, stack, demo, code }: IProject) => {
  return (
    <section className="border sm:border-2 border-paleGold overflow-hidden rounded sm:rounded-2xl w-full lg:max-w-2xl h-auto sm:min-h-[500px] flex flex-col gap-2 sm:gap-4 justify-start items-center bg-black">
        <div className="flex items-center justify-center relative h-96 w-full">
            <Image
                src={screenshot}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-full object-cover box-border overflow-hidden"
                alt={description}
            />
        </div>
        <h1 style={shoulders.style} className='text-2xl sm:text-3xl'>
            {name}
        </h1>
        <p className='px-2 sm:px-4 text-base sm:text-xl text-center'>
            {description}
        </p>
        <p className='px-2 sm:px-4 text-base sm:text-xl text-center'>
            Tech stack: {stack}
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
    </section>
  );
};

export default Project;
  