"use client";

import { useState } from "react";
import { Question } from "../data/questions";

export default function QuestionCard({ q }: { q: Question }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="bg-white shadow-md p-5 rounded-xl mb-5">
      <h2 className="text-lg font-semibold mb-3">{q.question}</h2>

      <div className="space-y-2">
        {q.options.map((opt, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`block w-full text-left p-2 rounded-lg border ${
              selected === index
                ? index === q.answer
                  ? "bg-green-200"
                  : "bg-red-200"
                : "bg-gray-100"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {selected !== null && (
        <p className="mt-3 font-medium">
          {selected === q.answer ? "✅ Correct" : "❌ Incorrect"}
        </p>
      )}
    </div>
  );
}
