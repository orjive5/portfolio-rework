import Image from 'next/image';
import { Big_Shoulders_Text } from 'next/font/google'
import SocialIcons from '../socialIcons';
import DownloadIcon from '../svgs/DownloadIcon';
const shoulders = Big_Shoulders_Text({ subsets: ["latin"]});

const Profile = () => {

  return (
    <div className="mx-0 sm:mx-8 flex flex-col gap-4 sm:gap-8 items-center max-w-2xl">
      <div className="flex flex-col items-center gap-4 sm:gap-8 md:flex-row">
        <div className='relative w-52 h-52 sm:w-56 sm:h-56'>
          <Image
            src="/profile-pic.jpg"
            alt="Profile pic"
            priority={true}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover box-border border-4 border-paleGold overflow-hidden rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 items-center md:items-start">
          <h1
            style={shoulders.style}
            className="text-4xl sm:text-5xl text-center md:text-left"
          >
            German Dojcinovic
          </h1>
          <h2 className='text-xl sm:text-2xl'>
            Frontend Developer
          </h2>
          <SocialIcons />
        </div>
      </div>
      <p className="text-base sm:text-xl leading-normal text-center">
        Hey there!{' '}
        <br className='hidden md:block' />
        I&apos;m a frontend developer based in Belgrade, Serbia.{' '}
        <br className='hidden md:block' />
        I enjoy coding things from the ground up and seeing my ideas come to life in the browser!{' '}
        <br className='hidden lg:block' />
        Let's build something great together!
      </p>
      <a
        href='German Dojcinovic.pdf'
        download="German Dojcinovic Resume.pdf"
        className="no-underline"
      >
        <button className="group hover:pointer hover:bg-paleGold hover:text-dark transition-all duration-300 ease-in-out gap-2 sm:gap-3 text-base sm:text-xl px-4 py-2 sm:px-6 sm:py-4 font-normal sm:font-medium flex justify-center items-center bg-transparent border sm:border-2 border-solid border-paleGold rounded text-paleGold">
          Download CV
          <DownloadIcon iconStyling='transition-all duration-300 ease-in-out group-hover:fill-dark w-4 sm:w-6 fill-paleGold'/>
        </button>
      </a>
    </div>
  );
};

export default Profile;
