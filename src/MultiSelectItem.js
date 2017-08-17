import React from 'react';
import styled from 'styled-components';

export default class MultiSelectItem extends React.PureComponent {
  render() {
    return (
      <Container>
        <input
          onChange={this.handleChange}
          type="checkbox"
          checked={this.props.checked}
        />
        {this.props.label}
      </Container>
    );
  }

  handleChange = e => {
    this.props.onChange({ checked: e.target.checked, value: this.props.value });
  };
}

const Container = styled.label`
  display: block;
  padding: 8px;
  &:hover {
    background: aliceblue;
  }
`;
