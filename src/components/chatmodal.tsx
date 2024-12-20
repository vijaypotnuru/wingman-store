"use client";

import { useState } from "react";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: number;
  productName: string;
}

export default function ChatModal({
  isOpen,
  onClose,
  orderId,
  productName,
}: ChatModalProps) {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  return (
    <div
      style={{ marginTop: "0px" }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
    >
      <div className="bg-white rounded-2xl w-full max-w-2xl h-[600px] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Order #{orderId}</h3>
            <p className="text-sm text-gray-500">{productName}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* AI Message */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#94A3B8] rounded-lg flex items-center justify-center text-white">
              AI
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 max-w-[80%]">
              <p className="text-gray-900">
                How can I help you with this order?
              </p>
              <span className="text-xs text-gray-500 mt-1 block">10:24 AM</span>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-start gap-3 flex-row-reverse">
            <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
              U
            </div>
            <div className="bg-[#115E56] text-white rounded-2xl p-4 max-w-[80%]">
              <p>I have a question about the delivery time.</p>
              <span className="text-xs opacity-70 mt-1 block">10:25 AM</span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => {
                // Handle send message
                setMessage("");
              }}
              className="bg-[#115E56] text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
