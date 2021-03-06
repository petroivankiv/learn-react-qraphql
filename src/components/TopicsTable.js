import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

import TopicsHeader from './SectionHeader';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function TopicsTable({ topics, onDeleteTopic, onViewDetails, onAddTopic }) {
  const classes = useStyles();

  return (
    <>
      <TopicsHeader onClickHandler={onAddTopic} title="Topics" buttonTitle="Add Topic" />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="right">Rate</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topics.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="right">{row.rate}</TableCell>
                <TableCell align="center" style={{ cursor: 'pointer' }}>
                  <IconButton
                    onClick={() => onViewDetails(row._id)}
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => onDeleteTopic(row._id)}
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                  <IconButton className={classes.menuButton} color="inherit" aria-label="menu">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

TopicsTable.propTypes = {
  topics: PropTypes.array.isRequired,
  onDeleteTopic: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default TopicsTable;
