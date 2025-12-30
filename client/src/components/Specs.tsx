import { Cpu, Wifi, Settings, Battery, Eye, Volume2, Sun } from "lucide-react";

export default function Specs() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-slate-400 text-lg max-w-2xl">Built with premium components and open-source firmware. Designed to last.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Hardware Specs */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
              <Cpu className="w-5 h-5" /> Hardware
            </h3>
            <ul className="space-y-6">
              {[
                { label: "Microcontroller", value: "ESP32-S2 Mini (32-bit)" },
                { label: "Presence Sensor", value: "LD2410 Radar Sensor" },
                { label: "Display", value: "16x2 I2C LCD Display" },
                { label: "Visual Feedback", value: "37-pixel NeoPixel LED Ring (300°)" },
                { label: "Input", value: "Rotary Encoder with tactile button" },
                { label: "Audio", value: "Piezo Buzzer (customizable)" },
                { label: "Sensors", value: "LDR (Ambient light adjustment)" }
              ].map((spec, i) => (
                <li key={i} className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-400">{spec.label}</span>
                  <span className="font-mono text-sm font-medium">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Specs */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-secondary flex items-center gap-2">
              <Wifi className="w-5 h-5" /> Software & Connectivity
            </h3>
            <ul className="space-y-6">
              {[
                { label: "Connectivity", value: "WiFi (2.4GHz)" },
                { label: "Local Access", value: "mDNS (esp32.local)" },
                { label: "Dashboard", value: "Responsive Web Interface" },
                { label: "Storage", value: "30-day EEPROM storage" },
                { label: "Updates", value: "OTA Firmware Updates" },
                { label: "Cloud", value: "None (100% Local)" },
                { label: "License", value: "Open-source compatible" }
              ].map((spec, i) => (
                <li key={i} className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-slate-400">{spec.label}</span>
                  <span className="font-mono text-sm font-medium">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Customizable Settings */}
        <div className="mt-16 pt-16 border-t border-slate-800">
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
            <Settings className="w-5 h-5" /> Customizable Settings
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Battery className="w-6 h-6" />, label: "Sitting Threshold", value: "60/90/120+ min" },
              { icon: <Eye className="w-6 h-6" />, label: "Break Duration", value: "5/15/30 min" },
              { icon: <Sun className="w-6 h-6" />, label: "LED Scheme", value: "Custom Colors" },
              { icon: <Volume2 className="w-6 h-6" />, label: "Alerts", value: "Volume Control" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors">
                <div className="text-primary mb-3">{item.icon}</div>
                <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                <div className="font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
