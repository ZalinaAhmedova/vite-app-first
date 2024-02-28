import logo from "/logo-name.svg";
import { useState, useEffect } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <header>
      <img src={logo} alt="logo"></img>
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
