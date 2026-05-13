import type { Config } from 'tailwindcss'

const config: Config = {
    theme: {
        extend: {
            colors: {
                matrix: "#00ff41",
                cyber: "#ff0055",
                void: "#000000",
            },
            fontFamily: {
                mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
            },
            boxShadow: {
                'glow-matrix': '0 0 10px rgba(0, 255, 65, 0.3)',
                'glow-cyber': '0 0 10px rgba(255, 0, 85, 0.3)',
            }
        }
    }
}

export default config