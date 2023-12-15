import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import {useDispatch, useSelector} from "react-redux";

import {getProducts, selectPage, selectProducts, selectSize, selectTotal} from "../store/productSlice";

const ProductTable = () => {

    const dispatch = useDispatch();

    const products = useSelector(selectProducts);

    const size = useSelector(selectSize);
    const total = useSelector(selectTotal);
    const page = useSelector(selectPage);

    const handleChangePage = (event, newPage) => {
        dispatch(getProducts({page: newPage, size}));
    };

    const handleChangeRowsPerPage = (event) => {
        dispatch(getProducts({size: parseInt(event.target.value, 10)}));
    };

    return (
        <Box sx={{width: '100%'}}>
            <Paper sx={{width: '100%', mb: 2}}>
                <TableContainer>
                    <Table aria-labelledby="tableTitle" size={'small'}>
                        <TableHead>
                            <TableRow>
                                <TableCell/>
                                <TableCell><b>Titulo</b></TableCell>
                                <TableCell><b>Cantidad</b></TableCell>
                                <TableCell><b>Precio</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map(p => (
                                <TableRow key={p.id}>
                                    <TableCell>{p.id}</TableCell>
                                    <TableCell>{p.title}</TableCell>
                                    <TableCell>{p.quantity}</TableCell>
                                    <TableCell>{p.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    labelRowsPerPage={"Filas por pagina"}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={total}
                    rowsPerPage={size}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>);
}

export default ProductTable;