import {Component} from 'react'
import {
  MainContainer,
  BgContainer,
  Heading,
  InputText,
  SaveBtn,
  Paragraph,
  EditBtn,
  Container,
} from './StyledComponents'

class EditableText extends Component {
  state = {textInput: '', isSaved: false}

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  onClickSaveText = () => {
    this.setState({isSaved: true})
  }

  onClickEditText = () => {
    this.setState({isSaved: false})
  }

  renderTextView = () => {
    const {textInput} = this.state
    return (
      <>
        <InputText type="text" onChange={this.onChangeText} value={textInput} />
        <SaveBtn type="button" onClick={this.onClickSaveText}>
          Save
        </SaveBtn>
      </>
    )
  }

  renderSavedView = () => {
    const {textInput} = this.state
    return (
      <>
        <Container>
          <Paragraph>{textInput}</Paragraph>
          <EditBtn type="button" onClick={this.onClickEditText}>
            Edit
          </EditBtn>
        </Container>
      </>
    )
  }

  render() {
    const {isSaved} = this.state
    return (
      <MainContainer>
        <BgContainer>
          <Heading>Editable Text Input</Heading>
          {isSaved ? this.renderSavedView() : this.renderTextView()}
        </BgContainer>
      </MainContainer>
    )
  }
}

export default EditableText
