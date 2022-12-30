import React, { useState } from "react";
import TableData from "../../components/TableData";
import { DOMMessage, DOMMessageResponse } from "../../types";
import { DevAssessmentLine } from "../../types/DevAssessment";
import Skills from "../Skills";

function Home() {
  const [resultsDevAssessment, setResultsDevAssessment] = useState<
    DevAssessmentLine[]
  >([]);

  const [devAssessmentLineSelected, setDevAssessmentLineSelected] =
    useState<DevAssessmentLine | null>(null);

  React.useEffect(() => {
    chrome.tabs &&
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        (tabs) => {
          chrome.tabs.sendMessage(
            tabs[0].id || 0,
            { type: "GET_DOM" } as DOMMessage,
            (response: DOMMessageResponse) => {
              setResultsDevAssessment(response.resultsDevAssessment);
            }
          );
        }
      );
  }, []);

  const handleClick = (devAssessment: DevAssessmentLine) => {
    setDevAssessmentLineSelected(devAssessment);
  };

  return (
    <div className="App">
      {devAssessmentLineSelected || process.env.NODE_ENV === "development" ? (
        <Skills devAssessment={devAssessmentLineSelected} setDevAssessmentLineSelected={setDevAssessmentLineSelected} />
      ) : (
        <TableData
          resultsDevAssessment={resultsDevAssessment}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default Home;
