import React, { useEffect, useState } from 'react'
import SingleContent from '../singelContent/SingleContent';
import './Trending.css'
import CustomPagination from '../pagination/CustomPagination';
import {BsFillArrowUpCircleFill} from "react-icons/bs"


const Movies = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [btn,setBtn]=useState(0);
  const [sort,setSort]=useState("popularity.desc");
  const [genres,setGenres]=useState();
  
     
  //  At Every page it fetch PI
     useEffect(()=>{
       getData1();
      },[page,btn,sort,genres])

   function getData1() {
     
      let url;
      switch (btn) {
         case 0:
            url=`https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&api_key=${process.env.REACT_APP_API_KEY}&category=action&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}`
            break;
         case 1:
            url=`https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&api_key=${process.env.REACT_APP_API_KEY}&with_original_language=hi&sort_by=${sort}&page=${page}`
            break;
         case 2:
            url=`https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&api_key=${process.env.REACT_APP_API_KEY}&with_original_language=te&sort_by=${sort}&page=${page}`
            break;
         default:
          url=`https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}`
            break;
}


        fetch(url).then((result)=>{
          result.json().then((respond)=>{
            setData(respond.results)
            console.warn(respond.results)
          })
        }) 
}


   // Top to Page 
    function top(){
      window.scroll(0,0);
    }
 function newBtn_0(){
 setBtn(0);
 setPage(1)
}
function newBtn_1(){
  setBtn(1);
  setPage(1)
}
function newBtn_2(){
   setPage(1)
 setBtn(2);
 }

 
 return (
    <>
     <span className="pageTitle"  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Movies</span>
        <ul className="btns">
           <li class="a" onClick={()=>newBtn_0()} color="secondary">Hollywood</li>
           <li class="a" onClick={()=>newBtn_1()} color="secondary">Bollywood</li>
           <li class="a" onClick={() => newBtn_2()} color="secondary">Tollywood</li>
         
       <div>
           <select className='select' onChange={(e)=>setSort(e.target.value)}>
              <option className="opt" active="true" >---Sort By----</option>
              <option className="opt" value="popularity.desc">Popularity</option>
              <option className="opt" value="release_date.desc">New</option>
              <option className="opt" value="release_date.asc">Old</option>
         </select>
       </div>
       
       <div>
           <select className='select' onChange={(f)=>setGenres(f.target.value)}>
              <option className="opt" active="true" >---Genres----</option>
              <option className="opt" value="28">Action</option>
              <option className="opt" value="16">Animation</option>
              <option className="opt" value="10751">Family</option>
              <option className="opt" value="53">Thriller</option>
              <option className="opt" value="27">Horror</option>
              <option className="opt" value="35">Comedy</option>
              <option className="opt" value="9648">Mystery</option>
              <option className="opt" value="10749">Romance</option>
              <option className="opt" value="878">Science Fiction</option>
              <option className="opt" value="80">Crime</option>
              <option className="opt" value="99">Documentary</option>
         </select>
        </div>
        </ul> 

  <div className="trending">
  {
    data&&data.map((item) => <SingleContent 

               key={item.id}
               id={item.id}   
               poster={item.poster_path}  
               title={item.title  ||item.name}  
               date={item.release_date||item.first_air_date}  
              media_type={"movie"}  
               vote={item.vote_average} />
    )
  }
 <CustomPagination setPage={setPage}  numOfPages={500}   />    
</div>
<span className='topIcon' onClick={top}><BsFillArrowUpCircleFill/></span>
</>
);
};
export default Movies

