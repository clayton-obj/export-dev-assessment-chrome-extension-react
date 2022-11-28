import { DevAssessmentLine } from "./DevAssessment";

export type DOMMessage = {
  type: 'GET_DOM'
}

export type DOMMessageResponse = {
  resultsDevAssessment: DevAssessmentLine[];
}
