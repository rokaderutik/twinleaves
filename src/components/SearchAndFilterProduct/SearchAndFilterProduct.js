import { Box, TextField, Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";

const SearchAndFilterProduct = ({ productList, setProducts, categoryList }) => {

    const [searchData, setSearchData] = useState('');
    const [category, setCategory] = useState('');

    let debounceTimeout;
    
    const handleInputChange = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setSearchData(searchValue);

        clearTimeout(debounceTimeout);
    
        debounceTimeout = setTimeout(() => {
            const requiredProducts = productList.filter((product) => 
                product.name.toLowerCase().includes(searchValue)
            );
            setProducts(requiredProducts);
        }, 500); 
    };

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setCategory(category);

        const requiredProducts = productList.filter((product) => 
            product.category.toUpperCase() === category
        );
        setProducts(requiredProducts);
    };

    useEffect(() => {
        
        return () => clearTimeout(debounceTimeout);
    }, []);

    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '20px',
                gap: '16px'
            }}
        >
            <TextField 
                label="Search Products"
                variant="outlined"
                value={searchData}
                onChange={handleInputChange}
                sx={{ maxWidth: '400px', width: '100%' }} 
            />
            <Select
                id="demo-simple-select"
                value={category}
                label="Select Category"
                onChange={handleCategoryChange}
                sx={{ maxWidth: '400px', width: '100%' }}
            >
                {
                    categoryList.map((category) => {
                        return <MenuItem key={category} value={category}>{category}</MenuItem>
                    })
                }
            </Select>
        </Box>
    );
};

export default SearchAndFilterProduct;