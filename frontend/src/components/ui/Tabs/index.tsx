import React, {FC, memo, useState} from 'react';
import Tab, {ITab} from "./Tab";
import classes from './Tabs.module.scss'
import {ConvertorTabs} from "../../../types/convertor";

interface Props {
    tabs: ITab[]
    activeTab: string
    handleTabChange: (tab: ConvertorTabs) => void
}

const Tabs: FC<Props> = ({tabs, activeTab, handleTabChange}) => {

    return (
        <div className={classes.tabs}>
            {tabs.map((tab) => (
                <Tab key={tab.tab} tab={tab} activeTab={activeTab} handleTabChange={handleTabChange} />
            ))}
        </div>
    );
};

export default memo(Tabs);
