export type MarketSummary = {
  tradeDate: string;
  amount: string;
  volume: string;
  trades: string;
  indexName: string;
  indexValue: string;
  indexChange: string;
  updateTime: string;
};

export type StockItem = {
  stockNo: string;
  name: string;
  close: string;
  change: string;
  volume: string;
  amount: string;
  industry: string;
};

export const marketSummary: MarketSummary = {
  tradeDate: "2026-04-14",
  amount: "745,263,248,249 元",
  volume: "5,655,057,217 股",
  trades: "3,947,482 筆",
  indexName: "發行量加權股價指數",
  indexValue: "20,315.62",
  indexChange: "+188.47",
  updateTime: "2026-04-14 15:35"
};

export const stocks: StockItem[] = [
  {
    stockNo: "2330",
    name: "台積電",
    close: "865.00",
    change: "+12.00",
    volume: "32,580",
    amount: "28,176,700,000",
    industry: "半導體"
  },
  {
    stockNo: "2317",
    name: "鴻海",
    close: "154.50",
    change: "+2.00",
    volume: "41,220",
    amount: "6,362,490,000",
    industry: "電子代工"
  },
  {
    stockNo: "2454",
    name: "聯發科",
    close: "1,385.00",
    change: "-10.00",
    volume: "8,112",
    amount: "11,235,120,000",
    industry: "IC 設計"
  },
  {
    stockNo: "2308",
    name: "台達電",
    close: "372.50",
    change: "+4.50",
    volume: "9,856",
    amount: "3,671,360,000",
    industry: "電源供應"
  },
  {
    stockNo: "2882",
    name: "國泰金",
    close: "61.80",
    change: "+0.60",
    volume: "25,331",
    amount: "1,566,445,800",
    industry: "金融保險"
  },
  {
    stockNo: "2881",
    name: "富邦金",
    close: "89.10",
    change: "-0.20",
    volume: "18,902",
    amount: "1,684,168,200",
    industry: "金融保險"
  }
];
