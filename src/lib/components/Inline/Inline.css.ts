import {style, styleVariants} from "@vanilla-extract/css";
import {vars} from "../theme.css";

const inlineRoot = style({
})

const inlineContainer = style({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
})

const inlineChild = style({
  display: 'block',
  justifyContent: 'flex-start'
})

export default {
  inlineRoot,
  inlineContainer,
  inlineChild,
  spaceVariant: styleVariants(vars.space, (space) => ({
    marginLeft: space
  })),
  spaceVariant_container: styleVariants(vars.space, (space) => ({
    marginLeft: `calc(${space} * -1)`
  }))
}
