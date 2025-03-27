import { Box as MUIBox, BoxProps as MUIBoxProps } from "@mui/material";
import { FC } from "react";
import { styled } from "@mui/system";

const StyledBlock = styled(MUIBox)<BoxProps>`
  height: fit-content;
  border-right: ${(props) => (props.borderR ? "1px solid #cccccc" : "none")};
  height: 100%;
  position: relative;
`;

interface BoxProps extends MUIBoxProps {
  borderR?: boolean;
}

export const Block: FC<BoxProps> = ({ borderR, ...props }) => {
  return <StyledBlock borderR={borderR} {...props} />;
};
