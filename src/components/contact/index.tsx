import Icon from '@mdi/react';
import { mdiGmail, mdiCellphone } from '@mdi/js';
import { Big_Shoulders_Text } from 'next/font/google'
import SocialIcons from '../socialIcons';
const shoulders = Big_Shoulders_Text({ subsets: ["latin"]});

const Contact = () => {
  return (
    <div className='flex flex-col items-start md:items-center gap-8'>
    <h2 style={shoulders.style} className='text-xl md:text-3xl'>
        Feel free to send me a message:
    </h2>
    {/* <ContactUs /> */}
    <div className="flex-wrap flex items-center gap-4">
        <h1 className='text-xl'>
            Reach out to me through social media:
        </h1>
        <SocialIcons />
    </div>
    <div className='flex items-start md:items-center gap-4'>
        <Icon
            path={mdiGmail}
            title="Gmail"
            className="w-9"
        />
        <h2 style={shoulders.style} className='text-xl md:text-3xl'>
            germandoicinovic@gmail.com
        </h2>
    </div>
    <div className='flex items-start md:items-center gap-4'>
        <Icon
            path={mdiCellphone}
            title="Phone"
            className="w-9"
        />
        <h2 style={shoulders.style} className='text-xl md:text-3xl'>
            +381 66 559 44 39
        </h2>
    </div>
  </div>
  )
}

export default Contact;