import React, {FC, useEffect, useRef} from 'react';
import classes from './Home.module.scss'
import Card from "../../components/ui/Card/Card";
import FromBlock from "../../components/business/From";
import ToBlock from "../../components/business/To";
import {loadDirections, loadFilters} from "../../store/actions/convertor";
import {useAppDispatch} from "../../hooks/dispatch";

const Home: FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(loadFilters())
        dispatch(loadDirections())
    }, [])

    return (
        <section className={classes.home}>
            <Card>
                <FromBlock />
                <ToBlock />
            </Card>
        </section>
    );
};

export default Home;
