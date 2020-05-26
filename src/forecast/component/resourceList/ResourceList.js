import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './ResourceList.css';
import { Table, TableColumn, Label, TableRow, TableCell, Button, Dialog, Bar, ListMode } from "@ui5/webcomponents-react";

class ResourceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddDialogOpen: false,
    }
  }
  onAddButtonClicked = () => {
    if (!this._oResourceDialog) {
      this._oResourceDialog = document.getElementById('_resourcerDialogId');
    }
    this._oResourceDialog.open();
  }
  onDeleteButtonClicked = () => {
    this.setState({ isAddDialogOpen: true });
  }
  onDialogOkClicked = () => {
    this._oResourceDialog.close();
  }
  onDialogCancelClicked = () => {
    this._oResourceDialog.close();
  }
  render() {
    return (
      <div >
        <div >
          <Button className="icon-header-button" icon={'delete'} onClick={this.onDeleteButtonClicked}></Button>
          <Button className="icon-header-button" icon={'add'} onClick={this.onAddButtonClicked}></Button>
        </div>
        <Dialog
          id="_resourcerDialogId"
          headerText={'Resource Available'}
          stretch={true}
          stickyColumnHeader={true}
          footer={<Bar contentRight={[<Button onClick={this.onDialogOkClicked}>Ok</Button>,
          <Button onClick={this.onDialogOkClicked}>Cancel</Button>]}>
          </Bar>}
        >
          <Table
            mode={ListMode.SingleSelect}
            noDataText={'Please Add a Resources'}
            showNoData={true}
            stickyColumnHeader={false}
            columns={
              <>
                <TableColumn style={{ width: '12rem' }}>
                  <Label>Employee</Label>
                </TableColumn>
                <TableColumn demandPopin={true} minWidth={600} popinText="Skills">
                  <Label>Skills</Label>
                </TableColumn>
                <TableColumn demandPopin={true} minWidth={600} popinText="Skills">
                  <Label>Skills</Label>
                </TableColumn>
                <TableColumn minWidth={800} popinText="Sec Skills" demandPopin>
                  <Label>Secondary Skills</Label>
                </TableColumn>
                <TableColumn>
                  <Label>Designation</Label>
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

        </Dialog>
        <Table
          noDataText={'Please Add a Resources'}
          showNoData={true}
          stickyColumnHeader={false}
          columns={
            <>
              <TableColumn style={{ width: '12rem' }}>
                <Label>Employee</Label>
              </TableColumn>
              <TableColumn demandPopin={true} minWidth={600} popinText="Skills">
                <Label>Skills</Label>
              </TableColumn>
              <TableColumn demandPopin={true} minWidth={600} popinText="Skills">
                <Label>Skills</Label>
              </TableColumn>
              <TableColumn minWidth={800} popinText="Sec Skills" demandPopin>
                <Label>Secondary Skills</Label>
              </TableColumn>
              <TableColumn>
                <Label>Designation</Label>
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

export default withRouter(ResourceList);
