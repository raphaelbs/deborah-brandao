import { createMuiTheme } from "@material-ui/core/styles"
import purple from "@material-ui/core/colors/purple"
import green from "@material-ui/core/colors/green"

export default createMuiTheme({
  typography: {
    h1: {
      fontSize: 58,
    },
    h2: {
      fontSize: 50,
    },
    h3: {
      fontSize: 44,
    },
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
})
