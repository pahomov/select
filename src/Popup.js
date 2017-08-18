import React from 'react';
import clickOutside from 'react-click-outside';
import media from './media';
import styled from 'styled-components';

export default clickOutside(
  class Popup extends React.PureComponent {
    render() {
      return (
        <Container>
          {this.props.children[0]}
          {this.props.isOpen &&
            <PositionedContent>
              {this.props.children[1]}
            </PositionedContent>}
        </Container>
      );
    }

    handleClickOutside() {
      if (this.props.isOpen) setTimeout(this.props.onReject);
    }
  },
);

const Container = styled.div`position: relative;`;
const PositionedContent = styled.div`
  background: white;
  z-index: 1;
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  ${media.s`
    position: fixed;
    top: initial;
    left: 0;
    right: 0;
    bottom: 0;
  `};
`;
