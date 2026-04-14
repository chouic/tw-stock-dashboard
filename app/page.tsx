import Link from "next/link";
import { marketSummary, stocks } from "@/lib/mock-data";

const quickCards = [
  {
    title: "大盤統計",
    description: "查看成交金額、成交量、成交筆數與指數變化。",
    href: "/market"
  },
  {
    title: "個股查詢",
    description: "依股票代號或名稱快速搜尋上市個股展示資料。",
    href: "/stocks"
  },
  {
    title: "資料更新",
    description: "顯示網站目前使用的示範資料更新時間與下一步規劃。",
    href: "/market"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 text-white">
        <div className="container-page py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
            GitHub + Vercel + Next.js
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            台股分析網站第二版
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            目前使用本地示範資料，後續可直接串接你自己的台股下載、整理與分析 API。
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

      <section className="container-page py-12">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="metric-card">
            <p className="text-sm text-slate-500">交易日期</p>
            <p className="mt-3 text-2xl font-bold">{marketSummary.tradeDate}</p>
          </div>
          <div className="metric-card">
            <p className="text-sm text-slate-500">成交金額</p>
            <p className="mt-3 text-2xl font-bold">{marketSummary.amount}</p>
          </div>
          <div className="metric-card">
            <p className="text-sm text-slate-500">加權指數</p>
            <p className="mt-3 text-2xl font-bold">{marketSummary.indexValue}</p>
          </div>
          <div className="metric-card">
            <p className="text-sm text-slate-500">今日漲跌</p>
            <p className="mt-3 text-2xl font-bold">{marketSummary.indexChange}</p>
          </div>
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {quickCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="card block p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-slate-900">{card.title}</h2>
              <p className="mt-3 text-slate-600">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-12">
        <div className="card p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">熱門示範個股</h2>
              <p className="mt-2 text-slate-600">
                第二版已加入資料集中管理，後續可直接換成 API 回傳資料。
              </p>
            </div>

            <Link
              href="/stocks"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
            >
              前往個股查詢
            </Link>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <table className="min-w-full border-collapse bg-white">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">股票代號</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">名稱</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">收盤價</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">漲跌</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">產業</th>
                </tr>
              </thead>
              <tbody>
                {stocks.slice(0, 5).map((stock) => (
                  <tr key={stock.stockNo} className="border-t border-slate-200">
                    <td className="px-4 py-3">{stock.stockNo}</td>
                    <td className="px-4 py-3">{stock.name}</td>
                    <td className="px-4 py-3">{stock.close}</td>
                    <td className="px-4 py-3">{stock.change}</td>
                    <td className="px-4 py-3">{stock.industry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="card p-8">
          <h2 className="text-2xl font-bold">下一步規劃</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">資料串接</h3>
              <p className="mt-2 text-slate-600">
                把目前的假資料改成你自己的 TWSE 匯入結果或本地 API。
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <h3 className="text-lg font-semibold">個股分析</h3>
              <p className="mt-2 text-slate-600">
                加上輸入股票代號查詢歷史日線、成交量與均價。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
