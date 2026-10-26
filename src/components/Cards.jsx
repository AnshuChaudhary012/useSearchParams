import { cards } from "../utility/helpers.js";
import { useSearchParams } from "react-router-dom";

export default function Cards() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("category"));
  return (
    <>
      {" "}
      <h1 className="text-center text-3xl">
        {searchParams.get("category" ) || "Select a card"}
      </h1>
      <p className="text-center text-2xl">{searchParams.get("text") || "Click any card to see its details"}</p>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              onClick={() =>
                setSearchParams({
                  category: card.title,
                  text: card.text,
                })
              }
              key={card.title}
              className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 ring-1 cursor-pointer ring-slate-200"
            >
              <div className={`mb-4 h-2 w-16 rounded-full ${card.accent}`} />
              <h2 className="mb-3 text-2xl font-bold text-slate-800">
                {card.title}
              </h2>
              <p className="text-sm leading-6 text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
