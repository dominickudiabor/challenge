import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

import { formatObject } from '../../helper/useFetch';
import { RegisterValues } from '../../types';
import { columns } from '../../data';

import './styles.css';

export default function Home() {
  const [data, setData] = useState<RegisterValues>();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [query, setQuery] = useState('');

  const handleQuery = (newValue: string) => setQuery(newValue);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          ' https://cors-anywhere.herokuapp.com/http://tuftuf.gambitlabs.fi/feed.txt'
        );
        const registerData = formatObject(response.data) as RegisterValues;
        !data && setData(registerData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data]);

  const classes = useStyles();
  const filteredSearch = data?.fileReadings.filter((a) =>
    a.variableName?.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      {data ? (
        <Paper className={classes.root}>
          <SearchBar
            className='searchBar'
            value={query}
            onChange={handleQuery}
            closeIcon={<div></div>}
            searchIcon={<div></div>}
          />
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <StyledTableHead
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </StyledTableHead>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredSearch &&
                  filteredSearch
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(({ reading, variableName, unit, register }, idx) => {
                      return (
                        <StyledTableRow
                          hover
                          role='checkbox'
                          tabIndex={-1}
                          key={`reading value-${idx}`}
                        >
                          <TableCell align='center'>{register}</TableCell>
                          <TableCell align='center'>{reading}</TableCell>
                          <TableCell align='center'>{variableName}</TableCell>
                          <TableCell align='center'>{unit}</TableCell>
                        </StyledTableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={data.fileReadings.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <div className='error'>Data is inaccessible</div>
      )}
    </>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '10%',
  },
  container: {
    maxHeight: 440,
  },
});

const StyledTableHead = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#1f6f8b',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 16,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);
