import { Selector, useSelector } from 'react-redux';

import { RootState } from '../store';

export function useTypedSelector<T>(selector: Selector<RootState, T>): T {
    return useSelector<RootState, T>(selector);
}