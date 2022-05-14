import React from 'react'

interface Props {
  name: string,
  description: string,
  distance: string,
  travelTime: string
}

const DestinationCard: React.FC<Props> = ({ name, description, distance, travelTime }) => {
  return (
    <div className='destination-info'>
      <h1 className='info-title'>{name}</h1>
      <p className="info-content">{description}</p>
      <hr />
      <footer className='info-footer'>
        <div>
          <h5 className='subheading2'>Avg. distance</h5>
          <h4 className='subheading1'>{distance}</h4>
        </div>
        <div>
          <h5 className='subheading2'>Est. travel time</h5>
          <h4 className="subheading1">{travelTime}</h4>
        </div>
      </footer>
    </div>
  )
}

export default DestinationCard