import React from 'react';
import styled from 'styled-components';

export default class SelectInput extends React.PureComponent {
  render() {
    return (
      <Container onClick={this.props.onClick}>
        {this.props.value
          ? this.props.items.find(i => i.value === this.props.value).label
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
