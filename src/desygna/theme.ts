import { createDesygnaTheme, DesygnaTheme } from "@desygna/desygna-core";
// or
// import { createDesygnaTheme } from "@desygna/desygna-core";

export type MyAppColorSwatch = {
  "100": string;
  "200": string;
  "300": string;
};

export type MyAppBreakpoints = {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
};

export interface MyAppTheme extends DesygnaTheme {
  breakpoints: MyAppBreakpoints;
  colors: {
    text: string;
    background: string;
    primary: MyAppColorSwatch;
    accent: MyAppColorSwatch;
    neutral: MyAppColorSwatch;
    success: MyAppColorSwatch;
    warning: MyAppColorSwatch;
    error: MyAppColorSwatch;
    info: MyAppColorSwatch;
  };
  fonts: {
    heading: string;
    body: string;
    monospace: string;
  };
  fontSizes: { sm: string; md: string; lg: string };
  radii: { sm: string; md: string; lg: string };
  sizes: { sm: string; md: string; lg: string };
  spacings: { sm: string; md: string; lg: string };
}

export const myTheme = createDesygnaTheme<MyAppTheme>({
  breakpoints: {
    sm: "480px",
    md: "640px",
    lg: "768px",
    xl: "1024px",
    xxl: "1280px"
  },
  colors: {
    text: "black",
    background: "white",
    primary: {
      100: "#f9f1fe",
      200: "#e3ccf4",
      300: "#8e4ec6"
    },
    accent: {
      100: "#feeef8",
      200: "#f3c6e2",
      300: "#d6409f"
    },
    neutral: {
      100: "#f1f3f5",
      200: "#dfe3e6",
      300: "#889096"
    },
    success: {
      100: "#e9f9ee",
      200: "#b4dfc4",
      300: "#30a46c"
    },
    warning: {
      100: "#fff1e7",
      200: "#ffcca7",
      300: "#f76808"
    },
    error: {
      100: "#ffefef",
      200: "#f9c6c6",
      300: "#e5484d"
    },
    info: {
      100: "#edf6ff",
      200: "#b7d9f8",
      300: "#0091ff"
    }
  },
  fonts: {
    body: 'Open Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Open Sans, system-ui",
    monospace: "monospace"
  },
  fontSizes: {
    sm: "14px",
    md: "18px",
    lg: "24px"
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "16px"
  },
  sizes: {
    sm: "4px",
    md: "8px",
    lg: "16px"
  },
  spacings: {
    sm: "4px",
    md: "8px",
    lg: "16px"
  }
});
