import * as React from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import {
  MdFirstPage,
  MdLastPage,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

// Styled TableCell with no header color and custom body colors
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
    padding: "14px",
    width: "150px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "14px",
    width: "150px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": { backgroundColor: "#f3f4ff" },
  "&:nth-of-type(even)": { backgroundColor: "#F5F5F5" },
  "&:last-child td, &:last-child th": { border: 0 },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  background: "#ebebeb",
  boxShadow: `
    5px 5px 9px #e1e1e1,
    -5px -5px 9px #ffffff
  `,
  borderRadius: "10px",
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => onPageChange(event, 0);
  const handleBackButtonClick = (event) => onPageChange(event, page - 1);
  const handleNextButtonClick = (event) => onPageChange(event, page + 1);
  const handleLastPageButtonClick = (event) =>
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0}>
        {theme.direction === "rtl" ? <MdLastPage /> : <MdFirstPage />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0}>
        {theme.direction === "rtl" ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </IconButton>
      <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
        {theme.direction === "rtl" ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
      </IconButton>
      <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
        {theme.direction === "rtl" ? <MdFirstPage /> : <MdLastPage />}
      </IconButton>
    </Box>
  );
}

function DataTable({ data, columns, rowsPerPage }) {
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => setPage(newPage);

  const displayedRows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const emptyRows = rowsPerPage - displayedRows.length;

  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="custom pagination styled table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell key={column.id} align={column.align || "left"}>
                {column.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedRows.map((row, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {columns.map((column) => (
                <StyledTableCell key={column.id} align={column.align || "left"}>
                  {row[column.id]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}

          {emptyRows > 0 &&
            Array.from({ length: emptyRows }, (_, index) => (
              <StyledTableRow
                key={`empty-row-${index}`}
                style={{
                  height: "48.8px",
                  backgroundColor: index % 2 === 0 ? "#f3f4ff" : "#F5F5F5",
                }}
              >
                <StyledTableCell colSpan={columns.length} />
              </StyledTableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[]}
              colSpan={columns.length}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </StyledTableContainer>
  );
}

export default DataTable;
