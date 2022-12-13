import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const Display = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#eee",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "right",
  color: theme.palette.text.secondary,
  minHeight: "100%",
  height: `${
    2 * parseFloat(theme.typography.h4.fontSize as string) + parseFloat(theme.typography.h4.lineHeight as string) / 2
  }rem`,
  alignContent: "flex-end",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column-reverse",
  overflowWrap: "anywhere",
  overflow: "auto",
}));

function Calculator() {
  const toolbarRef: React.MutableRefObject<any> = useRef(null);
  const symbols = ["/", "*", "-", "+"];
  const buttons = [
    "(",
    ")",
    "C",
    "⌫",
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "+/-",
    "+",
  ];
  const [calculation, setCalculation] = useState<string[]>([]);
  const [displayMessage, setDisplayMessage] = useState("0");
  const [topbarHeight, setTopbarHeight] = useState(0);
  const hasErrorRef = useRef(false);

  useEffect(() => {
    if (hasErrorRef.current) {
      // skip overwriting error message and reset for next calculation update
      hasErrorRef.current = false;
    } else {
      setDisplayMessage(formatCalculation(calculation));
    }
  }, [calculation]);

  useLayoutEffect(() => {
    let height = toolbarRef.current?.clientHeight || 0;
    setTopbarHeight(height);
  }, []);

  const useEventListener = (eventName: string, handler: Function, element = window) => {
    const savedHandler: React.MutableRefObject<Function> = useRef(handler);

    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      const eventListener = (event: Event) => savedHandler.current(event);
      element.addEventListener(eventName, eventListener);
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    }, [eventName, element]);
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "=" || event.key === "Enter") {
      calculate();
    } else {
      handleValue(event.key);
    }
  };

  useEventListener("keydown", handleKeydown);

  const handleClick = (value: string) => {
    let symbolMap: Map<string, string> = new Map([
      ["÷", "/"],
      ["×", "*"],
      ["⌫", "Backspace"],
    ]);
    handleValue(symbolMap.get(value) || value);
  };

  const handleValue = (value: string) => {
    if (symbols.includes(value)) {
      handleSymbol(value);
    } else if (/\d/.test(value) || value === ".") {
      handleNumber(value);
    } else if (value === "+/-") {
      handleNegation();
    } else if (value === "(" || value === ")") {
      handleParentheses(value);
    } else if (value === "Backspace") {
      handleBackspace();
    } else if (value === "C") {
      setCalculation([]);
    }
  };

  const handleSymbol = (symbol: string) => {
    setCalculation((previous: string[]) => {
      let calculation = [...previous];
      let lastItemIndex = calculation.length - 1;
      let lastItem = lastItemIndex < 0 ? null : calculation[lastItemIndex];

      if (lastItem && symbols.includes(lastItem)) {
        calculation[lastItemIndex] = symbol;
      } else {
        calculation.push(symbol);
      }

      return calculation;
    });
  };

  const isNumeric = (value: string) => value.trim() !== "" && !isNaN(Number(value));

  const handleNumber = (numberValue: string) => {
    setCalculation((previous: string[]) => {
      let calculation = [...previous];
      let lastItemIndex = calculation.length - 1;
      let lastItem = lastItemIndex < 0 ? null : calculation[lastItemIndex];

      if (lastItem === "0") {
        calculation[lastItemIndex] = numberValue;
      } else if (lastItem && isNumeric(lastItem)) {
        calculation[lastItemIndex] = lastItem + numberValue;
      } else if (lastItem === ")") {
        calculation.push(...["*", numberValue]);
      } else {
        calculation.push(numberValue);
      }

      return calculation;
    });
  };

  const handleNegation = () => {
    setCalculation((previous: string[]) => {
      let calculation = [...previous];
      let lastItemIndex = calculation.length - 1;
      if (lastItemIndex < 0) {
        return previous;
      }

      let lastItem = calculation[lastItemIndex];
      if (symbols.includes(calculation[lastItemIndex])) {
        return previous;
      }

      lastItem = lastItem.startsWith("-") ? lastItem.replace("-", "") : "-" + lastItem;
      calculation[lastItemIndex] = lastItem;

      return calculation;
    });
  };

  const handleParentheses = (value: string) => {
    setCalculation((previous: string[]) => {
      let calculation = [...previous];
      let lastItemIndex = calculation.length - 1;
      let lastItem = lastItemIndex < 0 ? null : calculation[lastItemIndex];

      if (lastItem && value === "(" && isNumeric(lastItem)) {
        calculation.push(...["*", value]);
      } else if (lastItem && value === ")" && symbols.includes(lastItem)) {
        calculation[lastItemIndex] = value;
      } else {
        calculation.push(value);
      }

      return calculation;
    });
  };

  const handleBackspace = () => {
    setCalculation((previous: string[]) => {
      let calculation = [...previous];
      let lastItemIndex = calculation.length - 1;
      if (lastItemIndex < 0) {
        return previous;
      }

      let lastItem = calculation[lastItemIndex].slice(0, -1);
      if (lastItem === "") {
        calculation.pop();
      } else {
        calculation[lastItemIndex] = lastItem;
      }

      return calculation;
    });
  };

  const calculate = () => {
    try {
      const result = [eval(calculation.join(" ")).toString()];
      setCalculation(result);
    } catch (ex) {
      hasErrorRef.current = true;
      setDisplayMessage("Error");
      setCalculation([]);
    }
  };

  const formatCalculation = (calculation: string[]) => {
    return calculation.length ? calculation.join(" ") : "0";
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        height: "100vh",
        m: "auto",
        mt: `${-2 * topbarHeight}px`,
        pt: `${topbarHeight}px`,
      }}
    >
      <Toolbar ref={toolbarRef} />
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          height: "100%",
        }}
      >
        <ButtonGroup size="large" fullWidth={true} aria-label="Calculator button group">
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Display>
                <Typography variant="h4" component="p" aria-label="result">
                  {displayMessage}
                </Typography>
              </Display>
            </Grid>
            {buttons.map((button) => (
              <Grid key={button} item xs={3}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    handleClick(button);
                  }}
                  sx={{ textTransform: "unset", height: "100%" }}
                >
                  <Typography variant="h5" component="p">
                    {button}
                  </Typography>
                </Button>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button variant="contained" onClick={calculate} sx={{ height: "100%" }}>
                <Typography variant="h5">=</Typography>
              </Button>
            </Grid>
          </Grid>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default Calculator;
