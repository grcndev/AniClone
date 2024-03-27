import React from 'react'
import Card from './Card'

const AnimeContainer = ({data}) => {
    
  return (
    <div className='flex items-center justify-evenly mx-72'>{data?.slice(0,5).map((anime) => {
        
       return <Card key={anime.id} anime={anime}/>
    }) }</div>
  )
}

export default AnimeContainer;