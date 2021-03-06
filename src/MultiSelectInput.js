import React from 'react';
import styled from 'styled-components';

export default class MultiSelectInput extends React.PureComponent {
  render() {
    return (
      <Container onClick={this.props.onClick}>
        {this.props.value.length
          ? this.props.value
              .map(v => this.props.items.find(i => i.value === v).label)
              .join(' ')
          : `ʕ•ᴥ•ʔ`}
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
