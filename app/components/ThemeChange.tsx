"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Themechanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const light = theme === "light";
  return (
    <div>
      {light ? (
        <MdDarkMode onClick={() => setTheme("dark")} size={36} />
      ) : (
        <MdLightMode onClick={() => setTheme("light")} size={36} />
      )}
    </div>
  );
};

export default Themechanger;
