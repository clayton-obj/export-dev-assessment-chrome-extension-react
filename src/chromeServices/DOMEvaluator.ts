import { DOMMessage, DOMMessageResponse } from "../types";
import { DevAssessmentLine } from "../types/DevAssessment";

// Function called when a new message is received
const messagesFromReactAppListener = (
  msg: DOMMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: DOMMessageResponse) => void
) => {
  const table = document.querySelector("table.review-analytics");
  const tbodyResults = table?.parentNode?.querySelector(
    "div.content > table > tbody"
  );
  const linesResults: NodeListOf<HTMLTableRowElement> | undefined =
    tbodyResults?.querySelectorAll("tr");

  const resultsDevAssessment: DevAssessmentLine[] = [];

  linesResults?.forEach((line, index) => {
    if (index > 0) {
      const columns = line.querySelectorAll("td:not(.ng-hide)");

      const getValueLine = (element: Element) => {
        return element.querySelector(".cpy-number-grade span")
          ?.innerHTML as string;
      };
      
      const getValueLineUser = (element: Element) => {
        return element.querySelector(".qr-user-panel")
          ?.innerHTML as string;
      };


      const photo = columns[0].querySelector('img')?.getAttribute('src')!

      resultsDevAssessment.push({
        photo,
        user: getValueLineUser(columns[0]).trim(),
        final_concept: getValueLine(columns[2]),
        clean_code: getValueLine(columns[3]),
        abstraction: getValueLine(columns[4]),
        agile_planning: getValueLine(columns[5]),
        maintainability: getValueLine(columns[6]),
        paradigm_functional: getValueLine(columns[7]),
        paradigm_OO: getValueLine(columns[8]),
        problem_solving: getValueLine(columns[9]),
        stack_tools: getValueLine(columns[10]),
        system_design: getValueLine(columns[11]),
        vcs_tools: getValueLine(columns[12]),
        security: getValueLine(columns[13]),
        testing: getValueLine(columns[14]),
      });
    }
  });

  const response: DOMMessageResponse = {
    resultsDevAssessment,
  };

  sendResponse(response);
};

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
