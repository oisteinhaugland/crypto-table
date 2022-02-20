export interface ICryptoEntry {
    time: number,
    high: number,
    low: number,
    open: number,
    volumeFrom: number,
    volumeTo: number,
    close:number,
    conversionType: string,
    conversionSymbol: string
}

export interface ICryptoData {
        Response: string,
        Message: string,
        HasWarning: boolean,
        Type: number,
        RateLimit: {},
        Data: { 
            Aggregated: boolean,
            TimeFrom: number,
            TimeTo:number,
            Data: [ICryptoEntry]
        }
}
