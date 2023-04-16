import Props from "./Props"
import Movies from '../components/Movies'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
function Film(){
    const movie ={
        TV:{
          tv1: {
            image: 'Card1',
            name: 'The Witcher',
            year: '2019'
          },
          tv2: {
            image: 'Card1',
            name: 'Persona 3 The Movie',
            year: '2016'
          },
          tv3: {
            image: 'Card3',
            name: 'Personal 3 The Movie',
            year: '2016'
          },
          tv4: {
            image: 'Card1',
            name: 'Personal 3 The Movie',
            year: '2016'
          },
          tv5: {
            image: 'Card3',
            name: 'Personal 3 The Movie',
            year: '2016'
          },
          tv6: {
            image: 'Card2',
            name: 'Personal 3 The Movie',
            year: '2016'
          },
      
        },
        Movies: {
            Movie1: {
              image: 'Card1',
              name: 'title1',
              year: '2019'
            },
            Movie2: {
              image: 'Card3',
              name: 'tMovie2',
              year: '2018'
            },
            Movie3: {
              image: 'Card1',
              name: 'title1',
              year: '2019'
            },
            Movie4: {
              image: 'Card1',
              name: 'title1',
              year: '2019'
            },
            Movie5: {
              image: 'Card1',
              name: 'title1',
              year: '2019'
            },
            Movie6: {
              image: 'Card1',
              name: 'title1',
              year: '2019'
            },
          }
      
        
      }
    return(<div className="bg">
         <div className="d-flex flex row-cols-3 mb-2">
             <p className="fs-6 fw-semibold text-white">List Film
             </p>
             <p className="white justify-content-end">
             <select>
              <option>Tv Movies</option>
              <option>Movies</option>
             </select>
             
             </p>    
             <Link to="/Addfilm"
               className="d-flex justify-content-end text-decoration-none">
               <Button variant="danger" size="sm" className="px-4 py-1 fw-bold">
                 Add Film
               </Button>
             </Link>
         </div>


        <Props value={movie}/>
    </div>
    )
}
export default Film;
// import React from "react";
// import { Button } from "react-bootstrap";
// import { useQuery } from "react-query";
// import { Link } from "react-router-dom";
// import Cards from "../component/Card";
// import { API } from "../config/api";

// function Film() {
//   let { data: films } = useQuery("filmsCache", async () => {
//     const response = await API.get(`/films`);
//     return response.data.data;
//   });
//   return (
//     <div style={{ background: "black" }}>
//       <div className="px-5 py-5">
//         <div className="mx-4 gap-5">
//           <div className="d-flex flex row-cols-2 mb-3">
//             <p className="fs-6 fw-semibold text-white">List Film</p>
//             <Link
//               to="/add-film"
//               className="d-flex justify-content-end text-decoration-none">
//               <Button variant="danger" size="sm" className="px-4 py-1 fw-bold">
//                 Add Film
//               </Button>
//             </Link>
//           </div>
//           <div className="d-flex flex-wrap justify-content-center gap-4">
//             {films?.map((data) => {
//               return (
//                 <Cards
//                   id={data.id}
//                   title={data.title}
//                   year={data.year}
//                   poster={data.thumbnailfilm}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Film;