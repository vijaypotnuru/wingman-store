"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat({
      api: "/api/gemini",
      initialMessages: [
        {
          id: "1",
          role: "assistant",
          content:
            "Hi! I'm your AI assistant powered by Google's Gemini. How can I help you today?",
        },
      ],
      onError: (error) => {
        toast.error(
          "An error occurred while sending your message. Please try again."
        );
        console.error("Chat error:", error);
      },
    });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
      console.error("Submit error:", err);
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-2">
          <p className="text-red-500">Failed to load chat</p>
          <button
            onClick={() => window.location.reload()}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Try reloading
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-theme(spacing.32))] bg-white">
      <div className="flex-1 overflow-y-auto p-2 md:p-6">
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[95%] md:max-w-[85%] rounded-2xl px-2 py-2 md:px-4 md:py-3 ${
                      message.role === "user"
                        ? "bg-[#115F57] text-white"
                        : "bg-[#F5F5F5] text-gray-800"
                    }`}
                  >
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      className="prose prose-sm max-w-none break-words"
                    >
                      {message.content}
                    </ReactMarkdown>
                    <div
                      className={`text-[10px] md:text-xs mt-1 ${
                        message.role === "user"
                          ? "text-white/70"
                          : "text-gray-500"
                      }`}
                    >
                      {new Date().toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-[#F5F5F5] text-gray-800 rounded-2xl px-2 py-2 md:px-4 md:py-3 max-w-[95%] md:max-w-[85%]">
                <div className="flex space-x-1 md:space-x-2">
                  <div
                    className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <div
                    className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t border-gray-200 p-2 md:p-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleFormSubmit} className="flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 rounded-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#115F57] text-gray-800 placeholder-gray-500 text-sm"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="rounded-full p-2 md:p-3 bg-[#115F57] text-white hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#115F57]"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
