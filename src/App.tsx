import { Route } from "wouter";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Programming from "./pages/Programming";
import WindowsTools from "./pages/WindowsTools";
import Games from "./pages/Games";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
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
      <Route path="/tools/games">
        <Games />
      </Route>
    </div>
  );
}
