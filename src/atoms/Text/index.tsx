import styled from 'styled-components'

export interface TextProps {
    color?: string;
    size?: string;
    weight?: string;
    children?: React.ReactNode;
  }
  

const Text = styled.span<TextProps>`
  color: ${(props) => props.color || '#000'};
  font-size: ${(props) => props.size || '16px'};
  font-weight: ${(props) => props.weight || 'normal'};
`

export default Text;
