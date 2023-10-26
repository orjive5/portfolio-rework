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
    <main className={`${store.loading && 'cursor-wait'} flex flex-grow flex-col items-center gap-4 sm:gap-8`}>
      <TabSwitch />
      {store.activeTab === 'Projects' && (
        <section className='flex flex-col gap-4 sm:gap-8'>
          {projectsData.map(p => {
            return (
              <Project
                key={p.description}
                screenshot={p.screenshot}
                name={p.name}
                description={p.description}
                stack={p.stack}
                demo={p.demo}
                code={p.code}
              />
            )
          })}
        </section>
      )}
      {store.activeTab === 'Skills' && <Skills />}
      {store.activeTab === 'Contact' && <Contact />}
    </main>
  );
};

export default Tabs;


