import React from "react";
import style from "../styles-efscreen/efscreen.css";

// Not sure what is going on here. This `style` component
// is just a div with `display: none;` on. I would try to
// stray away from this pattern and instead use inline
// styles as a substitute. React Bootstrap might even
// give you props you can use in order to add `display: none;`
// to the component programmatically instead of this.

// TODO: Implicitly return if you're not doing anything outside of
// the return statement.
export const ComponentStyling = () => {
  return <React.Fragment>{style}</React.Fragment>;
};
