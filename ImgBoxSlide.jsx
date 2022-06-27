import { Grid } from '@mui/material';

import Card from "./Card";


export default function ImgBoxSlide({list}){

    return (
        <Grid sx={{padding: "20px"}} container justifyContent="center" spacing={3}>
            {list.map((item, i)=>{
                return(
                    <Grid key={i} item xs={12} sm={6} md={4} lg={4}>
                        <Card 
                            bg={item.bg}
                            img={item.img} 
                            title={item.title} 
                            text={item.text}
                            buttons={item.buttons}
                        />
                    </Grid>
                )
            })}
        </Grid>      
    )
}