import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Phone, Navigation, Zap } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  
  // --- PRO STATE MANAGEMENT ---
  const [position, setPosition] = useState({ lat: -6.8485, lng: 39.2023 }); // Default: Dar es Salaam
  const [locationName, setLocationName] = useState("Determining location...");
  const [isLocating, setIsLocating] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition({ lat: latitude, lng: longitude });
          setIsLocating(false);

          try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await res.json();
            const addr = data.address;
            // Professional Formatting: City, Suburb, Road
            const display = [addr.city || addr.town, addr.suburb || addr.hamlet, addr.road].filter(Boolean).join(", ");
            setLocationName(display || "Tanzania, Dar es Salaam");
          } catch (err) {
            setLocationName("Location Found (Map Active)");
          }
        },
        (error) => {
          console.error(error);
          setLocationName("Permission Denied (Showing Dar)");
          setIsLocating(false);
        },
        { enableHighAccuracy: true }
      );
      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  const handleDirections = () => {
    // This creates a professional Google Maps route from User -> Your Business Point
    const destination = "-6.8485,39.2023"; // Replace with your exact workplace coords
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`, "_blank");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-mono text-xs tracking-widest text-primary mb-4 uppercase">/ 05 — Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-primary italic">connect</span> globally.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Pro Left Side: Info & Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-3xl p-8 border border-white/10 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                Contact Info <Zap className="w-4 h-4 text-primary fill-primary" />
              </h3>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "emanuelmkenza@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+255 617375406" },
                  { icon: MapPin, label: "Live Tracker", value: locationName, isLive: true },
                ].map((c) => (
                  <div key={c.label} className="group flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-tighter text-muted-foreground uppercase flex items-center gap-2">
                        {c.label} {c.isLive && <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />}
                      </div>
                      <div className="text-sm font-medium">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pro Map Container */}
              <div className="mt-8 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/5 shadow-inner">
                  {isLocating ? (
                    <div className="w-full h-full bg-muted animate-pulse flex items-center justify-center text-xs font-mono">Calibrating GPS...</div>
                  ) : (
                    <iframe
                      title="User Location"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      src={`https://maps.google.com/maps?q=${position.lat},${position.lng}&z=14&output=embed`}
                      className="opacity-80 hover:opacity-100 transition-opacity duration-500"
                    />
                  )}
                </div>
                
                <button 
                  onClick={handleDirections}
                  className="mt-4 w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-primary hover:text-white transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3 h-3" /> Get Directions
                </button>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 glass rounded-3xl p-8 border border-white/10 shadow-2xl"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2 mt-6">
              <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">Your Project Details</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-primary/50 transition-all resize-none"
                placeholder="Tell me what you're building..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto mt-4 px-10 py-4 bg-primary rounded-2xl font-bold text-white shadow-[0_10px_20px_-10px_rgba(var(--primary),0.5)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {sending ? "Processing..." : "Send Brief"}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};