import "@emotion/react";

import { MyAppTheme } from "./desygna/theme";

declare module "@emotion/react" {
  export interface Theme extends MyAppTheme {}
}
