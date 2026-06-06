@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
    --bg-base: #EFE3FF;
    --bg-alt: #E2CCFF;
    --text-primary: #3B0764;
    --text-secondary: #6D28D9;
    --text-muted: #6B7280;
    --accent-sunflower: #F59E0B;
    --accent-heart: #EC4899;
    --accent-primary: #7C3AED;
    --accent-primary-hover: #6D28D9;
    --border-subtle: rgba(124, 58, 237, 0.18);
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: 'Nunito', system-ui, sans-serif;
    background-color: var(--bg-base);
    background-image:
        radial-gradient(at 15% 10%, rgba(196, 181, 253, 0.85) 0px, transparent 50%),
        radial-gradient(at 85% 30%, rgba(244, 114, 182, 0.45) 0px, transparent 50%),
        radial-gradient(at 50% 90%, rgba(168, 85, 247, 0.55) 0px, transparent 50%),
        radial-gradient(at 90% 80%, rgba(124, 58, 237, 0.35) 0px, transparent 55%);
    color: var(--text-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}

h1, h2, h3, h4, .font-heading {
    font-family: 'Fredoka', 'Nunito', sans-serif;
    letter-spacing: -0.02em;
}

.font-handwritten {
    font-family: 'Fredoka', cursive;
}

/* Selection */
::selection {
    background: rgba(236, 72, 153, 0.25);
    color: #4C1D95;
}

/* Scrollbar */
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #F3E8FF;
}
::-webkit-scrollbar-thumb {
    background: #C4B5FD;
    border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
    background: #9333EA;
}

/* Soft glass card */
.glass-card {
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid var(--border-subtle);
    box-shadow: 0 8px 30px rgba(147, 51, 234, 0.08);
}

/* Polaroid */
.polaroid {
    background: #fff;
    padding: 14px 14px 56px 14px;
    box-shadow:
        0 1px 1px rgba(0, 0, 0, 0.05),
        0 10px 30px rgba(147, 51, 234, 0.15);
    transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.polaroid:hover {
    transform: translateY(-6px) rotate(0deg) scale(1.02);
}

/* Pulse heart */
@keyframes heartPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.18); }
}
.pulse-heart {
    animation: heartPulse 1.4s ease-in-out infinite;
}

/* Spin record */
@keyframes spinRecord {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
.spin-slow {
    animation: spinRecord 14s linear infinite;
}

/* Floating bobbing */
@keyframes floatY {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-14px); }
}
.float-y {
    animation: floatY 5s ease-in-out infinite;
}

/* Soft fade-in for sections */
.section-anchor {
    scroll-margin-top: 60px;
}

/* Tailwind base layer for shadcn */
@layer base {
    :root {
        --background: 270 100% 99%;
        --foreground: 270 60% 22%;
        --card: 0 0% 100%;
        --card-foreground: 270 60% 22%;
        --popover: 0 0% 100%;
        --popover-foreground: 270 60% 22%;
        --primary: 270 91% 56%;
        --primary-foreground: 0 0% 100%;
        --secondary: 270 100% 96%;
        --secondary-foreground: 270 60% 22%;
        --muted: 270 50% 96%;
        --muted-foreground: 270 20% 45%;
        --accent: 322 81% 80%;
        --accent-foreground: 270 60% 22%;
        --destructive: 0 84% 60%;
        --destructive-foreground: 0 0% 100%;
        --border: 270 60% 92%;
        --input: 270 60% 92%;
        --ring: 270 91% 56%;
        --radius: 1rem;
    }
}

@layer base {
    * {
        @apply border-border;
    }
    body {
        @apply text-foreground;
    }
}

@layer base {
    [data-debug-wrapper="true"] {
        display: contents !important;
    }
}
