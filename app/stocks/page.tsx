"use client";

import { useMemo, useState } from "react";
import { stocks } from "@/lib/mock-data";

export default function StocksPage() {
  const [keyword, setKeyword] = useState("");

  const filteredStocks = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    if (!q) {
      return stocks;
    }

    return stocks.filter((item) => {
      return (
        item.stockNo.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.industry.toLowerCase().includes(q)
      );
    });
  }, [keyword]);

  return (
    <div className="container-page min-h-screen py-12">
      <h1 className="section-title">個股資訊</h1>
      <p className="section-desc">
        第二版已加入搜尋功能，可依股票代號、名稱或產業快速篩選。
      </p>

      <div className="mt-8 card p-6">
        <label className="mb-3 block text-sm font-semibold text-slate-700">
          搜尋股票
        </label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="輸入股票代號、名稱或產業，例如 2330 / 台積電 / 半導體"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none ring-0 transition focus:border-slate-900"
        />
        <p className="mt-3 text-sm text-slate-500">
          目前顯示 {filteredStocks.length} 筆資料
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        <table className="min-w-full border-collapse">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">股票代號</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">名稱</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">收盤價</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">漲跌</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">成交量(張)</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">成交金額</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">產業</th>
            </tr>
          </thead>
          <tbody>
            {filteredStocks.map((stock) => (
              <tr key={stock.stockNo} className="border-t border-slate-200">
                <td className="px-4 py-3 text-slate-900">{stock.stockNo}</td>
                <td className="px-4 py-3 text-slate-900">{stock.name}</td>
                <td className="px-4 py-3 text-slate-900">{stock.close}</td>
                <td className="px-4 py-3 text-slate-900">{stock.change}</td>
                <td className="px-4 py-3 text-slate-900">{stock.volume}</td>
                <td className="px-4 py-3 text-slate-900">{stock.amount}</td>
                <td className="px-4 py-3 text-slate-900">{stock.industry}</td>
              </tr>
            ))}
            {filteredStocks.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                  找不到符合條件的資料
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-10 card p-6">
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
