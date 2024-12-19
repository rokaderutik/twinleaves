import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import product_dummy_image from "../../assets/dummy image.jpg";
  
const columns = [
    { field: 'image', 
        headerName: 'Image', 
        minWidth: 100, 
        flex: 1,
        renderCell: (params) => (
            <img
                src={params.value}
                alt={params.row.name}
                style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                }}
            />
        ),
    },
    { field: 'name', headerName: 'Name', minWidth: 100, flex: 1 },
    { field: 'price', headerName: 'Price', minWidth: 100, flex: 1 },
    { field: 'category', headerName: 'Category', minWidth: 100, flex: 1 },
];

const ProductsGrid = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 20 });
    const [totalRows, setTotalRows] = useState(0);

console.log(paginationModel)
    const fetchProducts = async (page) => {
        try {
            setIsLoading(true);

            const response = await fetch(
                `https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/products?page=${page + 1}`
            );
            const data = await response.json();

            // taking only required properties
            const formattedProducts = data.products.map((product) => ({
                id: product.sku_code,
                image: product_dummy_image,
                name: product.name,
                price: product.mrp.mrp,
                category: product.main_category,
            }));

            setProducts(formattedProducts);
            setTotalRows(data.totalResults); 
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setIsLoading(false);
        }
    };

    
    const handlePaginationChange = (newPaginationModel) => {
        setPaginationModel(newPaginationModel);
        fetchProducts(newPaginationModel.page);
    };

    useEffect(() => {
        fetchProducts(paginationModel.page);
    }, [paginationModel]); 


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '80vh' 
        }}>
            {
                isLoading ? (
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <CircularProgress />
                        <p>Loading...</p>
                    </Box>
                ) : (
                    <DataGrid 
                        rows={products} 
                        columns={columns} 
                        rowCount={totalRows}
                        pagination
                        paginationMode="server"
                        paginationModel={paginationModel}
                        onPaginationModelChange={handlePaginationChange}
                        getRowHeight={() => 'auto'}
                    />
                )
            }    
        </Box>
    );
};

export default ProductsGrid;