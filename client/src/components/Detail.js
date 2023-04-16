
// import Props from "./Props"
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import jumbo from "../image/Jumbotron.png"
import tangle from "../image/Rectangle65.png"


function Detail(){
    const {id}= useParams();
    const detailMv =[
        {
          
            id:1,
            image: 'Card1',
            url:'https://www.youtube.com/watch?v=EVenZlDqsRM&list=RDEVenZlDqsRM&start_radio=1',
            name: 'The Witcher',
            year: '2019',
            title:'Tailwind CSS adalah kerangka kerja CSS yang di dalamnya terdapat sekumpulan utility classes untuk membangun antarmuka kustom dengan cepat. Tailwind CSS berbeda dengan kerangka kerja CSS seperti Bootstrap, Bulma, atau Foundation, karena Tailwind CSS bukan sebuah UI Framework. Wikipedia',
            poster:'Rectangle1',
          },
          {
            id:2,
            image: 'Card6',
            url:'https://www.youtube.com/watch?v=npQhSZi8d6E',
            poster:'Rectangle2',
            name: 'Persona 1 The Movie',
            year: '2016',
            title:'Tailwind CSS adalah kerangka kerja CSS yang di dalamnya terdapat sekumpulan utility classes untuk membangun antarmuka kustom dengan cepat. Tailwind CSS berbeda dengan kerangka kerja CSS seperti Bootstrap, Bulma, atau Foundation, karena Tailwind CSS bukan sebuah UI Framework. Wikipedia'
          },
          {
            id:3,
            image: 'Card3',
            name: 'Personal 2 The Movie',
            year: '2016',
            url:'https://www.youtube.com/watch?v=npQhSZi8d6E',
            poster:'Rectangle2',
            title:'Tailwind CSS adalah kerangka kerja CSS yang di dalamnya terdapat sekumpulan utility classes untuk membangun antarmuka kustom dengan cepat. Tailwind CSS berbeda dengan kerangka kerja CSS seperti Bootstrap, Bulma, atau Foundation, karena Tailwind CSS bukan sebuah UI Framework. Wikipedia'
          },
           {
            id:4,
            image: 'Card4',
            name: 'Personal 3 The Movie',
            year: '2016',
            url:'https://www.youtube.com/watch?v=npQhSZi8d6E',
            poster:'Rectangle2',
            title:'Tailwind CSS adalah kerangka kerja CSS yang di dalamnya terdapat sekumpulan utility classes untuk membangun antarmuka kustom dengan cepat. Tailwind CSS berbeda dengan kerangka kerja CSS seperti Bootstrap, Bulma, atau Foundation, karena Tailwind CSS bukan sebuah UI Framework. Wikipedia'
          },
           {
            id:5,
            image: 'Card5',
            name: 'Pert sonal 4 The Movie',
            year: '2016',
            url:'https://www.youtube.com/watch?v=npQhSZi8d6E',
            poster:'Rectangle2',
            title:'Tailwind CSS adalah kerangka kerja CSS yang di dalamnya terdapat sekumpulan utility classes untuk membangun antarmuka kustom dengan cepat. Tailwind CSS berbeda dengan kerangka kerja CSS seperti Bootstrap, Bulma, atau Foundation, karena Tailwind CSS bukan sebuah UI Framework. Wikipedia'
          },
           {
            id:6,
            image: 'Card9',
            name: 'Personal 5 The Movie',
            year: '2016',
            url:'https://www.youtube.com/watch?v=npQhSZi8d6E',
            poster:'Rectangle2',
            title:'Tailwind CSS adalah kerangka kerja CSS yang di dalamnya terdapat sekumpulan utility classes untuk membangun antarmuka kustom dengan cepat. Tailwind CSS berbeda dengan kerangka kerja CSS seperti Bootstrap, Bulma, atau Foundation, karena Tailwind CSS bukan sebuah UI Framework. Wikipedia'
          },
      
        ]

        const selectedTv = detailMv.find((movie) => movie.id === parseInt(id));

    return(
      <>
         <div className="bg">
        <div className='px-5'>
          <ReactPlayer light={jumbo} className="player" url={selectedTv.url}/>
        </div>
    </div>
    <div className='d-flex pt-5 px-5 text-white'>
        <img  src={require(`../image/Cards/${selectedTv.image}.png`)} alt="gambar"></img>
      <p className="px-4 d-col" style={{
        display:"Block"
      }}
      >
        <p className='white'>{selectedTv.name}</p>
        <p className='white'>{selectedTv.title}</p>
        <p className='white'>{selectedTv.year}</p>

        <p>
        <Button className='px-5 fw-semibold shadow-sm' variant='danger' >Watch Now </Button>
        </p>
        </p>
        <img  src={require(`../image/Cards/${selectedTv.poster}.png`)} alt="gambar"></img>
        {/* <img src={tangle} alt="tangle"></img> */}

    </div>
    
      </>
    )
}
export default Detail