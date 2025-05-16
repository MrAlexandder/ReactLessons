import { Button as AntButton } from 'antd'

const Button = (props) => (
  <AntButton
    {...props}
    size={props.size ?? 'large'}
    style={props.style ?? {
      background: 'var(--purpure-gradient)',
      color: 'white',
      boxShadow: '2px 2px 10px #a3a3a3',
      border: 'none',
    }}
  />
)

export default Button;