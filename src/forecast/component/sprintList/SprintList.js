import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './SprintList.css';
import { Table, TableColumn, Label, TableRow, TableCell } from "@ui5/webcomponents-react";

class SprintList extends Component {
  render() {
    return (
      <div >
        <Table
          noDataText={'Please Add a Resources'}
          showNoData={true}
          stickyColumnHeader={false}
          columns={
            <>
              <TableColumn style={{ width: '12rem' }}>
                <Label>Product</Label>
              </TableColumn>
              <TableColumn minWidth={800} popinText="Supplier">
                <Label>Supplier</Label>
              </TableColumn>
              <TableColumn minWidth={600} popinText="Dimensions" demandPopin>
                <Label>Dimensions</Label>
              </TableColumn>
              <TableColumn minWidth={600} popinText="Weight" demandPopin>
                <Label>Weight</Label>
              </TableColumn>
              <TableColumn>
                <Label>Price</Label>
              </TableColumn>
            </>
          }
        // onRowClick={action('onRowClick')}
        >
          <TableRow>
            <TableCell>
              <Label>Notebook Basic</Label>
            </TableCell>
            <TableCell>
              <Label>Very Best Screens</Label>
            </TableCell>
            <TableCell>
              <Label>30 x 18 x 3cm</Label>
            </TableCell>
            <TableCell>
              <Label>4.2KG</Label>
            </TableCell>
            <TableCell>
              <Label>956EUR</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>Notebook Basic 17HT-1001</Label>
            </TableCell>
            <TableCell>
              <Label>Very Best Screens</Label>
            </TableCell>
            <TableCell>
              <Label>29 x 17 x 3.1cm</Label>
            </TableCell>
            <TableCell>
              <Label>4.5KG</Label>
            </TableCell>
            <TableCell>
              <Label>1249EUR</Label>
            </TableCell>
          </TableRow>
        </Table>
      </div>
    );
  }
}

export default withRouter(SprintList);
