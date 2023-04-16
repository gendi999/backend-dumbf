// import The from "../image/thewitcher.png"
import Props from "./Props"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useQuery } from "react-query";
import { API } from '../config/api';
// import ExampleForm from "/hooks/ExampleForm";
function Home(){
  let { data: films } = useQuery("filmsCache", async () => {
    const response = await API.get("/films");
    return response.data.data;
  });
  console.log(films);
    // const movie ={
    //     TV:{
    //       tv1: {
    //         id:1,
    //         image: 'Card1',
    //         name: 'The Witcher',
    //         year: '2019'
    //       },
    //       tv2: {
    //         id:2,
    //         image: 'Card6',
    //         name: 'Persona 3 The Movie',
    //         year: '2016'
    //       },
    //       tv3: {
    //         id:3,
    //         image: 'Card3',
    //         name: 'Personal 3 The Movie',
    //         year: '2016'
    //       },
    //       tv4: {
    //         id:4,
    //         image: 'Card4',
    //         name: 'Personal 3 The Movie',
    //         year: '2016'
    //       },
    //       tv5: {
    //         id:5,
    //         image: 'Card5',
    //         name: 'Personal 3 The Movie',
    //         year: '2016'
    //       },
    //       tv6: {
    //         id:6,
    //         image: 'Card9',
    //         name: 'Personal 3 The Movie',
    //         year: '2016'
    //       },
      
    //     },
      
    //     Movies: {
    //       Movie1: {
    //         image: 'Card7',
    //         name: 'title1',
    //         year: '2019'
    //       },
    //       Movie2: {
    //         image: 'Card8',
    //         name: 'tMovie2',
    //         year: '2018'
    //       },
    //       Movie3: {
    //         image: 'Card9',
    //         name: 'title1',
    //         year: '2019'
    //       },
    //       Movie4: {
    //         image: 'Card10',
    //         name: 'title1',
    //         year: '2019'
    //       },
    //       Movie5: {
    //         image: 'Card1',
    //         name: 'title1',
    //         year: '2019'
    //       },
    //       Movie6: {
    //         image: 'Card1',
    //         name: 'title1',
    //         year: '2019'
    //       },
    //     }
    //   }
    return(<div className="bg">
        <div className="the">
        <img  src={require( "../image/thewitcher.png")} alt="gambar"  className=""></img>
        <div>
        <p>Tailwind CSS adalah kerangka kerja CSS yang di dalamnya terdapat sekumpulan utility classes untuk membangun antarmuka kustom dengan cepat. Tailwind CSS berbeda dengan kerangka kerja CSS seperti Bootstrap, Bulma, atau Foundation, karena Tailwind CSS bukan sebuah UI Framework. Wikipedia
        </p>
        <div className="d-flex">
        <p className="pl-3">2019</p>
        <p className="Tvshoww">Tv Show</p>
        </div>
        </div>
        <div className="watch">
        {/* <Link to={`/Detail/${movie.id}`}></Link> */}
        <Button className=' 'variant='danger' style={{
          width:"230px",
          height:"70px",
          fontSize:"20px"
        }} >Watch Now </Button>
        </div>
      
        </div>

        <img className="kontol" src={require( "../image/Jumbotron.png")} alt="gambar"></img>
        {/* <Props className="text-decoration-none" value={movie}/> */}
        <div className="d-flex flex-wrap justify-content-center gap-4">
         {films?.map((item) => (
           <div className="flex">
            <div className="props">
            <Link to={`/Detail/${item.id}`}><img src={item.thumbnailfilm}/></Link>
            <h5>

            <Link to={`/Detail/${item.id}`}>{item.title}</Link>
            </h5>
            <h5>{item.year}</h5>

            </div>

          </div>

         ))} 
         </div>
    </div>
    )
}
export default Home