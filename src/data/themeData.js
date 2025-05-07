import { 
    greenThemeLight, greenThemeDark, bwThemeLight, bwThemeDark, 
    blueThemeLight, blueThemeDark, redThemeLight, redThemeDark, 
    orangeThemeLight, orangeThemeDark, purpleThemeLight, purpleThemeDark, 
    pinkThemeLight, pinkThemeDark, yellowThemeLight, yellowThemeDark
} from '../theme/theme'

const allThemes = [
    greenThemeLight, greenThemeDark, bwThemeLight, bwThemeDark,
    blueThemeLight, blueThemeDark, redThemeLight, redThemeDark,
    orangeThemeLight, orangeThemeDark, purpleThemeLight, purpleThemeDark,
    pinkThemeLight, pinkThemeDark, yellowThemeLight, yellowThemeDark
];

const getRandomTheme = () => {
    const index = Math.floor(Math.random() * allThemes.length);
    return allThemes[index];
};

export const themeData = {
    theme: getRandomTheme()
};

// Choose theme from above
