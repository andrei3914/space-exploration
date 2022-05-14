import React from 'react'

interface Props {
    name: string,
    content: string,
    title: string
}

const CrewInfo: React.FC<Props> = ({ title, name, content }) => {
  return (
    <div className='crew-info'>
        <h4 className='crew-position'>{title}</h4>
        <h3 className='crew-name'>{name}</h3>
        <p className='crew-description'>{content}</p>
    </div>
  )
}

export default CrewInfo