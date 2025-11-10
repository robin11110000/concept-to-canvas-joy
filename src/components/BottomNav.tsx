import { Home, Heart, Calendar, BookMarked, Share2 } from "lucide-react";

export const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Heart, label: "Favorites", active: false },
    { icon: Calendar, label: "Schedule", active: false },
    { icon: BookMarked, label: "Library", active: false },
    { icon: Share2, label: "Share", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border z-50">
      <div className="flex items-center justify-around px-2 py-3 max-w-2xl mx-auto">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              item.active 
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
