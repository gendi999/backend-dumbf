import Mprops from "./Mprops"
import Button from 'react-bootstrap/Button';
function Tvshow(){
  const movie ={
    TV:{
      tv1: {
        id:1,
        image: 'Card1',
        name: 'The Witcher',
        year: '2019'
      },
      tv2: {
        id:2,
        image: 'Card2',
        name: 'Persona 3 The Movie',
        year: '2016'
      },
      tv3: {
        id:3,
        image: 'Card3',
        name: 'Personal 3 The Movie',
        year: '2016'
      },
      tv4: {
        id:4,
        image: 'Card4',
        name: 'Personal 3 The Movie',
        year: '2016'
      },
      tv5: {
        id:5,
        image: 'Card5',
        name: 'Personal 3 The Movie',
        year: '2016'
      },
      tv6: {
        id:6,
        image: 'Card2',
        name: 'Personal 3 The Movie',
        year: '2016'
      },
  
    },
  
    Movies: {
      Movie1: {
        image: 'Card6',
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
    return(
        <div className="bg">
        <div className="the">
        <img  src={require( "../image/lacasa.png")} alt="gambar"></img>
        <div>
        <p className="text-white">Tailwind CSS adalah kerangka kerja CSS yang di dalamnya terdapat sekumpulan utility classes untuk membangun antarmuka kustom dengan cepat. Tailwind CSS berbeda dengan kerangka kerja CSS seperti Bootstrap, Bulma, atau Foundation, karena Tailwind CSS bukan sebuah UI Framework. Wikipedia
        </p>
        </div>
        <div className="watch">
        <Button className='px-5 fw-semibold shadow-sm 'variant='danger' >Watch Now </Button>
        </div>
        </div>

        <img className="kontol" src={require( "../image/joker.png")} alt="gambar"></img>
        <Mprops value={movie}/>
    </div>
    )
}
export default Tvshow