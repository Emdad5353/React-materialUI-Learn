import {Typography} from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1"> h1 Heading</Typography>
        <Typography variant="h2"> h2 Heading</Typography>
        <Typography variant="h3"> h3 Heading</Typography>
        <Typography variant="h4"> h4 Heading</Typography>
        <Typography variant="h5"> h5 Heading</Typography>
        <Typography variant="h6"> h6 Heading</Typography>

        <Typography variant="h4" component="h1"> h4 element became h1 </Typography>

        <Typography variant="h4" gutterBottom> gutter Bottom- adding space below the title</Typography>


        <Typography variant="subtitle1"> Sub title 1</Typography>
        <Typography variant="subtitle2"> Sub </Typography>

        <Typography variant="body1"> 
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Typography>
        <Typography variant="body2">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Typography>
    </div>
  )
}
