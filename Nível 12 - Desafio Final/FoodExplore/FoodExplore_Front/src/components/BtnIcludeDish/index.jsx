import { Container } from './styles';

function BtnIcludeDish({ icon: Icon, text, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      {text}
    </Container>
  );
}

export { BtnIcludeDish };
