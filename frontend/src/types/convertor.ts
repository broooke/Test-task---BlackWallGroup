export enum CryptoCode {
    BTC = 'BTC',
    ETH = 'ETH',
    USDTTRC = 'USDTTRC'
}

export enum BankCode {
    ACRUB = 'ACRUB',
    SBERRUB = 'SBERRUB',
    TCSBRUB = 'TCSBRUB',
}

export enum MoneyCode {
    CASHUSD = 'CASHUSD',
    CASHRUB = 'CASHRUB'
}

export type DirectionCodes = CryptoCode | BankCode | MoneyCode

export interface IFilter {
    from: IDirection,
    to: IDirection[]
}

export interface IDirection {
    code: DirectionCodes;
    name: string
}

export enum ConvertorTabs {
    All = 'all',
    Crypto = 'crypto',
    Bank = 'bank',
    Money = 'money'
}