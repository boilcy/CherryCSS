import React from 'react';
import type { Theme } from '@/lib/types';

interface ThemePaletteProps {
    theme: Theme;
    isDarkMode: boolean;
}

// Utility function to extract colors from CSS
const extractColors = (css: string, isDarkMode: boolean): string[] => {
    const colors: string[] = [];
    const themeMode = isDarkMode ? 'dark' : 'light';

    // Define priority color variables to look for
    const priorityVars = [
        'color-background',
        'color-primary',
        'navbar-background',
        'chat-background',
        'chat-background-user',
        'chat-background-assistant'
    ];

    // Find theme section
    const themeSectionRegex = new RegExp(`body\\[theme-mode="${themeMode}"\\][^{]*{[^}]*}`, 'g');
    const themeSectionMatch = css.match(themeSectionRegex);

    if (!themeSectionMatch) {
        return ['#cccccc']; // Fallback if no theme section found
    }

    // Extract theme sections (there might be multiple blocks)
    const themeCSS = themeSectionMatch.join(' ');

    // Extract color variables
    const varRegex = /--([^:]+):\s*([^;]+);/g;
    const colorMap = new Map<string, string>();

    // Extract all variables first
    const matches = themeCSS.matchAll(varRegex);
    for (const match of matches) {
        const varName = match[1];
        const colorValue = match[2].trim();

        // Store only real color values (not variables)
        if (colorValue.startsWith('#') || colorValue.startsWith('rgb') || colorValue.startsWith('hsl')) {
            colorMap.set(varName, colorValue);
        }
    }

    // Add colors in priority order
    for (const varName of priorityVars) {
        const color = colorMap.get(varName);
        if (color && !colors.includes(color)) {
            colors.push(color);
        }
    }

    // Add any remaining colors
    colorMap.forEach((color, varName) => {
        if (!colors.includes(color)) {
            colors.push(color);
        }
    });

    return colors.length > 0 ? colors : ['#cccccc']; // Fallback if no colors found
};

export function ThemePalette({ theme, isDarkMode }: ThemePaletteProps) {
    const colors = extractColors(theme.css, isDarkMode);

    return (
        <div className="flex justify-between items-center ml-2 gap-4">
            {colors.slice(0, 5).map((color) => (
                <div
                    key={`color-${color}`}
                    className="rounded-full w-8 h-8 transition-transform"
                    style={{ backgroundColor: color }}
                    title={color}
                />
            ))}
        </div>
    );
}
