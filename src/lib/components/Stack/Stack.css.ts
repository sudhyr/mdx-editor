import {style, styleVariants} from "@vanilla-extract/css";
import {vars} from "../theme.css";

export default {
  root: style({
    padding: 10
  }),
  childContainer: style({}),
  stackChild: style({}),
  spaceVariant: styleVariants(vars.space, (space) => ({
    marginTop: space
  })),
  spaceVariant_container: styleVariants(vars.space, (space) => ({
    marginTop: `calc(${space} * -1)`
  }))
};
