import React from 'react'
import FormF from './AddForm'

const Add = (props) => {
  // console.log(props.theme," from add");
  return (
    <div className='dark:bg-black dark:text-white'>
      <FormF theme={props.theme}/>
    </div>
  )
}

export default Add