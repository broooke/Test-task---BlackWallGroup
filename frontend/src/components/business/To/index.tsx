import React, {useCallback, useEffect, useState} from 'react';
import {ConvertorTabs} from "../../../types/convertor";
import classes from "../FromTo.module.scss";
import Tabs from "../../ui/Tabs";
import {getTabText} from "../../../helpers/text";
import SelectInput from "../../ui/Select";
import {useTypedSelector} from "../../../hooks/selector";
import {useSortDirections} from "../../../hooks/direction";

const ToBlock = () => {
    const directions = useTypedSelector(state => state.convertor.directions)
    const [activeTab, setActiveTab] = useState<ConvertorTabs>(ConvertorTabs.All)
    const fromSelectValue = useTypedSelector(state => state.convertor.fromSelectValue)
    const sortDirections = useSortDirections(directions, activeTab, fromSelectValue)

    useEffect(() => {
        setActiveTab(ConvertorTabs.All)
    }, [fromSelectValue])

    const handleTabChange = useCallback((tab: ConvertorTabs) => {
        setActiveTab(tab)
    }, [])

    return (
        <div className={classes.block}>
            <h6>Получаете</h6>
            <Tabs
                tabs={Object.values(ConvertorTabs).map((tab) => ({ tab, title: getTabText(tab)}))}
                activeTab={activeTab}
                handleTabChange={handleTabChange}
            />
            <SelectInput options={sortDirections.map((el) => ({value: el.code, label: el.name}))} />
        </div>
    );
};

export default ToBlock;
