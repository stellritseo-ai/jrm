import React, { createContext, useContext, useEffect, useState } from "react";
import { getPortalSettings, PortalSettings } from "@/lib/leads-store";
import { Hammer, HardHat, Mail, Phone, Clock } from "lucide-react";

interface SettingsContextProps {
  settings: PortalSettings;
  loading: boolean;
  refreshSettings: () => Promise<void>;
}

const defaultSettings: PortalSettings = {
  adminEmail: "robertsa210@icloud.com",
  officePhone: "(210) 429-5526",
  autoSmsTemplate: "Hi {Name}, thank you for contacting JRM Construction! Robert Thompson will contact you during the {Time} to discuss your {Type} project.",
  sendAutoEmail: true,
  sendAutoSms: true,
  hoursWeekday: "8:00 AM - 5:00 PM",
  hoursSaturday: "8:00 AM - 5:00 PM",
  hoursSunday: "Closed (Emergency 24/7)",
  maintenanceMode: false,
  totalVisits: 247
};

const SettingsContext = createContext<SettingsContextProps>({
  settings: defaultSettings,
  loading: true,
  refreshSettings: async () => {}
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<PortalSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const refreshSettings = async () => {
    try {
      const data = await getPortalSettings();
      if (data) {
        setSettings(data);
      }
    } catch (err) {
      console.error("[SettingsContext] Failed to fetch settings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
    refreshSettings();
  }, []);

  // Check if we should render maintenance mode
  // Bypass maintenance for admin dashboard & login routes
  const isMaintenanceActive = isClient && settings.maintenanceMode;
  const isBypassRoute = isClient && (
    window.location.pathname.startsWith("/dashboard") || 
    window.location.pathname === "/login"
  );

  if (isMaintenanceActive && !isBypassRoute) {
    return (
      <div 
        className="min-h-screen bg-[#1c140d] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden select-none font-sans"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(28, 20, 13, 0.95), rgba(20, 16, 13, 0.98)), url('/src/assets/wel-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#577a4c]/10 blur-[100px] pointer-events-none animate-pulse" />

        <div className="max-w-xl w-full text-center relative z-10 space-y-8 px-4">
          {/* Logo / Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a5b89d]/20 bg-[#a5b89d]/5 text-[#a5b89d] text-[10px] font-bold uppercase tracking-widest">
            <HardHat className="h-3.5 w-3.5 animate-bounce" />
            <span>Site Under Construction</span>
          </div>

          {/* Main heading */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-black font-serif tracking-tight text-white leading-tight">
              We're Crafting Something Beautiful
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
              JRM Construction Landscaping Design is currently updating our online experience to better serve you. We will be back online shortly.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-xs mx-auto space-y-2">
            <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full bg-[#577a4c] rounded-full w-4/5 animate-pulse" />
            </div>
            <div className="flex justify-between text-[9px] text-neutral-500 font-bold uppercase tracking-wider">
              <span>Upgrading System</span>
              <span>80% Complete</span>
            </div>
          </div>

          {/* Direct contact info card */}
          <div className="bg-[#241c15] border border-neutral-800/80 rounded-2xl p-6 shadow-2xl text-left space-y-4 max-w-md mx-auto">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-neutral-800 pb-2">
              Need Immediate Assistance?
            </h3>
            
            <div className="space-y-3">
              <a href={`tel:${settings.officePhone}`} className="flex items-center gap-3 text-neutral-300 hover:text-[#a5b89d] transition-colors group">
                <div className="p-2 rounded-lg bg-[#1c140d] border border-neutral-800">
                  <Phone className="h-4 w-4 text-[#a5b89d]" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Call Robert directly</p>
                  <p className="text-xs font-bold">{settings.officePhone}</p>
                </div>
              </a>

              <a href={`mailto:${settings.adminEmail}`} className="flex items-center gap-3 text-neutral-300 hover:text-[#a5b89d] transition-colors group">
                <div className="p-2 rounded-lg bg-[#1c140d] border border-neutral-800">
                  <Mail className="h-4 w-4 text-[#a5b89d]" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Send us an email</p>
                  <p className="text-xs font-bold">{settings.adminEmail}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-neutral-300">
                <div className="p-2 rounded-lg bg-[#1c140d] border border-neutral-800">
                  <Clock className="h-4 w-4 text-[#a5b89d]" />
                </div>
                <div>
                  <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider">Office Hours</p>
                  <p className="text-xs font-semibold">{settings.hoursWeekday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer branding */}
          <p className="text-[10px] text-neutral-600 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} JRM Construction Landscaping Design. All rights reserved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <SettingsContext.Provider value={{ settings, loading, refreshSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
