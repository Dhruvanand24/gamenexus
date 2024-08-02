import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {changePage} from '../slice/pagenumber'




const Pagination = () => {
 const page =  useSelector(state => state.page)
  const dispatch = useDispatch()
  const pageChanger = (newPage) => {
     
    dispatch(changePage(newPage));

  };
  
  return (
    <div className="join">{page==1?<></>:
    <button className="join-item btn" onClick={() => pageChanger(-1)}
    disabled={page<2}>{page-1}</button>}
    <button className="join-item btn text-orange-700 font-bold text-xl " onClick={() => pageChanger(props.page)}>{page}</button>
    <button className="join-item btn" onClick={() => pageChanger(1)}>{page+1}</button>
  </div>
  )
}

export default Pagination
