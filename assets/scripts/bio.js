tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Inter', 'sans-serif'], tech: ['Rajdhani', 'sans-serif'], mono: ['Space Mono', 'monospace'] },
            colors: { accent: { orange: '#FF9500', blue: '#00A8FF', cyan: '#00D9FF', purple: '#A78BFA' } },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'float': 'float 4s ease-in-out infinite',
                'float-delayed': 'float 4s ease-in-out infinite 0.5s',
                'spin-slow': 'spin 12s linear infinite',
                'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
                'slide-in-right': 'slideInRight 0.6s ease-out forwards',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'scan-line': 'scanLine 8s linear infinite',
                'neon-flicker': 'neonFlicker 0.15s infinite',
                'data-flow': 'dataFlow 6s linear infinite',
                'border-flow': 'borderFlow 3s linear infinite',
            },
            keyframes: {
                fadeInUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
                float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
                slideInLeft: { '0%': { opacity: 0, transform: 'translateX(-30px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
                slideInRight: { '0%': { opacity: 0, transform: 'translateX(30px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
                pulseGlow: { '0%, 100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)' }, '50%': { boxShadow: '0 0 40px rgba(255, 255, 255, 0.2)' } },
                scanLine: { '0%': { top: '-100%' }, '100%': { top: '100%' } },
                neonFlicker: { '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: 1 }, '20%, 24%, 55%': { opacity: 0.5 } },
                dataFlow: { '0%': { backgroundPosition: '0% 0%' }, '100%': { backgroundPosition: '100% 0%' } },
                borderFlow: { '0%': { backgroundPosition: '0% center' }, '100%': { backgroundPosition: '200% center' } },
            }
        }
    }
}