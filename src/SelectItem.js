import React from 'react';
import styled from 'styled-components';

export default class SelectItem extends React.PureComponent {
  render() {
    return (
      <Container onClick={this.handleSelect} cur={this.props.selected}>
        {this.props.label}
      </Container>
    );
  }

  handleSelect = e => {
    this.props.onSelect(this.props.value);
  };
}

const Container = styled.label`
  display: block;
  padding: 8px;
  &:hover {
    ${p => !p.cur && 'background: aliceblue;'};
  }
  ${p => p.cur && 'color: white;'};
  ${p => p.cur && 'background: steelblue;'};
`;
