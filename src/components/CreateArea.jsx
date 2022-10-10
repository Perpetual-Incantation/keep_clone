import React from 'react'

const CreateArea = () => {
     
  return (
    <div>
      <form>
        <input type="text" className='text' placeholder='Title' name='Title'/>
        <p>
            <textarea name="content" className='textarea' placeholder="Take a Note..." ></textarea>
        </p>
      </form>
    </div>
  )
}

export default CreateArea
