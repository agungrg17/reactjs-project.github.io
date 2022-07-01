import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <Card id={movie.id} sx={{ display: 'flex', width: 600, margin: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <Box 
        sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems:'center' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {movie.release_date}
            {/* {new Date(movie.release_date).getFullYear()} */}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
            <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(2)}</Box>
          </Box>
            {/* <Typography variant="body2" sx={{mt: 1}}>
                {movie.release_date}
            </Typography> */}
            <Typography variant="body2" sx={{mt: 2}}>{movie.overview}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default MovieCard;


// export default function MovieCard(props) {
//     const baseUrlMovie = "https://image.tmdb.org/t/p/original";
  
//   return (
//     <Card className='boxy' sx={{ display: 'flex', mt: 2 }}>

//         <Box 
//             className='boxy' 
//             sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//             <CardMedia
//                 component="img"
//                 sx={{ width: 151 }}
//                 image={`${baseUrlMovie}${props.movie.poster_path}`}
//                 alt={props.movie.title}
//             ></CardMedia>
//             <CardContent 
//                 sx={{ 
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: 2,
//                     width: 1,
//                      }}>
//                 <Typography component="div" variant="body1">
//                     {props.movie.title}
//                 </Typography>
//                 <Box
//                     sx={{
//                     width: 200,
//                     display: 'flex',
//                     alignItems: 'center',
//                     }}
//                 >
//                     <Rating
//                         value={props.movie.vote_average / 2}
//                         precision={0.1}
//                         readOnly
//                     />
//                     <Box sx={{ ml: 2 }}>{props.movie.vote_average.toFixed(2)}</Box>
//                 </Box>
//                 <Typography variant="body2">
//                     Release date: {props.movie.release_date}
//                 </Typography>
//                 <Typography variant="body2">{props.movie.overview}</Typography>
//             </CardContent>
//       </Box>
//     </Card>
//   );
// }
