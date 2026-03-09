import { useMemo, useRef, useState } from "react";

const HISTORY_WINDOW = 6;
const MAX_HISTORY_ITEMS = HISTORY_WINDOW * 8;

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

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Szia! Miben segíthetek? 😊" }
  ]);
  const lastAssistantIndexRef = useRef(-1);

  const recentHistory = useMemo(
    () => chatHistory.slice(-(HISTORY_WINDOW * 2)),
    [chatHistory]
  );

  async function askQuestion() {
    const trimmedQuestion = question.trim();
    const trimmedContext = context.trim();
    if (!trimmedQuestion || isLoading) return;

    const userMessage = { role: "user", content: trimmedQuestion };
    setMessages((prev) => {
      const next = [...prev, userMessage, { role: "assistant", content: "" }];
      lastAssistantIndexRef.current = next.length - 1;
      return next;
    });

    setQuestion("");
    setIsLoading(true);

    try {
      const response = await fetch("/closedai-api/question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmedQuestion,
          context: trimmedContext || null,
          history: recentHistory,
          history_window: HISTORY_WINDOW
        })
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(errorBody || `Request failed (${response.status})`);
      }

      if (!response.body) {
        throw new Error("No response stream available");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullAnswer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        fullAnswer += chunk;

        setMessages((prev) =>
          prev.map((message, index) =>
            index === lastAssistantIndexRef.current
              ? { ...message, content: fullAnswer }
              : message
          )
        );
      }

      fullAnswer += decoder.decode();
      if (!fullAnswer.trim()) fullAnswer = "(empty response)";

      setMessages((prev) =>
        prev.map((message, index) =>
          index === lastAssistantIndexRef.current
            ? { ...message, content: fullAnswer }
            : message
        )
      );

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
      const errorMessage = `Error: ${error.message}`;
      setMessages((prev) =>
        prev.map((message, index) =>
          index === lastAssistantIndexRef.current
            ? { ...message, content: errorMessage }
            : message
        )
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div className="ui-panel flex h-[32rem] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-base)]">
          <div className="flex items-center justify-between border-b border-[var(--border-soft)] bg-[color-mix(in_srgb,var(--surface-base)_86%,var(--color-mist-200))] px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-base)] text-[var(--accent-primary)]">
                <RobotIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">ClosedAI Chat</p>
                <p className="text-xs text-[var(--text-muted)]">Online</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-base)] text-[var(--text-muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink-500)]"
              aria-label="Chat bezarasa"
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
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto bg-[var(--accent-primary)] text-[var(--color-mist-200)]"
                    : "mr-auto border border-[var(--border-soft)] bg-[var(--surface-muted)] text-[var(--text-primary)]"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--border-soft)] p-3">
            <textarea
              value={context}
              onChange={(event) => setContext(event.target.value)}
              placeholder="Optional context"
              className="mb-2 h-20 w-full resize-none rounded-xl border border-[var(--border-soft)] bg-[var(--surface-base)] px-3 py-2 text-sm outline-none transition focus:border-[var(--accent-secondary)] focus:ring-2 focus:ring-[rgba(136,162,170,0.25)]"
            />
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
                placeholder="Type your question..."
                className="h-10 flex-1 rounded-xl border border-[var(--border-soft)] bg-[var(--surface-base)] px-3 text-sm outline-none transition focus:border-[var(--accent-secondary)] focus:ring-2 focus:ring-[rgba(136,162,170,0.25)]"
              />
              <button
                type="button"
                onClick={askQuestion}
                disabled={isLoading}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--accent-soft)] bg-[var(--accent-soft)] text-[var(--accent-primary)] transition hover:border-[var(--color-sun-200)] hover:bg-[var(--color-sun-200)] disabled:cursor-not-allowed disabled:opacity-70"
                aria-label="Kuldes"
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
          aria-label="Chat megnyitasa"
        >
          <RobotIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
