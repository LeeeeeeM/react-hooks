import React from 'react'

const themes = {
    class1: 'yellow',
    class2: 'gray'
}

const locals = {
    china: 'china',
    class: 'red',
    us: 'us'
}

export const ThemeContext = React.createContext(
    themes
)

export const LocalContext = React.createContext(
    locals
)