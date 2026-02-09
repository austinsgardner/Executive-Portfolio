import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Skills", href: "#skills" },
  { label: "Chatbot", href: "https://bit.ly/4bsidlm" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-4 shadow-lg"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg group-hover:shadow-blue-500/25 transition-all">
            AG
          </div>
          <span className="font-display font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
            Austin Gardner
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            item.href.startsWith("http") ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {item.label}
              </button>
            )
          ))}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-all"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {NAV_ITEMS.map((item) => (
                item.href.startsWith("http") ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left py-2 text-lg font-medium text-muted-foreground hover:text-white"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left py-2 text-lg font-medium text-muted-foreground hover:text-white"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
