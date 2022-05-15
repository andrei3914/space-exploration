import React from 'react'

interface Props {
    name: string,
    description: string
}

const TechInfo: React.FC<Props> = ({ name, description }) => {
  return (
    <div className='crew-info'>
        <h4 className='crew-position'>The terminology...</h4>
        <h3 className='crew-name'>{name}</h3>
        <p className='crew-description'>{description}</p>
    </div>
  )
}

export default TechInfo