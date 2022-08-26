import {BankCode, ConvertorTabs, CryptoCode, DirectionCodes, IDirection, MoneyCode} from "../types/convertor";
import {useCallback, useEffect, useMemo, useState} from "react";
import {useTypedSelector} from "./selector";

export const useSortDirections = (directions: IDirection[], tab: ConvertorTabs, fromSelectValue?: DirectionCodes | null) => {
    const filters = useTypedSelector(state => state.convertor.filters)
    const [newDirections, setNewDirections] = useState<IDirection[]>([])

    useEffect(() => {
        if (directions.length) {
            setNewDirections(directions)
            getSortDirections()
        }
    }, [directions.length, tab, fromSelectValue])

    const getSortDirections = useCallback(() => {
        let findFilter
        if (fromSelectValue && filters) {
            findFilter = filters.find((filter) => filter.from.code === fromSelectValue)
        }
        switch (tab) {
            case ConvertorTabs.All:
                if (findFilter) {
                    setNewDirections(findFilter.to)
                }
                break
            case ConvertorTabs.Money:
                if (findFilter) {
                    setNewDirections(findFilter.to.filter((direction) => {
                        const moneyCodes = Object.values(MoneyCode) as string[]
                        return moneyCodes.includes(direction.code)
                    }))
                    break
                }
                setNewDirections(directions.filter((direction) => {
                    const moneyCodes = Object.values(MoneyCode) as string[]
                    return moneyCodes.includes(direction.code)
                }))
                break
            case ConvertorTabs.Crypto:
                if (findFilter) {
                    setNewDirections(findFilter.to.filter((direction) => {
                        const cryptoCodes = Object.values(CryptoCode) as string[]
                        return cryptoCodes.includes(direction.code)
                    }))
                    break
                }
                setNewDirections(directions.filter((direction) => {
                    const cryptoCodes = Object.values(CryptoCode) as string[]
                    return cryptoCodes.includes(direction.code)
                }))
                break
            case ConvertorTabs.Bank:
                if (findFilter) {
                    setNewDirections(findFilter.to.filter((direction) => {
                        const bankCodes = Object.values(BankCode) as string[]
                        return bankCodes.includes(direction.code)
                    }))
                    break
                }
                setNewDirections(directions.filter((direction) => {
                    const bankCodes = Object.values(BankCode) as string[]
                    return bankCodes.includes(direction.code)
                }))
                break
        }
    }, [directions, tab, fromSelectValue, filters])

    return newDirections
}