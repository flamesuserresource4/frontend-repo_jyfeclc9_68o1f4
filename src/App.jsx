import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white selection:bg-indigo-500/20 selection:text-indigo-700">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </div>
  );
}

export default App;
