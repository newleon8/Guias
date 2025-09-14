import React from 'react';
import { Tab } from '../types';

interface TabNavigationProps {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
    const getButtonClasses = (tab: Tab) => {
        const baseClasses = "font-semibold py-2 px-4 md:px-6 rounded-lg border-2 transition";
        if (activeTab === tab) {
            return `${baseClasses} bg-blue-600 text-white border-blue-600`;
        }
        return `${baseClasses} border-slate-300 hover:bg-slate-200 text-slate-700`;
    };

    return (
        <nav className="flex justify-center mb-8 space-x-2 md:space-x-4">
            <button className={getButtonClasses('guia-estudo')} onClick={() => onTabChange('guia-estudo')}>
                Guia de Estudos
            </button>
            <button className={getButtonClasses('guia-ensino')} onClick={() => onTabChange('guia-ensino')}>
                Guia de Ensino
            </button>
        </nav>
    );
};

export default TabNavigation;