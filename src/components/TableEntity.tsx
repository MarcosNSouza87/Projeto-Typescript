import React from 'react'
import {Table,TableHead,TableRow,TableBody,TableCell,TableContainer, TablePagination} from '@material-ui/core'
import {IconButton} from '@material-ui/core'
import {EditOutlined as EditIcon} from '@material-ui/icons'


const HeaderTable = (props:any) => {

    return(
        <TableHead>
            <TableRow> 
                {props.columns.map((col:any)=>(
                    <TableCell key={col.id}>
                        {col.label}
                    </TableCell>
                ))}
                <TableCell>
                    Actions
                </TableCell>
            </TableRow>
        </TableHead>
    )
}
interface myProps{
    headData:any,
    entityData:any,
    ClickFunc: (id:string) => void,
}

const TableData = (props:myProps) => {

    return(
        <TableRow
            hover
            
        >
        {props.headData.map((head:any) => (
            <TableCell key={head.id}>
                {props.entityData[`${head.name}`]}
            </TableCell>
        ))}
        <TableCell>
            <IconButton onClick={()=>{props.ClickFunc(props.entityData['id'])}}>
                <EditIcon/>
            </IconButton>
        </TableCell>
        </TableRow>
    )
}



const TableEntity = (props:any) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };
    
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return(
        <div className="pageDashboard">
            <TableContainer>
                <Table>
                    <HeaderTable columns={props.columns}/>
                    <TableBody>
                        {props.rows.map( (row:any) => (
                            <TableData key={row.id} headData={props.columns} entityData={row} ClickFunc={props.ClickFunc}/>
                        ) )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination 
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={props.rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    )
}
export default TableEntity;



