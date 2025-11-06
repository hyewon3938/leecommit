import "styled-components";
import { theme } from "./theme";

type AppTheme = typeof theme;

/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
