import React, { useState } from 'react';
import Header from './components/Header';
import StudyGuide from './components/StudyGuide';
import TeachingGuide from './components/TeachingGuide';
import TabNavigation from './components/TabNavigation';
import { Tab } from './types';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('guia-estudo');

    return (
        <div className="container mx-auto p-4 md:p-8">
            <Header />
            <main>
                <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
                {activeTab === 'guia-estudo' ? <StudyGuide /> : <TeachingGuide />}
            </main>
        </div>
    );
};

export default App;