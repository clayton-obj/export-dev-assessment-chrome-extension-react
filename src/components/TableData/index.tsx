import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { DevAssessmentLine } from "../../types/DevAssessment";
import styles from "./style.module.css";

type TableDataProps = {
  resultsDevAssessment: DevAssessmentLine[];
  handleClick: (devAssessment: DevAssessmentLine) => void;
};

const TableData = ({ resultsDevAssessment, handleClick }: TableDataProps) => {
  const tableRef = useRef(null);
  return (
    <>
      <h1>Dev Assessmenttt</h1>
      <div style={{ overflowX: "scroll" }}>
        <table className={styles.tableContain} ref={tableRef}>
          <tr>
            <th className={styles.cellTitle} style={{ minWidth: "250px" }}>
              Avaliado
            </th>
            <th className={styles.cellTitle}>Conceito Final</th>
            <th className={styles.cellTitle}>Clean code</th>
            <th className={styles.cellTitle}>Abstraction</th>
            <th className={styles.cellTitle}>Paradigms: Functional</th>
            <th className={styles.cellTitle}>Paradigms: OO</th>
            <th className={styles.cellTitle}>Problem solving</th>
            <th className={styles.cellTitle}>Stack&amp;Tools</th>
            <th className={styles.cellTitle}>Maintainability</th>
            <th className={styles.cellTitle}>System Design</th>
            <th className={styles.cellTitle}>Agile Planning</th>
            <th className={styles.cellTitle}>VCS tools</th>
            <th className={styles.cellTitle}>Security</th>
            <th className={styles.cellTitle}>Testing</th>
          </tr>
          {resultsDevAssessment.map((devAssessment) => (
            <tr
              className={styles.lineContent}
              onClick={() => handleClick(devAssessment)}
            >
              <td className={styles.cellContent} style={{ textAlign: "left" }}>
                {devAssessment.user}
              </td>
              <td className={styles.cellContent}>
                {devAssessment.final_concept}
              </td>
              <td className={styles.cellContent}>{devAssessment.clean_code}</td>
              <td className={styles.cellContent}>
                {devAssessment.abstraction}
              </td>
              <td className={styles.cellContent}>
                {devAssessment.paradigm_functional}
              </td>
              <td className={styles.cellContent}>
                {devAssessment.paradigm_OO}
              </td>
              <td className={styles.cellContent}>
                {devAssessment.problem_solving}
              </td>
              <td className={styles.cellContent}>
                {devAssessment.stack_tools}
              </td>
              <td className={styles.cellContent}>
                {devAssessment.maintainability}
              </td>
              <td className={styles.cellContent}>
                {devAssessment.system_design}
              </td>
              <td className={styles.cellContent}>
                {devAssessment.agile_planning}
              </td>
              <td className={styles.cellContent}>{devAssessment.vcs_tools}</td>
              <td className={styles.cellContent}>{devAssessment.security}</td>
              <td className={styles.cellContent}>{devAssessment.testing}</td>
            </tr>
          ))}
        </table>
      </div>

      <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={tableRef.current}
      >
        <button> Export excel </button>
      </DownloadTableExcel>
    </>
  );
};

export default TableData;