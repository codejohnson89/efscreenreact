export * from "./CustomHeadersIntro";
export * from "./ComponentsStyling";
export * from "./CustomInfoPan";
export * from "./Header";
export * from "./Products";

/*
  It's a nice idea to export from a single index file
  so you don't have to import from each individual file
  in a new view/component.

  So this:
  ```
    import CustomHeadersIntro from "../../modules/CustomHeadersIntro";
    import CustomInfoPan from "../../modules/CustomInfoPan";
  ```

  Turns into this:
  ```
    import { CustomInfoPan, CustomHeadersIntro } from "../../modules";
  ```
*/
