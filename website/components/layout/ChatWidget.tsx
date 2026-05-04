"use client";

import Script from "next/script";

export function ChatWidget() {
  return (
    <Script
      id="retell-widget"
      src="https://dashboard.retellai.com/retell-widget.js"
      strategy="lazyOnload"
      data-public-key="public_key_462b3086b404893b6a625"
      data-agent-id="agent_869a95e48b30ebc1c7317dd683"
      data-agent-version="V1"
      data-title="All Time Plumbers"
      data-bot-name="Pete's Assistant"
      data-popup-message="Hi! Need a plumber? I'm here to help you get a quote or book an appointment."
      data-show-ai-popup="true"
      data-show-ai-popup-time="4"
      data-auto-open="false"
      data-color="#BF2235"
    />
  );
}
