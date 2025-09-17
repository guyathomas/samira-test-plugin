import { useElementColumns, useElementData } from "@sigmacomputing/plugin";
import "./DataTable.css";
import { useMemo } from "react";

const MAX_ROWS = 10;

const DataTable = ({ configId }: { configId: string }) => {
  const columns = useElementColumns(configId);
  const data = useElementData(configId);
  const columnIds = Object.keys(columns);
  const rowCount = data[columnIds[0]]?.length || 0;

  // Transpose the data for easier rendering
  const rows = useMemo(() => {
    const newRows: { [key: string]: unknown }[] = [];
    for (let i = 0; i < rowCount; i++) {
      const row: { [key: string]: unknown } = {};
      for (const colId of columnIds) {
        row[colId] = data[colId]?.[i];
      }
      newRows.push(row);
    }
    return newRows;
  }, [data, columnIds, rowCount]);

  if (!columns || !data) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columnIds.map((colId) => (
              <th key={colId}>{columns[colId].name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, MAX_ROWS).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columnIds.map((colId) => (
                <td key={colId}>{String(row[colId])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
