/**
 * To get typings in your code editor,
 * you need to have a theme.ts file for your custom theme and a desygna.d.ts file
 * for type definitions of the Desygna library.
 *
 * These files allow your editor to provide autocomplete suggestions and type-checking
 * for your custom theme properties, making it easier to write type-safe components.
 *
 */
import {
  $composeAll,
  $styled,
  DesygnaComposedProps,
  DesygnaProvider,
  shouldForwardProp
} from "@desygna/desygna-core";
import { myTheme } from "./desygna/theme";

export type CustomBoxProps = {
  id?: string;
  role?: string;
  className?: string;
  tabIndex?: number;
} & DesygnaComposedProps;

export const CustomBox = $styled("div", {
  shouldForwardProp
})<CustomBoxProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
    transition: "all 0.2s ease",
    borderRadius: 8,
    padding: "4px 12px"
  },
  $composeAll()
);

/**
 *
 *   Now use the component in your app,
 *   get type-checking and autocomplete for prop values like this:
 *
 *  "text" | "background" |
 *  "primary.100" | "primary.200" | "primary.300" |
 *  "accent.100" | "accent.200" | "accent.300" |
 *  "neutral.100" | "neutral.200" | "neutral.300" |
 *  "success.100" | "success.200" | "success.300" |
 *  "warning.100" | "warning.200" | "warning.300" |
 *  "error.100" | "error.200" | "error.300" |
 *  "info.100" | "info.200" | "info.300" | ...
 */

export default function App() {
  return (
    <DesygnaProvider theme={myTheme}>
      <CustomBox display="flex" gap="12px" flexWrap="wrap">
        <CustomBox
          c="primary.300"
          bg=""
          borderColor="primary.200"
          borderWidth="1px"
          borderStyle="solid"
        >
          `primary` colored box
        </CustomBox>
        <CustomBox
          c="accent.300"
          bg="accent.100"
          borderColor="accent.200"
          borderWidth="1px"
          borderStyle="solid"
          backgroundColor=""
        >
          `accent` colored box
        </CustomBox>
        <CustomBox
          c="success.300"
          bg="success.100"
          borderColor="success.200"
          borderWidth="1px"
          borderStyle="solid"
        >
          `success` colored box
        </CustomBox>
        <CustomBox
          c="warning.300"
          bg="warning.100"
          borderColor="warning.200"
          borderWidth="1px"
          borderStyle="solid"
        >
          `warning` colored box
        </CustomBox>
        <CustomBox
          c="error.300"
          bg="error.100"
          borderColor="error.200"
          borderWidth="1px"
          borderStyle="solid"
        >
          `error` colored box
        </CustomBox>
        <CustomBox
          c="info.300"
          bg="info.100"
          borderColor="info.200"
          borderWidth="1px"
          borderStyle="solid"
        >
          `info` colored box
        </CustomBox>
      </CustomBox>
      <CustomBox display="flex" flexDirection="column" gap="12px">
        <CustomBox
          c={{
            _: "neutral.300",
            sm: "info.300",
            md: "success.300",
            lg: "error.300",
            xl: "warning.300",
            xxl: "primary.300"
          }}
          bg={{
            _: "neutral.100",
            sm: "info.100",
            md: "success.100",
            lg: "error.100",
            xl: "warning.100",
            xxl: "primary.100"
          }}
          mt="36px"
          padding="12px"
          textAlign="center"
        >
          This is a responsive box. <br /> <br />
          &larr; You can resize the browser window to see changes &rarr;
        </CustomBox>
        {/* sm: "480px", md: "640px", lg: "768px", xl: "1024px", xxl: "1280px" */}
        <pre style={{ width: "100%" }}>
          {JSON.stringify(
            {
              styles: {
                _: "neutral",
                sm: "info",
                md: "success",
                lg: "error",
                xl: "warning",
                xxl: "primary"
              },
              breakpoints: {
                _: "< 480px",
                sm: ">= 480px",
                md: ">= 640px",
                lg: ">= 768px",
                xl: ">= 1024px",
                xxl: ">= 1280px"
              }
            },
            null,
            2
          )}
        </pre>
      </CustomBox>
    </DesygnaProvider>
  );
}
