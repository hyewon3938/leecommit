// src/styles/styled.d.ts
import "styled-components";
import type { theme } from "./theme";

type Theme = typeof theme;

/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
