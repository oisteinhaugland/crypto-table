export interface ICryptoEntry {
    date: Number,
    high: Number,
    low: Number,
    open: Number,
    volumeFrom: Number,
    volumeTo: Number,
    close:Number,
    conversionType: String,
    coneversionSymbol: String
}

export interface ICryptoData {
        response: String,
        message: String,
        hasWarning: Boolean,
        Type: Number,
        RateLimit: Object,
        Data: { 
            aggregated: Boolean,
            timeFrom: Number,
            timeTo:Number,
            List: [ICryptoEntry]
        }
}
