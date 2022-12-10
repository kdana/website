import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const Display = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "right",
  color: theme.palette.text.secondary,
  minHeight: "2rem",
  height: "100%",
}));

function Calculator() {
  const symbols = ["/", "*", "-", "+"];
  const buttons = ["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "-", "0", ".", "+/-", "+"];
  const [calculation, setCalculation] = useState(["0"]);

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
    }
  };

  const handleSymbol = (symbol: string) => {
    setCalculation((previous: string[]) => {
      let calculation = [...previous];
      let lastItemIndex = calculation.length - 1;

      if (symbols.includes(calculation[lastItemIndex])) {
        calculation[lastItemIndex] = symbol;
      } else {
        calculation.push(symbol);
      }

      return calculation;
    });
  };

  const handleNumber = (numberValue: string) => {
    setCalculation((previous: string[]) => {
      let calculation = [...previous];
      let lastItemIndex = calculation.length - 1;
      let lastItem = calculation[lastItemIndex];

      if (lastItem === "0") {
        calculation[lastItemIndex] = numberValue;
      } else if (!symbols.includes(lastItem)) {
        calculation[lastItemIndex] = lastItem + numberValue;
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
      let lastItem = calculation[lastItemIndex];

      lastItem = lastItem.startsWith("-") ? lastItem.replace("-", "") : "-" + lastItem;
      calculation[lastItemIndex] = lastItem;

      return calculation;
    });
  };

  const calculate = () => {
    const result = eval(formatCalculation(calculation));
    setCalculation([result.toString()]);
  };

  const formatCalculation = (calculation: string[]) => {
    return calculation.join(" ");
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: "600px", margin: "auto" }}>
      <ButtonGroup size="large" fullWidth={true} sx={{ minHeight: "85vh" }} aria-label="Calculator button group">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Display>
              <Typography variant="h4">{formatCalculation(calculation)}</Typography>
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
                <Typography variant="h5">{button}</Typography>
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
  );
}

export default Calculator;
