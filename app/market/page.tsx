import { marketSummary } from "@/lib/mock-data";

const marketStats = [
  { label: "成交金額", value: marketSummary.amount },
  { label: "成交股數", value: marketSummary.volume },
  { label: "成交筆數", value: marketSummary.trades },
  { label: "加權指數", value: marketSummary.indexValue }
];

export default function MarketPage() {
  return (
    <div className="container-page min-h-screen py-12">
      <h1 className="section-title">大盤資訊</h1>
      <p className="section-desc">
        目前以本地示範資料展示，之後可直接改成讀取你自己的資料庫或 API。
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {marketStats.map((item) => (
          <div key={item.label} className="metric-card">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-3 text-2xl font-bold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-bold">指數摘要</h2>
          <div className="mt-5 space-y-3 text-slate-700">
            <p>
              <span className="font-semibold">指數名稱：</span>
              {marketSummary.indexName}
            </p>
            <p>
              <span className="font-semibold">指數值：</span>
              {marketSummary.indexValue}
            </p>
            <p>
              <span className="font-semibold">漲跌：</span>
              {marketSummary.indexChange}
            </p>
            <p>
              <span className="font-semibold">更新時間：</span>
              {marketSummary.updateTime}
            </p>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold">資料流程規劃</h2>
          <ul className="mt-5 space-y-3 text-slate-600">
            <li>• 官方來源：TWSE 歷史資料與日成交資料</li>
            <li>• 本地流程：下載 → 解析 → 入庫 → API</li>
            <li>• 前端網站：Vercel 顯示整理後結果</li>
            <li>• 後續可加入每日自動更新與圖表</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 card p-6">
        <h2 className="text-xl font-bold">第二版重點</h2>
        <ul className="mt-5 grid gap-3 text-slate-600 md:grid-cols-2">
          <li>• 首頁與大盤頁使用共用資料來源</li>
          <li>• 頁面樣式統一</li>
          <li>• 後續換成真實 API 時結構不需大改</li>
          <li>• 已可直接部署到 GitHub + Vercel</li>
        </ul>
      </div>
    </div>
  );
}
