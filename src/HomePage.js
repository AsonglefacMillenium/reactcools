import React from 'react'
import { useEffect, useState } from 'react/cjs/react.production.min'
import { getList } from './services/list';

const HomePage = () => {

const [list, setList] = useState([]);


useEffect(() =>{
    let mounted = true;

    getList()
    .then(items =>{
        if (mounted) {
            setList(items)
            
        }

    })

return ( ) => mounted  = false
}, [])


  return (
    <div className='wrapper'>
    <h1>My grocery list</h1>
    <ul>
        {
            list.map(item => <li key={item.item}>{item.item}</li>)
        }
    </ul>

    </div>
  )
}

export default HomePage