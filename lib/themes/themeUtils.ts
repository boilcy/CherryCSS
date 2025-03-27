// Common CSS bug fixes to be applied to all themes
export const bugfixCss = `
/* Bug fixes */
.bubble .message-user .message-action-button:hover {
  background-color: var(--color-background-mute);
}
`

// Utility function to detect primary colors in theme CSS
export function detectThemeColors(css: string): string[] {
    // Track color importance with a score
    const colorScores: Record<string, number> = {};

    // Initialize all colors with zero score
    const colorOptions = [
        "red", "orange", "brown", "yellow", "green",
        "turquoise", "blue", "violet", "pink",
        "gray", "black", "white"
    ];
    for (const color of colorOptions) {
        colorScores[color] = 0;
    }

    // Check for primary color variables (these are most important)
    const primaryColorMatch = css.match(/--color-primary:\s*(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))/i);
    if (primaryColorMatch) {
        const primaryColor = primaryColorMatch[1];
        // Score based on hex code or rgb value
        if (primaryColor.startsWith('#f') || primaryColor.match(/rgb\(\s*2[0-9]{2}/)) {
            colorScores.red += 10;
        } else if (primaryColor.match(/#[f][8-9a-f]/i)) {
            colorScores.orange += 10;
        } else if (primaryColor.match(/#[8-9][0-7]/i)) {
            colorScores.brown += 10;
        } else if (primaryColor.match(/#[f][d-f]/i)) {
            colorScores.yellow += 10;
        } else if (primaryColor.match(/#[0-5][c-f]/i)) {
            colorScores.green += 10;
        } else if (primaryColor.match(/#[0-5][a-f][f]/i)) {
            colorScores.turquoise += 10;
        } else if (primaryColor.match(/#[0-1][0-7][f]/i)) {
            colorScores.blue += 10;
        } else if (primaryColor.match(/#[4-9][0-5][d-f]/i)) {
            colorScores.violet += 10;
        } else if (primaryColor.match(/#[f][2-4][d-f]/i)) {
            colorScores.pink += 10;
        } else if (primaryColor.match(/#[7-9][7-9]/i)) {
            colorScores.gray += 10;
        } else if (primaryColor.match(/#[0-2][0-2]/i)) {
            colorScores.black += 10;
        } else if (primaryColor.match(/#[f][f]/i)) {
            colorScores.white += 10;
        }
    }

    // Check for background colors (also very important)
    const backgroundColorMatch = css.match(/--color-background:\s*(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))/i);
    if (backgroundColorMatch) {
        const bgColor = backgroundColorMatch[1];
        // Score based on hex code or rgb value
        if (bgColor.match(/#[e-f][e-f]/i)) {
            colorScores.white += 8;
        } else if (bgColor.match(/#[0-2][0-2]/i)) {
            colorScores.black += 8;
        } else if (bgColor.match(/#[7-9][7-9]/i)) {
            colorScores.gray += 8;
        } else if (bgColor.match(/#[c-e][b-d][8-a]/i)) {
            colorScores.brown += 8;
        }
    }

    // Check for dominant colors in theme name and description
    const themeNameMatch = css.match(/\/\*\s*\n\s*={10,}\s*\n\s*([^*]+)/);
    const themeDescription = themeNameMatch ? themeNameMatch[1].trim() : '';

    // Color keywords with improved relevance
    const colorKeywords = {
        red: /\b(red|rouge|crimson|scarlet|ruby|cinnabar|cherry)\b/i,
        orange: /\b(orange|amber|tangerine|rust|copper)\b/i,
        brown: /\b(brown|tan|beige|wood|wooden|walnut|oak|earth|dirt|soil|leather|coffee|chocolate|sepia|umber)\b/i,
        yellow: /\b(yellow|gold|golden|sunshine|sun|lemon|cream|butter|amber)\b/i,
        green: /\b(green|emerald|jade|forest|grass|mint|olive|sage|moss)\b/i,
        turquoise: /\b(turquoise|teal|aqua|cyan|seafoam)\b/i,
        blue: /\b(blue|azure|navy|sapphire|ocean|sky|cobalt|indigo)\b/i,
        violet: /\b(violet|purple|lavender|mauve|amethyst|plum|lilac|orchid)\b/i,
        pink: /\b(pink|rose|magenta|fuchsia|salmon|coral|blush)\b/i,
        gray: /\b(gr[ae]y|silver|slate|ash|steel|iron|stone|cloud|mist|fog)\b/i,
        black: /\b(black|obsidian|onyx|charcoal|midnight|night|noir|dark)\b/i,
        white: /\b(white|ivory|snow|milk|cream|paper|rice|parchment|light)\b/i
    };

    // Check for keywords in name/description - these are highly relevant
    const nameAndDesc = `${themeDescription.toLowerCase()}`;
    for (const [colorName, keyword] of Object.entries(colorKeywords)) {
        // Higher score for matches in the theme name or description
        const matches = nameAndDesc.match(keyword);
        if (matches) {
            colorScores[colorName] += matches.length * 5;
        }
    }

    // Count hex color occurrences in the CSS for dominant colors
    // This helps identify visually dominant colors that might not be in variables
    const hexColorPattern = /#([0-9a-fA-F]{3,8})\b/gi;
    const hexMatches = [...css.matchAll(hexColorPattern)];
    for (const match of hexMatches) {
        const hex = match[1].toLowerCase();
        // Simple color categorization
        if (hex.startsWith('f') && hex.length <= 4) {
            // Short hex like #f00 (red) or #fff (white)
            if (hex[1] === '0') colorScores.red += 1;
            else if (hex[1] >= 'a' && hex[1] <= 'c') colorScores.orange += 1;
            else if (hex[1] >= 'd') colorScores.yellow += 1;
        }
        else if (hex[0] === '0' && hex[1] === 'f') colorScores.blue += 1;
        else if (hex[0] === '0' && hex[1] >= 'a') colorScores.green += 1;
        else if (hex[0] >= '7' && hex[0] <= '9') colorScores.gray += 1;
        else if (hex[0] <= '2' && hex[1] <= '2') colorScores.black += 1;
        else if (hex.match(/^f+$/)) colorScores.white += 1;
    }

    // Select only the top scoring colors (dominant ones)
    const sortedColors = Object.entries(colorScores)
        .filter(([_, score]) => score > 0)
        .sort((a, b) => b[1] - a[1]);

    // Take the top 2-3 colors only
    const dominantColors = sortedColors.slice(0, 3).map(([color, _]) => color);

    // If no colors detected, assign reasonable defaults based on light/dark theme
    if (dominantColors.length === 0) {
        return css.includes('theme-mode="dark"') ? ['black', 'gray'] : ['white', 'gray'];
    }

    return dominantColors;
} 