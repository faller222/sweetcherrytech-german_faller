import React, {useState} from "react";
import {CssBaseline, Grid, TextField, Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/system/Box';


const SearchBar = () => {
    const [title, setTitle] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);


    return (
        <React.Fragment>
            <CssBaseline/>
            <Box sx={{p: 2, border: '1px dashed grey'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <TextField
                            error={minPrice < 0 || minPrice > 1000 || (minPrice - maxPrice) > 0}
                            fullWidth
                            label="Precio Min."
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <TextField
                            error={maxPrice < 0 || maxPrice > 1000 || (minPrice - maxPrice) > 0}
                            fullWidth
                            label="Precio Max."
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button sx={{height: "100%"}} fullWidth variant="outlined"
                                startIcon={<SearchIcon/>}>Primary</Button>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

export default SearchBar;