import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    placement="top-end"
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#ffffff",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[2],
    fontSize: 12,
    border: "1px solid #ddd",
  },
}));

export default LightTooltip;