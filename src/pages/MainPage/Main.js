import { useEffect, useState } from "react";
import { MainWrapper, ChartWrapper } from "./main-styled";

const Main = () => {
  const [dateInput, setDateInput] = useState("");

  useEffect(() => {
    console.log(dateInput);
  }, [dateInput]);

  return (
    <MainWrapper>
      <h1>main page</h1>
      <ChartWrapper>
        <div>
          <input
            type="datetime-local"
            value={dateInput || ""}
            onChange={(e) => setDateInput(e.target.value)}
          />
        </div>
      </ChartWrapper>
    </MainWrapper>
  );
};

export default Main;
