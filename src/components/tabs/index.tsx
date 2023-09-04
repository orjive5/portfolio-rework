'use client'

import TabSwitch from '../tabSwitch';
import Project from '../project';
import { usePortfolioStore } from '@/store';
import { projectsData } from '../../constants/projectsData'
import Skills from '../skills';
import Contact from '../contact';

const Tabs = () => {

  const store = usePortfolioStore();

  return (
    <main className='flex flex-grow flex-col items-center gap-8'>
      <TabSwitch />
      {store.activeTab === 'Projects' && (
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 md:grid-rows-2 gap-8'>
          {projectsData.map(p => {
            return (
              <Project
                key={p.description}
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
      {store.activeTab === 'Contact' && <Contact />}
    </main>
  );
};

export default Tabs;


