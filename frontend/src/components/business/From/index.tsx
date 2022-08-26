import React, {useCallback, useState} from 'react';
import {useTypedSelector} from "../../../hooks/selector";
import classes from '../FromTo.module.scss'
import Tabs from "../../ui/Tabs";
import SelectInput from "../../ui/Select";
import {ConvertorTabs, DirectionCodes, IDirection} from "../../../types/convertor";
import {getTabText} from "../../../helpers/text";
import {useAppDispatch} from "../../../hooks/dispatch";
import {setFromSelectValue} from "../../../store/actions/convertor";
import {useSortDirections} from "../../../hooks/direction";

const FromBlock = () => {
    const directions = useTypedSelector(state => state.convertor.directions)
    const [activeTab, setActiveTab] = useState<ConvertorTabs>(ConvertorTabs.All)
    const dispatch = useAppDispatch()
    const sortDirections: IDirection[] = useSortDirections(directions, activeTab)

    const handleTabChange = useCallback((tab: ConvertorTabs) => {
        setActiveTab(tab)
    }, [])

    const onSelectChange = useCallback((value: DirectionCodes) => {
        dispatch(setFromSelectValue(value))
    }, [])

    return (
        <div className={classes.block}>
            <h6>Отдаете</h6>
            <Tabs
                tabs={Object.values(ConvertorTabs).map((tab) => ({ tab, title: getTabText(tab)}))}
                activeTab={activeTab}
                handleTabChange={handleTabChange}
            />
            <SelectInput
                onChange={onSelectChange}
                options={sortDirections.map((el) => ({value: el.code, label: el.name}))}
            />
        </div>
    );
};

export default FromBlock;
