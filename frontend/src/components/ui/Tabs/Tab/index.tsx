import React, {FC, memo} from 'react';
import {ConvertorTabs} from "../../../../types/convertor";
import classes from '../Tabs.module.scss'

export interface ITab {
    tab: ConvertorTabs
    title: string
}

interface Props {
    tab: ITab
    activeTab: string
    handleTabChange: (tab: ConvertorTabs) => void
}

const Tab: FC<Props> = ({tab, activeTab, handleTabChange}) => {
    const isActive = tab.tab === activeTab

    return (
        <div onClick={() => handleTabChange(tab.tab)} className={isActive ? classes.active : ''}>
            {tab.title}
        </div>
    );
};

export default memo(Tab);
