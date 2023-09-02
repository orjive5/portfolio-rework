import { Big_Shoulders_Text } from 'next/font/google'
import SocialIcons from '../socialIcons';
import GmailIcon from '../svgs/GmailIcon';
import CellphoneIcon from '../svgs/CellphoneIcon';
import { ContactForm } from '../contactForm';
const shoulders = Big_Shoulders_Text({ subsets: ["latin"]});

const Contact = () => {
  return (
    <div className='flex flex-col items-start md:items-center gap-8'>
        <h2 style={shoulders.style} className='text-xl md:text-3xl'>
            Feel free to send me a message:
        </h2>
        <ContactForm />
        <div className="flex-wrap flex items-center gap-4">
            <h1 className='text-xl'>
                Reach out to me through social media:
            </h1>
            <SocialIcons />
        </div>
        <div className='flex items-center md:items-center gap-4'>
            <GmailIcon />
            <h2 style={shoulders.style} className='text-xl md:text-3xl'>
                germandoicinovic@gmail.com
            </h2>
        </div>
        <div className='flex items-center md:items-center gap-4'>
            <CellphoneIcon />
            <h2 style={shoulders.style} className='text-xl md:text-3xl'>
                +381 66 559 44 39
            </h2>
        </div>
    </div>
  )
}

export default Contact;