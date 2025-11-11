// src/theme/Layout/index.js
import React, { useState, useEffect } from "react";
import OriginalLayout from "@theme-original/Layout"; // Keep original Layout
import SimpleChat from "@site/src/components/SimpleChat";

export default function LayoutWrapper(props) {
  const [selectedText, setSelectedText] = useState("");

  useEffect(() => {
    const handleMouseUp = () => {
      const text = window.getSelection().toString().trim();
      if (text) setSelectedText(text);
    };
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <>
      <OriginalLayout {...props}>
        {props.children}
        <SimpleChat apiUrl="http://localhost:4000/chat" selectedText={selectedText} />
      </OriginalLayout>
    </>
  );
}

