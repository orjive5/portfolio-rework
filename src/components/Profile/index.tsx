import { mdiArrowCollapseDown} from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import { Big_Shoulders_Text } from 'next/font/google'
import SocialIcons from '../SocialIcons';
const shoulders = Big_Shoulders_Text({ subsets: ["latin"]});

const Profile = () => {
  return (
    <div className="mx-8 flex flex-col gap-12 items-center max-w-2xl">
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <Image
          src="/profile-pic.jpg"
          alt="Profile pic"
          priority={true}
          width={224}
          height={224}
          className="object-cover box-border border-4 border-solid border-paleGold overflow-hidden w-56 h-56 rounded-full"
        />
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h1
            style={shoulders.style}
            className="text-5xl text-center md:text-left"
          >
            German Dojcinovic
          </h1>
          <h2 className='text-2xl'>
            Frontend Developer
          </h2>
          <SocialIcons />
        </div>
      </div>
      <p className="text-xl leading-normal text-center">
        Hey! I&apos;m a frontend developer based in Belgrade, Serbia. I enjoy coding things from the
        ground up and seeing my ideas come to life in the browser! Because of my engineering
        background, I&apos;m used to dealing with complex problems, and breaking them down into
        simple, straightforward solutions. I am open to new opportunities or people to share ideas
        with! Please, do not hesitate to contact me!
      </p>
      <a href='German Dojcinovic.pdf' download="German Dojcinovic Resume.pdf" className="no-underline">
        <button className="hover:pointer hover:bg-paleGold hover:text-dark transition-all duration-300 ease-in-out gap-3 text-xl px-6 py-4 font-medium flex justify-center items-center bg-transparent border-2 border-solid border-paleGold rounded text-paleGold">
          Download CV
          <Icon
            path={mdiArrowCollapseDown}
            title="Download"
            size="22px"
            className="hover:fill-dark"
          />
        </button>
      </a>
    </div>
  );
};

export default Profile;
