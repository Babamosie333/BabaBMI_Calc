import { BMICalculator } from "@/components/bmi-calculator";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black selection:bg-primary/30">
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative mx-auto px-4 py-16 sm:py-24">
          <BMICalculator />
        </div>
      </div>
      
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center gap-6">
      <a 
        href="https://github.com/Babamosie333/BabaBMI_Calc.git" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-medium"
      >
         <Github className="w-5 h-5" />
        Source Code
      </a>
    </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            © {new Date().getFullYear()} BabaBMI Cal. Professional Health Metrics for a better lifestyle.
          </p>
        </div>
      </footer>
    </main>
  );
}
