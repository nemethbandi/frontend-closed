import { useMemo, useState } from "react";

const HISTORY_WINDOW = 6;
const MAX_HISTORY_ITEMS = HISTORY_WINDOW * 8;
const STARTER_QUESTIONS = [
  "Mik a legkelendőbb termékek?",
  "Ajánlj nekem egy modellt!"
];

function RobotIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2v3m-5 4h10a3 3 0 0 1 3 3v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4a3 3 0 0 1 3-3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 14h.01M15 14h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M9 18h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function TypingBubble() {
  return (
    <div className="mr-auto w-fit rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-muted)] px-3 py-2">
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[var(--text-muted)]"
            style={{
              animationName: "chatTypingDot",
              animationDuration: "1.2s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${index * 0.16}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Szia! Miben segíthetek?" }
  ]);

  const recentHistory = useMemo(
    () => chatHistory.slice(-(HISTORY_WINDOW * 2)),
    [chatHistory]
  );

  const hasUserMessages = messages.some((message) => message.role === "user");

  async function askQuestion(inputQuestion = question) {
    const trimmedQuestion = inputQuestion.trim();
    if (!trimmedQuestion || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmedQuestion }]);
    setQuestion("");
    setIsLoading(true);

    try {
      const response = await fetch("/closedai-api/question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmedQuestion,
          history: recentHistory,
          history_window: HISTORY_WINDOW
        })
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(errorBody || `A kérés sikertelen (${response.status})`);
      }

      const data = await response.json();
      let fullAnswer = typeof data.answer === "string" ? data.answer : "";
      if (!fullAnswer.trim()) fullAnswer = "(üres válasz)";

      setMessages((prev) => [...prev, { role: "assistant", content: fullAnswer }]);

      setChatHistory((prev) => {
        const next = [
          ...prev,
          { role: "user", content: trimmedQuestion },
          { role: "assistant", content: fullAnswer }
        ];
        if (next.length > MAX_HISTORY_ITEMS) {
          return next.slice(next.length - MAX_HISTORY_ITEMS);
        }
        return next;
      });
    } catch (error) {
      const errorMessage = `Hiba: ${error.message}`;
      setMessages((prev) => [...prev, { role: "assistant", content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <style>{`
        @keyframes chatTypingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.45; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
      `}</style>
      {isOpen ? (
        <div className="ui-panel flex h-[32rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-base)]">
          <div className="flex items-center justify-between border-b border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-base)_86%,var(--color-mist-200))] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-base)] text-[var(--accent-primary)]">
                <RobotIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">A te asszisztensed</p>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                  <span className="h-2 w-2 rounded-full bg-[#37d67a]" aria-hidden="true" />
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-base)] text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink-500)]"
              aria-label="Chat bezárása"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`}>
                <div
                  className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "ml-auto bg-[var(--accent-primary)] text-[var(--color-mist-200)]"
                      : "mr-auto border border-[var(--border-soft)] bg-[var(--surface-muted)] text-[var(--text-primary)]"
                  }`}
                >
                  {message.content}
                </div>

                {!hasUserMessages && index === 0 && (
                  <div className="mt-2 ml-auto flex w-fit flex-col items-end gap-2">
                    {STARTER_QUESTIONS.map((starterQuestion) => (
                      <button
                        key={starterQuestion}
                        type="button"
                        onClick={() => askQuestion(starterQuestion)}
                        disabled={isLoading}
                        className="rounded-full border border-[var(--accent-soft)] bg-[var(--surface-base)] px-3 py-1.5 text-xs text-[var(--text-primary)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {starterQuestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && <TypingBubble />}
          </div>

          <div className="border-t border-[var(--border-soft)] p-3">
            <div className="flex gap-2">
              <input
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    askQuestion();
                  }
                }}
                type="text"
                placeholder="Írd be a kérdésed..."
                className="h-10 flex-1 rounded-xl border border-[var(--border-soft)] bg-[var(--surface-base)] px-3 text-sm outline-none transition focus:border-[var(--accent-secondary)] focus:ring-2 focus:ring-[rgba(136,162,170,0.25)]"
              />
              <button
                type="button"
                onClick={() => askQuestion()}
                disabled={isLoading}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--accent-soft)] bg-[var(--accent-soft)] text-[var(--accent-primary)] transition hover:border-[var(--color-sun-200)] hover:bg-[var(--color-sun-200)] disabled:cursor-not-allowed disabled:opacity-70"
                aria-label="Küldés"
              >
                {isLoading ? (
                  <span className="text-xs">...</span>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14m0 0-5-5m5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-base)] text-[var(--accent-primary)] shadow-[0_14px_34px_-18px_rgba(22,37,33,0.45)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink-500)]"
          aria-label="Chat megnyitása"
        >
          <RobotIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
