import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const ErrorFormBarTransition = keyframes`
  from {
    transform: scaleX(0);
  }
  to{
    transform: scaleX(1);
  }
  `

export const ErrorFormBar = styled.div`
  position: absolute;
  top: 0;
  margin: auto;
  width: 100%;
  height: 5px;
  background-color: #d32f2f;
  animation: ${ErrorFormBarTransition} 0.2s;
`
