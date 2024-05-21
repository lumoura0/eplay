import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos } from './styles'

type Props = {
  title: string
  category: string
  description: string
  info: string[]
  image: string
  system: string
  id: number
}

const Product = ({
  title,
  category,
  description,
  info,
  image,
  system,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {info.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  )
}

export default Product
