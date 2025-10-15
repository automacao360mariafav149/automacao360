import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: '#dee2e6', // Borda clara
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: '#FFFFFF',
        foreground: '#212529',
        primary: {
          DEFAULT: '#0d6efd', // Azul moderno
          foreground: '#FFFFFF',
          hover: '#0b5ed7'
        },
        secondary: {
          DEFAULT: '#198754', // Verde vibrante (para CTAs principais)
          foreground: '#FFFFFF',
          hover: '#157347'
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: '#F8F9FA', // Cinza muito claro para fundos secundários
          foreground: '#6c757d' // Cinza médio para texto secundário
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: '#FFFFFF', // Fundo de cards
          foreground: '#212529' // Texto de cards
        },
        brand: {
          blue: '#0d6efd',
          dark: '#212529', // Grafite escuro
          green: '#198754',
          light: '#F8F9FA'
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        success: "hsl(var(--success))", // Nova cor
        urgent: "hsl(var(--urgent))",     // Nova cor
        "bg-section-dark": "hsl(var(--bg-section-dark))", // Nova cor
        "bg-section-light": "hsl(var(--bg-section-light))", // Nova cor
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hero-gradient": "var(--hero-gradient)", // Novo gradiente
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
