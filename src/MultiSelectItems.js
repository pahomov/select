import React from 'react';
import styled from 'styled-components';

export default class MultiSelectItems extends React.PureComponent {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}

const Container = styled.div`border: 1px solid steelblue;`;
