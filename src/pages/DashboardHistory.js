import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "shrimp_history_v1";

function seedIfEmpty() {
  const exists = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  if (exists.length) return;

  const samples = [
    {
      id: "r-" + (Date.now() - 1000 * 60 * 60 * 24 * 2),
      fileName: "pond_2025-09-30.jpg",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
      totalPL: 5000,
      biomass: "7.5",
      feedRecommendation: "11.25",
      breakdown: { protein: "6.19", filler: "5.06" },
    },
    {
      id: "r-" + (Date.now() - 1000 * 60 * 60 * 24 * 10),
      fileName: "pond_2025-06-03.jpg",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
      totalPL: 3200,
      biomass: "4.8",
      feedRecommendation: "8.00",
      breakdown: { protein: "4.40", filler: "3.60" },
    },
    {
      id: "r-" + (Date.now() - 1000 * 60 * 60 * 24 * 60),
      fileName: "pond_2025-01-28.jpg",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60).toISOString(),
      totalPL: 1500,
      biomass: "1.9",
      feedRecommendation: "3.75",
      breakdown: { protein: "2.06", filler: "1.69" },
    },
  ];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(samples));
}

export default function DashboardHistory() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    seedIfEmpty();
    const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    all.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
    setItems(all);
  }, []);

  const toggleOpen = (id) => {
    setItems((prev) => prev.map(it => it.id === id ? { ...it, _open: !it._open } : it));
  };

  if (!items.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a2f1f] via-[#2d8a6b] to-[#3cb371] p-6">
        <div className="text-center text-white">
          <p className="mb-4 text-xl">No history yet. Upload an image to create your first analysis.</p>
          <button onClick={() => navigate("/dashboard")} className="px-6 py-3 bg-shrimp-orange text-white rounded-lg hover:bg-orange-600 transition-colors">
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a2f1f] via-[#2d8a6b] to-[#3cb371] p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="inline-flex items-center gap-2 text-white hover:text-shrimp-orange transition-colors mb-4"
          >
            ← Back to Dashboard
          </button>
          <h2 className="text-3xl font-bold text-white">Analysis History</h2>
        </div>

        <div className="space-y-4">
          {items.map(item => {
            const created = new Date(item.timestamp);
            const dateStr = created.toLocaleDateString();
            const timeStr = created.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            return (
              <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                <button
                  onClick={() => toggleOpen(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={!!item._open}
                >
                  <div>
                    <div className="text-white/70 text-sm">{dateStr}</div>
                    <div className="text-white font-semibold">{timeStr}</div>
                    <div className="text-shrimp-orange font-medium">{item.totalPL.toLocaleString()} shrimp counted</div>
                  </div>
                  <div className="text-white/50 text-2xl">
                    {item._open ? "−" : "+"}
                  </div>
                </button>

                {item._open && (
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-white/70 text-sm">Total Count</div>
                        <div className="text-2xl font-bold text-shrimp-orange">{item.totalPL.toLocaleString()}</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-white/70 text-sm">Biomass</div>
                        <div className="text-2xl font-bold text-shrimp-orange">{item.biomass}g</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-white/70 text-sm">Feed Rec.</div>
                        <div className="text-2xl font-bold text-shrimp-orange">{item.feedRecommendation}g</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => navigate(`/results?id=${item.id}`)}
                        className="px-4 py-2 bg-shrimp-orange text-white rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => {
                          const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]").filter(x=>x.id!==item.id);
                          localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
                          setItems(all);
                        }}
                        className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
