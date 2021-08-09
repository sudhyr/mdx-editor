import {style, styleVariants} from "@vanilla-extract/css";
import {vars} from "../theme.css";

export default {
  root: style({
    padding: 10
  }),
  childContainer: style({}),
  stackChild: style({
    display: "flex"
  }),
  spaceVariant: styleVariants(vars.space, (space) => ({
    marginTop: space
  })),
  spaceVariant_container: styleVariants(vars.space, (space) => ({
    marginTop: `calc(${space} * -1)`
  })),
  _align: styleVariants({
    left: 'flex-start',
    right: 'flex-end',
    center: 'center'
  }, (align) => ({
    justifyContent: align
  })),
};
