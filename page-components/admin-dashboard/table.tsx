import { useState, useMemo, useCallback, Key } from "react";

import DataGrid, { RowRendererProps, SortStatusProps, Row as ReactDataGridRow } from "react-data-grid";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import type { SortColumn } from "react-data-grid";
import { Box } from "@mui/material";

interface Props {
  direction: "ltr" | "rtl";
}

interface Row {
  readonly id: number;
  readonly task: string;
  readonly complete: number;
  readonly priority: string;
  readonly issueType: string;
}

function createRows(): Row[] {
  const rows: Row[] = [];

  for (let i = 1; i < 500; i++) {
    rows.push({
      id: i,
      task: `Task ${i}`,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      priority: ["Critical", "High", "Medium", "Low"][Math.round(Math.random() * 3)],
      issueType: ["Bug", "Improvement", "Epic", "Story"][Math.round(Math.random() * 3)],
    });
  }

  return rows;
}

export default function ColumnsReordering({ direction }: Props) {
  const [rows] = useState(createRows);
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const onSortColumnsChange = useCallback((sortColumns: SortColumn[]) => {
    setSortColumns(sortColumns.slice(-1));
  }, []);

  const sortedRows = useMemo((): readonly Row[] => {
    if (sortColumns.length === 0) return rows;
    const { columnKey, direction } = sortColumns[0];

    let sortedRows: Row[] = [...rows];

    switch (columnKey) {
      case "task":
      case "priority":
      case "issueType":
        sortedRows = sortedRows.sort((a, b) => a[columnKey].localeCompare(b[columnKey]));
        break;
      case "complete":
        sortedRows = sortedRows.sort((a, b) => a[columnKey] - b[columnKey]);
        break;
      default:
    }
    return direction === "DESC" ? sortedRows.reverse() : sortedRows;
  }, [rows, sortColumns]);

  const sortStatus = ({ sortDirection }: SortStatusProps) => {
    const getIcon = () => {
      if (!sortDirection) return null;

      if (sortDirection === "ASC") return <ExpandLessRoundedIcon />;

      return <ExpandMoreRoundedIcon />;
    };
    const icon = getIcon();
    return <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex", height: "100%" }}>{icon}</Box>;
  };

  const rowRenderer = (key: Key, props: RowRendererProps<Row, unknown>) => {
    return <ReactDataGridRow key={key} {...props} />;
  };

  return (
    <DataGrid
      style={{ height: "100%", width: "100%" }}
      columns={[
        {
          key: "id",
          name: "ID",
          width: 80,
        },
        {
          key: "task",
          name: "Title",
          resizable: true,
          sortable: true,
        },
        {
          key: "priority",
          name: "Priority",
          resizable: true,
          sortable: true,
        },
        {
          key: "issueType",
          name: "Issue Type",
          resizable: true,
          sortable: true,
        },
        {
          key: "complete",
          name: "% Complete",
          resizable: true,
          sortable: true,
        },
      ]}
      rows={sortedRows}
      sortColumns={sortColumns}
      onSortColumnsChange={onSortColumnsChange}
      direction={direction}
      defaultColumnOptions={{ width: "1fr" }}
      renderers={{ sortStatus, rowRenderer }}
      enableVirtualization
      rowHeight={42}
      headerRowHeight={46}
    />
  );
}
