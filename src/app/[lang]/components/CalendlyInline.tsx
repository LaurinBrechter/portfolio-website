"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyInline() {
  return (
    <InlineWidget
      url="https://calendly.com/brechterlaurin/consultation-call"
      styles={{
        height: "600px",
        width: "400px",
      }}
    />
  );
}
