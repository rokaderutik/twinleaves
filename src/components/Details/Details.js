import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import product_dummy_image from "../../assets/dummy image.jpg";
import { useState } from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useLocation, useNavigate } from "react-router-dom";


const ProductDetails = () => {

    const [productCount, setProductCount] = useState(1);

    const navigate = useNavigate();
    const location = useLocation();
    const { productData } = location.state;

    // console.log(productData);

    const handleAddToBasket = (e) => {
        // add to basket
    };

    const handleSaveForLatter = (e) => {
        // save product for latter
    };

    const handleGoBack = () => {
        navigate(-1);
    };


    return (
        <Stack sx={{ padding: '20px' }}>
            <Button
                variant="outlined"
                onClick={handleGoBack}
                sx={{
                    alignSelf: "flex-end",
                    marginBottom: "16px",
                    marginRight: "16px"
                }}
            >
                Back
            </Button>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '24px'
            }}>
                <img 
                    src={product_dummy_image} 
                    alt={""} 
                    style={{
                        minWidth: '100px',
                        minHeight: '100px',
                        maxWidth: '350px', 
                        maxHeight: '350px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                    }}
                />
                <Stack spacing={1}>
                    <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                        {productData.name}
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                        {productData.category}
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                        Price: Rs {productData.price}
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: 200 }}>
                        (Inclusive of all taxes)
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '16px'
                    }}>
                        <input 
                            style={{
                                width: "30px",
                                padding: "6px 12px",
                                outline: 'none',
                                border: "1px solid black",
                                borderRadius: "4px"
                            }}
                            type="number" 
                            value={productCount}
                            onChange={(e) => setProductCount(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            onClick={handleAddToBasket}
                        >
                            ADD TO BASKET
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={handleSaveForLatter}
                        >
                            SAVE
                        </Button>
                    </Box>
                    <Stack direction={'row'} spacing={2}>
                        <LocalShippingIcon /> 
                        <Typography>
                            Standard: Tomorrow 9:00AM - 1:30PM
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
            <Stack spacing={1} sx={{ padding: '20px' }}>
                <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                    {productData.name}
                </Typography>
                <hr style={{width: '100%'}}/>
                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                    About the Product
                </Typography>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <hr style={{width: '100%'}}/>
            </Stack>
        </Stack>
    );
};

export default ProductDetails;