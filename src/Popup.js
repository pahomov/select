import React from 'react';
import clickOutside from 'react-click-outside';
import styled from 'styled-components';
import media from './media';

export default clickOutside(
  class Popup extends React.PureComponent {
    render() {
      if (!this.props.isOpen) return null;
      return (
        <Container>
          <ButtonClose onClick={this.props.onClose}>Close</ButtonClose>
          {this.props.children}
        </Container>
      );
    }

    handleSelectChange = value => {
      this.props.onChange(value);
    };

    handleClickOutside() {
      if (this.props.isOpen) setTimeout(this.props.onClose);
    }
  },
);

const Container = styled.div`
  ${media.s`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  `};
`;
const ButtonClose = styled.button`
  background: steelblue;
  color: white;
  border: 0;
  margin: 8px;
  border-radius: 4px;
  padding: 8px 16px;
  display: none;
  text-transform: uppercase;
  ${media.s`
    display: initial;
  `};
`;
