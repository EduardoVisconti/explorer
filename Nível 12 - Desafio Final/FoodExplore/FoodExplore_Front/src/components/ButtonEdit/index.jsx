import { Container } from './styles';

function ButtonEdit({ icon: Icon, ...rest }) {
  return <Container {...rest}>{<Icon />}</Container>;
}

export { ButtonEdit };