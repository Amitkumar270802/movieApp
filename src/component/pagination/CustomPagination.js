// the some Code is from material-ui

import React from 'react'
import Pagination  from '@mui/material/Pagination';


const CustomPagination = ( { setPage , numOfPages  =10  }) => {

  const handelPageChange=(page)=>{
    setPage(page);
    window.scroll(0,0);
  };



   return (
      
      <div style={{ width:"70%", display:"flex", justifyContent:'center' ,backgroundColor:"white", zIndex:100 ,borderRadius:"50px", marginTop:"15px"}}>
      <div >
        <Pagination  
          count={numOfPages}
          onChange={ (e)=>{handelPageChange(e.target.textContent )}}
          color="secondary"
          hideNextButton
          hidePrevButton
        />
    </div>
     </div>
  )
}

export default CustomPagination
