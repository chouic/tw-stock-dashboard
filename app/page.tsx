import Link from "next/link";

const marketCards = [
  {
    title: "上市大盤統計",
    description: "顯示成交金額、成交股數、成交筆數與每日市場摘要。",
  },
  {
    title: "個股歷史資料",
    description: "查詢上市個股日線、成交量與後續分析結果。",
  },
  {
    title: "資料更新狀態",
    description: "顯示 TWSE 原始資料下載、匯入與分析時間。",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
            GitHub + Vercel
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Taiwan Stock Analysis Website
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            這是你的第一版免費部署台股網站，可先展示大盤、個股、資料更新狀態，
            後續再接你自己的 TWSE 下載程式與本地資料庫 API。
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/market"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow"
            >
              查看大盤
            </Link>
            <Link
              href="/stocks"
              className="rounded-xl border border-slate-400 px-6 py-3 font-semibold text-white"
            >
              查看個股
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {marketCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-xl font-bold text-slate-900">{card.title}</h2>
              <p className="mt-3 text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold">目前版本內容</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">已完成</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>‧ GitHub + Vercel 免費部署架構</li>
                <li>‧ 首頁展示</li>
                <li>‧ 大盤頁面</li>
                <li>‧ 個股頁面</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">下一步可擴充</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>‧ 串接 TWSE 匯入資料庫結果</li>
                <li>‧ 個股查詢 API</li>
                <li>‧ K 線與成交量圖表</li>
                <li>‧ 月營收與籌碼分析</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}