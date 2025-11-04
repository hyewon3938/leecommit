import "styled-components";
import type { RecommitTheme } from "./theme";

/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module "styled-components" {
  // 여기서 우리가 만든 RecommitTheme으로 DefaultTheme를 보강(확장)한다
  export interface DefaultTheme extends RecommitTheme {}
}
