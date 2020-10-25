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

import { formatObject } from '../../helper/useFetch';
import { RegisterValues } from '../../types';

export default function Home() {
  const [data, setData] = useState<RegisterValues>();

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

  return (
    <>
      {data ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell align='center'>Register</StyledTableCell>
                <StyledTableCell align='center'>Value</StyledTableCell>
                <StyledTableCell align='center'>Variable Name</StyledTableCell>
                <StyledTableCell align='center'>Unit</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.fileReadings.map(({ reading, variableName, unit }, idx) => (
                <StyledTableRow key={`reading value-${idx}`} hover>
                  <StyledTableCell align='center'>{idx + 1}</StyledTableCell>
                  <StyledTableCell align='center'>{reading}</StyledTableCell>
                  <StyledTableCell align='center'>
                    {variableName}
                  </StyledTableCell>
                  <StyledTableCell align='center'>{unit}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>Data is inaccessible</div>
      )}
    </>
  );
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const StyledTableCell = withStyles((theme: Theme) =>
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
