import { questions } from "../data/questions";
import QuestionCard from "../components/QuestionCard";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        JEE Mock Questions
      </h1>

      <div className="max-w-2xl mx-auto">
        {questions.map((q) => (
          <QuestionCard key={q.id} q={q} />
        ))}
      </div>
    </main>
  );
}
