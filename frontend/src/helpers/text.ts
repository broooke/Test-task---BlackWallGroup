import {ConvertorTabs} from "../types/convertor";

export const getTabText = (tab: ConvertorTabs) => {
    switch (tab) {
        case ConvertorTabs.All:
            return 'Все'
        case ConvertorTabs.Bank:
            return 'Банки'
        case ConvertorTabs.Crypto:
            return 'Криптовалюты'
        case ConvertorTabs.Money:
            return 'Наличные'
    }
}