import React, {FC, PropsWithChildren} from 'react';
import classes from './Card.module.scss'

const Card: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={classes.card}>
            {children}
        </div>
    );
};

export default Card;
