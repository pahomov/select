import React from 'react';
import styled from 'styled-components';

export default class MultiSelect extends React.PureComponent {
  render() {
    return (
      <Container onClick={this.props.onClick}>
        {this.props.value.length ? this.props.value.join(' ') : 'ಠ╭╮ಠ'}
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 8px;
  border: 1px solid steelblue;
  &:hover {
    background: aliceblue;
  }
`;
