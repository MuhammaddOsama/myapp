import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Sementic  = () => (
  <Card>
    <Image src='/ C:\Users\iiiiiii\Pictures/img.jpg' alt=" hello" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default  Sementic