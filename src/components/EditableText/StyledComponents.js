import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f5d0fe;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`
export const BgContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 14px;
`

export const Heading = styled.h1`
  color: #000;
  text-align: center;
  margin-bottom: 20px;
`
export const InputText = styled.input`
  border: 1px solid #cbd2d9;
  border-radius: 3px;
  padding: 10px;
  outline: none;
  color: #323f4b;
  font-size: 18px;
`
export const SaveBtn = styled.button`
  background-color: #d946ef;
  color: #fff;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  height: 37px;
  width: 80px;
  border: none;
  margin-left: 20px;
`
export const Paragraph = styled.p`
  color: #323f4b;
  margin-right: 20px;
`
export const EditBtn = styled(SaveBtn)``

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
