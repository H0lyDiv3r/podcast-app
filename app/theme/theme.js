'use client'

import colors from "./colors"
import shadow from "./shadows";
import fonts from "./fonts";
import customTheme from "./menuTheme";

const { extendTheme } = require("@chakra-ui/react");

const theme = extendTheme({colors,...shadow,...fonts,components:{customTheme}})

export default theme;