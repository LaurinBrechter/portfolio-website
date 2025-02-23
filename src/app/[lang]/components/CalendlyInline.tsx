"use client";

import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

export default function CalendlyInline() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("root"));
  }, []);

  return (
    rootElement && (
      <InlineWidget
        url="https://calendly.com/brechterlaurin/consultation-call"
        styles={{
          height: "600px",
          width: "400px",
        }}
      />
    )
  );
}
