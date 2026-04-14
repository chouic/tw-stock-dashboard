const sampleStocks = [
  { stockNo: "2330", name: "台積電", close: "865.00", change: "+12.00", volume: "32,580" },
  { stockNo: "2317", name: "鴻海", close: "154.50", change: "+2.00", volume: "41,220" },
  { stockNo: "2454", name: "聯發科", close: "1,385.00", change: "-10.00", volume: "8,112" },
];

export default function StocksPage() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">個股資訊</h1>
      <p className="mt-3 text-slate-600">
        目前先放展示資料，之後可接你的上市個股資料表。
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        <table className="min-w-full border-collapse">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">股票代號</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">名稱</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">收盤價</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">漲跌</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">成交量(張)</th>
            </tr>
          </thead>
          <tbody>
            {sampleStocks.map((stock) => (
              <tr key={stock.stockNo} className="border-t border-slate-200">
                <td className="px-4 py-3 text-slate-900">{stock.stockNo}</td>
                <td className="px-4 py-3 text-slate-900">{stock.name}</td>
                <td className="px-4 py-3 text-slate-900">{stock.close}</td>
                <td className="px-4 py-3 text-slate-900">{stock.change}</td>
                <td className="px-4 py-3 text-slate-900">{stock.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-xl font-bold">後續可以接的功能</h2>
        <ul className="mt-4 space-y-2 text-slate-600">
          <li>• 輸入股票代號查詢歷史日線</li>
          <li>• 顯示近 20 日成交量與均價</li>
          <li>• 只顯示上市股票資料</li>
          <li>• 串接你自己的分析結果表</li>
        </ul>
      </div>
    </div>
  );
}
