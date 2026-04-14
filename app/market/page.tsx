const marketData = [
  { item: "成交金額", value: "745,263,248,249 元" },
  { item: "成交股數", value: "5,655,057,217 股" },
  { item: "成交筆數", value: "3,947,482 筆" },
];

export default function MarketPage() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12">
      <h1 className="text-3xl font-bold text-slate-900">大盤資訊</h1>
      <p className="mt-3 text-slate-600">
        這裡先放展示資料，後續可改成由你的資料庫自動讀取 TWSE 匯入結果。
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {marketData.map((row) => (
          <div key={row.item} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">{row.item}</p>
            <p className="mt-3 text-2xl font-bold text-slate-900">{row.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 className="text-xl font-bold">資料來源規劃</h2>
        <ul className="mt-4 space-y-2 text-slate-600">
          <li>• 官方來源：TWSE 每日收盤行情 / 大盤統計資訊</li>
          <li>• 本地流程：下載 CSV → 匯入資料庫 → 網站讀取 API</li>
          <li>• 部署方式：前端放 Vercel，資料處理仍放你自己的主機</li>
        </ul>
      </div>
    </div>
  );
}
