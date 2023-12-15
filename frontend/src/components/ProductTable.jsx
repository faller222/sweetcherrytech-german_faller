import * as React from 'react';
import PropTypes from 'prop-types';
import {alpha} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import {visuallyHidden} from '@mui/utils';
import SearchBar from "./SearchBar";



import {useDispatch, useSelector} from "react-redux";

import {getProducts, selectProducts,selectSize,selectTotal,selectPage} from "../store/productSlice";

const ProductTable = () => {

    const dispatch = useDispatch();

    const products = useSelector(selectProducts);
    const size = useSelector(selectSize);
    const total = useSelector(selectTotal);
    const page = useSelector(selectPage);

    const handleChangePage = (event, newPage) => {
        dispatch(getProducts({title:"", minPrice:0, maxPrice:1000, page: newPage, size}));
        // setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        dispatch(getProducts({title:"", minPrice:0, maxPrice:1000, page: 0, size}));
        // setRowsPerPage(parseInt(event.target.value, 10));
        // setPage(0);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Paper sx={{width: '100%', mb: 2}}>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        aria-labelledby="tableTitle"
                        size={'small'}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell/>
                                <TableCell><b>Titulo</b></TableCell>
                                <TableCell><b>Cantidad</b></TableCell>
                                <TableCell><b>Precio</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map(p=>(
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