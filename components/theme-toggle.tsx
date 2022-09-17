import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Expand } from "@theme-toggles/react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const inverse = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <Expand
      onToggle={() => setTheme(inverse)}
      className="ml-auto text-3xl tablet:order-last tablet:ml-4"
    />
  );
}
