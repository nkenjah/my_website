export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-mono">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>SYSTEM ONLINE</span>
          </div>
          <p>
            © {new Date().getFullYear()} Emanuel Nkenjah. Crafted with intention.
          </p>
          <a href="#home" className="font-mono hover:text-primary transition-colors">
            BACK_TO_TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
