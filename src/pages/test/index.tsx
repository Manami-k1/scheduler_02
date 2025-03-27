import { Belt } from "@/components/Belt";
import { Block } from "@/components/Block";
import { TimeTypo } from "@/components/TimeTypo";
import { Box } from "@mui/material";

const cell = 30;
const StartTime = 6;
const EndTime = 16;
const h = 50;
const timeArray = Array.from(
  { length: EndTime - StartTime + 1 },
  (_, i) => StartTime + i
);

const renderTimeBar = () => {
  return timeArray.map((time, index) => (
    <Box
      key={index}
      sx={{ display: "flex", height: "14px", bgcolor: "#555", color: "#fff" }}
    >
      <Block width={cell * 2}>
        <TimeTypo>{time}</TimeTypo>
      </Block>
      <Block />
      <Block width={cell * 2} />
    </Box>
  ));
};
const renderBlocks = () => {
  return timeArray.map((_, index) => (
    <>
      <Block width={cell * 2} borderR={true} bgcolor="#fafafa" key={index} />
      <Block width={cell * 2} bgcolor="#fafafa" key={index} />
    </>
  ));
};

const renderBeltRows = () => {
  const belts = [
    {
      w: cell * 2 - 5,
      minWidth: cell * 2 - 5,
      label: "PC",
      subLabel: "PCSub",
      bg: "#f32a2a",
    },
    {
      w: cell * 3 - 5,
      minWidth: cell * 3 - 5,
      label: "PC",
      subLabel: "PCSub",
      bg: "#4946ff",
    },
    {
      w: cell - 5,
      minWidth: cell - 5,
      label: "PC",
      subLabel: "PCSub",
      bg: "#ff46da",
    },
    {
      w: cell * 2 - 5,
      minWidth: cell * 2 - 5,
      label: "PC",
      subLabel: "PCSub",
      bg: "#00c3ff",
    },
  ];

  return belts.map((belt, index) => (
    <Belt
      key={index}
      subTypo={belt.subLabel}
      w={belt.w}
      minWidth={belt.minWidth}
      bg={belt.bg}
    >
      {belt.label}
    </Belt>
  ));
};

const Test = () => {
  return (
    <>
      <Box width="fit-content" display="flex">
        {renderTimeBar()}
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            height: `${h}px`,
          }}
        >
          {renderBlocks()}
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            height: `${h}px`,
            p: "4px 2px",
            columnGap: "5px",
          }}
        >
          {renderBeltRows()}
        </Box>
      </Box>
    </>
  );
};

export default Test;
