import { SWITCH_THEME } from "../actions/types"

const themes = {
    light: {
        name: "light",
        colors: {
            main: "#c9933e",
            secondary: "",
            background: "#cccccc",
            bgPage: "#e5e5e5"
        },
        text: {
            highContrast: "#000000",
            light: "#ffffff",
            dark: "#000000",
            soft: "#555555"
        }
    },
    dark: {
        name: "dark",
        colors: {
            main: "#c9933e",
            secondary: "",
            background: "#202020",
            bgPage: "#111111"
        },
        text: {
            highContrast: "#ffffff",
            light: "#ffffff",
            dark: "#000000",
            soft: "#555555"
        }
    }
}

const initialState = {
    selectedTheme: themes.light
}

const theme = (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        default:
            break

        case SWITCH_THEME:
            newState.selectedTheme =
                state.selectedTheme.name === "light"
                    ? themes.dark
                    : themes.light
            break
    }

    return { ...newState }
}

export default theme
