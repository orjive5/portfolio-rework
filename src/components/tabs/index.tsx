'use client'

// import './Main.css';
import Icon from '@mdi/react';
import { mdiLinkedin, mdiGithub, mdiInstagram, mdiGmail, mdiCellphone } from '@mdi/js';
import TabSwitch from '../tabSwitch';
import Project from '../project';
import { usePortfolioStore } from '@/store';
// import { ContactUs } from './ContactUs';
import { projectsData } from '../../constants/projectsData'
import Skills from '../skills';

const Tabs = () => {

  const store = usePortfolioStore();

  return (
    <main className='flex flex-grow flex-col items-center gap-8'>
      <TabSwitch />
      {store.activeTab === 'Projects' && (
        <div className='grid grid-cols-2 grid-rows-2 gap-8'>
          {projectsData.map(p => {
            return (
              <Project
                screenshot={p.screenshot}
                name={p.name}
                description={p.description}
                demo={p.demo}
                code={p.code}
              />
            )
          })}
        </div>
      )}
      {store.activeTab === 'Skills' && <Skills />}
      {/* <div className={activeTab === 'Contact' ? 'display-tab display-contact' : 'display-contact'}>
        <h2>Feel free to send me a message:</h2>
        <ContactUs />
        <div className="contact-cell social-contact-cell">
          <h1>Reach out to me through social media:</h1>
          <div className="profile-icons contact-profile-icons">
            <Icon
              path={mdiLinkedin}
              title="LinkedIn"
              className="linkedin-icon social-icon"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/german-dojcinovic/',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            />
            <Icon
              path={mdiGithub}
              title="GitHub"
              className="github-icon social-icon"
              onClick={() =>
                window.open('https://github.com/orjive5', '_blank', 'noopener,noreferrer')
              }
            />
            <Icon
              path={mdiInstagram}
              title="Instagram"
              className="instagram-icon social-icon"
              onClick={() =>
                window.open(
                  'https://www.instagram.com/germandojcinovic/',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            />
            <svg
              viewBox="0 0 24 24"
              className="instagram-icon-gradient social-icon"
              onClick={() =>
                window.open(
                  'https://www.instagram.com/germandojcinovic/',
                  '_blank',
                  'noopener,noreferrer'
                )
              }>
              <defs>
                <radialGradient id="instagramGradient" r="150%" cx="30%" cy="107%">
                  <stop stopColor="#fdf497" offset="0" />
                  <stop stopColor="#fdf497" offset="0.05" />
                  <stop stopColor="#fd5949" offset="0.45" />
                  <stop stopColor="#d6249f" offset="0.6" />
                  <stop stopColor="#285AEB" offset="0.9" />
                </radialGradient>
              </defs>
              <path
                fill="url(#instagramGradient)"
                d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
              />
            </svg>
          </div>
        </div>
        <div className="contact-cell">
          <Icon path={mdiGmail} title="Gmail" className="gmail-icon social-icon" />
          <h2>germandoicinovic@gmail.com</h2>
        </div>
        <div className="contact-cell">
          <Icon path={mdiCellphone} title="Phone" className="phone-icon social-icon" />
          <h2>+381 66 559 44 39</h2>
        </div>
      </div> */}
    </main>
  );
};

export default Tabs;

// .display-projects,
// .display-skills,
// .display-contact {
//   display: none;
// }

// .display-tab {
//   display: block;
// }

// .skills-technical {
//   display: flex;
//   gap: 2rem;
// }

// .skills-card {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
// }

// .skills-table {
//   min-width: 270px;
//   height: 450px;
//   background-color: black;
//   border-radius: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
//   font-size: 1.3rem;
//   font-weight: 500;
//   justify-content: center;
//   padding: 1rem;
// }

// .skill-cell {
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   align-items: center;
// }

// .skill-cell svg {
//   fill: white;
//   width: 3rem;
// }

// .skill-cell img {
//   width: 3rem;
// }

// .display-tab.display-contact {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 2rem;
// }

// .display-tab.display-contact h1 {
//   font-size: 1.3rem;
// }

// .display-tab.display-contact h2 {
//   font-family: 'Big Shoulders Text', cursive;
//   font-size: 2rem;
// }

// .contact-cell {
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// }

// .social-contact-cell {
//   margin-left: 41px;
// }

// .gmail-icon,
// .phone-icon {
//   cursor: default;
// }

// /* MEDIA QUERIES */

// @media (max-width: 1000px) {
//   .skills-technical {
//     flex-direction: column;
//   }

//   .skills-card {
//     flex-direction: row;
//     justify-content: space-between;
//     gap: 2rem;
//   }

//   .skills-table {
//     width: auto;
//     height: auto;
//     flex-direction: row;
//     gap: 2rem;
//     justify-content: center;
//   }
// }

// @media (max-width: 700px) {
//   .display-projects.display-tab {
//     display: flex;
//     flex-direction: column;
//   }

//   .display-tab.display-contact {
//     align-items: flex-start;
//   }

//   .display-tab.display-contact h2 {
//     font-family: 'Dosis', sans-serif;
//     font-size: 1.3rem;
//   }

//   .contact-profile-icons {
//     margin-left: 0;
//   }

//   .contact-cell {
//     flex-wrap: wrap;
//   }

//   .contact-cell.social-contact-cell {
//     margin-left: 0;
//   }

//   .skills-card {
//     flex-direction: column;
//     gap: 1rem;
//   }

//   .skills-table {
//     flex-wrap: wrap;
//     justify-content: center;
//   }
// }


