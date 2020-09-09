import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function SimpleTable({ details }) {
 
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  function createData(id, state, active, confirmed, deaths, recovered) {
    return { id, state, active, confirmed, deaths, recovered };
  }

  let rows = details.map((detail) =>
    createData(
      detail.id,
      detail.state,
      detail.active,
      detail.confirmed,
      detail.deaths,
      detail.recovered
    )
  );

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >State</TableCell>
            <TableCell align="right">Active cases</TableCell>
            <TableCell align="right">Confirmed cases</TableCell>
            <TableCell align="right">Deaths</TableCell>
            <TableCell align="right">Recovered cases</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.state}>
              <TableCell component="th" scope="row">
                
                {row.state}
              </TableCell>
              <TableCell align="right">{row.active}</TableCell>
              <TableCell align="right">{row.confirmed}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
              <TableCell align="right">{row.recovered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
