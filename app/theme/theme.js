'use client'

import colors from "./colors"
import shadow from "./shadows";
import fonts from "./fonts";

const { extendTheme } = require("@chakra-ui/react");

const theme = extendTheme({colors,...shadow,...fonts})

export default theme;