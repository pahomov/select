import React from 'react';
import styled from 'styled-components';
import media from './media';

export default class MultiSelectItems extends React.PureComponent {
  render() {
    return (
      <Container>
        <Button onClick={this.props.onAccept}>Save</Button>
        <Button onClick={this.props.onReject}>Cancel</Button>
        {this.props.children}
      </Container>
    );
  }
}

const Container = styled.div`
  border: 1px solid steelblue;
  background: white;
`;
const Button = styled.button`
  background: steelblue;
  color: white;
  border: 0;
  margin: 8px;
  margin-right: 0;
  border-radius: 4px;
  padding: 8px 16px;
  display: none;
  text-transform: uppercase;
  ${media.s`
    display: initial;
  `};
`;
