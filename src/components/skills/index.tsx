import { frontendSkills } from '@/constants/frontendSkills';
import { backendSkills } from '@/constants/backendSkills';
import { miscellaneousSkills } from '@/constants/miscellaneousSkills';
import { Big_Shoulders_Text } from 'next/font/google'
const shoulders = Big_Shoulders_Text({ subsets: ["latin"]});

const Skills = () => {
    
    const skillsData = [
        {
            skillType: 'Frontend',
            skillList: frontendSkills,
        },
        {
            skillType: 'Backend',
            skillList: backendSkills,
        },
        {
            skillType: 'Miscellaneous',
            skillList: miscellaneousSkills,
        },
    ];

    return (
        <div className='flex flex-col items-center gap-4 sm:gap-8'>
            <div className="flex-col lg:flex-row flex gap-4 sm:gap-8 lg:items-start">
                {skillsData.map(s => {
                    return (
                        <div key={s.skillType} className="flex-col gap-2 sm:gap-4 md:flex-row flex justify-between lg:justify-center lg:flex-col items-center md:gap-8 lg:gap-4">
                            <h1 style={shoulders.style} className='text-2xl sm:text-3xl'>
                                {s.skillType}
                            </h1>
                            <div className="flex-wrap w-auto h-auto flex-row font-medium justify-center p-2 sm:p-4 flex lg:flex-col items-center gap-4 sm:gap-8 lg:gap-4 text-base sm:text-xl rounded sm:rounded-2xl min-w-[270px] bg-black">
                                {s.skillList.map(skill => {
                                    const Icon = skill.icon;
                                    return (
                                        <div key={skill.title} className="flex flex-col gap-1 sm:gap-2 items-center">
                                            <Icon />
                                            <h2>{skill.title}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;

