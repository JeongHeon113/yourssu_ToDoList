import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Nav = () => {
  return (
    <div>
        <h1 className='title'>DRAG & DROP Todo List</h1>
        <div className='list-nav'>
            <div className='list-input'>
                <span className='sub-title'>Todo List</span>
                <button>+</button>
                <input placeholder='보기 추가'/>
            </div>
            <div>
                <FontAwesomeIcon id='search-icon' icon={faSearch}/>
                <input placeholder='검색'/>
            </div>
            
        </div>
    </div>
  )
}

export default Nav