import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Route } from "wouter";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Programming from "./pages/Programming";
import WindowsTools from "./pages/WindowsTools";
import LoadingScreen from "./components/LoadingScreen";
import ChatWidget from "./components/ChatWidget";

const HERO_IMAGES = [
  "/hero/yui.png",
  "/hero/blue.png",
  "/hero/white.png",
  "/img/celular.jpeg",
];

function preloadImages(urls: string[]): Promise<void> {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = url;
        }),
    ),
  ).then(() => undefined);
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MIN_TIME = 3000;
    const start = Date.now();

    preloadImages(HERO_IMAGES).then(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_TIME - elapsed);
      setTimeout(() => setIsLoading(false), remaining);
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-zinc-950 text-white"
        >
          <Route path="/" component={Home} />
          <Route path="/tools">
            <Tools />
          </Route>
          <Route path="/tools/programming">
            <Programming />
          </Route>
          <Route path="/tools/windows">
            <WindowsTools />
          </Route>
          <ChatWidget />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
