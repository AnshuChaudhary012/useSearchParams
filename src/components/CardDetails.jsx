import { useSearchParams } from "react-router-dom";
import { cards } from "../utility/helpers.js";

export default function CardDetail() {
  const [searchParams] = useSearchParams();
  const selectedTitle = searchParams.get("category") || "Design";
  const selectedCard = cards.find((card) => card.title === selectedTitle) || cards[0];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl shadow-slate-200 ring-1 ring-slate-200">
        <div className={`mb-6 h-2 w-20 rounded-full ${selectedCard.accent}`} />

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Focus Area
        </p>
        <h1 className="mb-3 text-4xl font-bold text-slate-900">{selectedCard.title}</h1>
        <p className="mb-6 text-lg text-slate-600">{selectedCard.text}</p>

        <div className="mb-8 rounded-2xl bg-slate-50 p-5 text-slate-700">
          <h2 className="mb-2 text-xl font-semibold text-slate-800">Overview</h2>
          <p className="leading-7">
            This detail view is built from the same card data used in the helper list, so it stays in sync with the original content. It gives the selected item a clearer presentation and makes it easier to understand the value behind each option.
          </p>
        </div>

        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
              ✓
            </span>
            <span>Clear visual emphasis for the selected category.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
              ✓
            </span>
            <span>Simple layout designed to highlight the main idea.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
              ✓
            </span>
            <span>Consistent styling that matches the rest of the card set.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
