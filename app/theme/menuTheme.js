import {menuAnatomy} from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react"

const {definePartsStyle,defineMultiStyleConfig} = createMultiStyleConfigHelpers(menuAnatomy.keys)



const customTheme = defineMultiStyleConfig({
  parts: {
    menu: {
      zIndex: 10, // Set the z-index to a higher value
    },
  },
});

export default customTheme