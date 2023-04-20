import React from 'react'
import styled from 'styled-components'

const LabelStyle = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`

const Label = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode
  htmlFor: string
}) => {
  return <LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>
}

export default Label
