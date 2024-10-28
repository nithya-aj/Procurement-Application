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
    // Removed the background color for the header
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
  // Set colors for alternate rows
  "&:nth-of-type(odd)": {
    backgroundColor: "#f3f4ff",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#F5F5F5",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  background: "#ebebeb",
  boxShadow: `
    5px 5px 9px #e1e1e1,
    -5px -5px 9px #ffffff
  `,
  borderRadius: "10px",
  borderRadius: "10px",
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <MdLastPage /> : <MdFirstPage />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <MdKeyboardArrowRight />
        ) : (
          <MdKeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <MdKeyboardArrowLeft />
        ) : (
          <MdKeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <MdFirstPage /> : <MdLastPage />}
      </IconButton>
    </Box>
  );
}

const rows = [
  { name: "Cupcake", calories: 305, fat: 3.7 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Eclair", calories: 262, fat: 16.0 },
  { name: "Frozen yoghurt", calories: 159, fat: 6.0 },
  { name: "Gingerbread", calories: 356, fat: 16.0 },
  { name: "Honeycomb", calories: 408, fat: 3.2 },
  { name: "Ice cream sandwich", calories: 237, fat: 9.0 },
  { name: "Jelly Bean", calories: 375, fat: 0.0 },
  { name: "KitKat", calories: 518, fat: 26.0 },
  { name: "Lollipop", calories: 392, fat: 0.2 },
  { name: "Marshmallow", calories: 318, fat: 0 },
  { name: "Nougat", calories: 360, fat: 19.0 },
  { name: "Oreo", calories: 437, fat: 18.0 },
];

function DataTable() {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 8; // Set rows per page to 10

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const displayedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Calculate empty rows needed to always fill 10 rows in the table
  const emptyRows = rowsPerPage - displayedRows.length;

  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="custom pagination styled table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat (g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedRows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}

          {/* Add empty rows to maintain the number of rows per page */}
          {emptyRows > 0 &&
            Array.from({ length: emptyRows }, (_, index) => (
              <StyledTableRow
                key={`empty-row-${index}`}
                style={{
                  height: "48.8px",
                  backgroundColor: index % 2 === 0 ? "#f3f4ff" : "#F5F5F5",
                }}
              >
                <StyledTableCell colSpan={3} />
              </StyledTableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[]}
              colSpan={3}
              count={rows.length}
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
