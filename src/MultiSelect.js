import React from 'react';
import MultiSelectInput from './MultiSelectInput';
import MultiSelectItem from './MultiSelectItem';
import MultiSelectItems from './MultiSelectItems';
import Popup from './Popup';
import styled from 'styled-components';

export default class MultiSelect extends React.PureComponent {
  render() {
    return (
      <Container>
        <MultiSelectInput
          value={this.props.value}
          onClick={this.handleOpenClose}
        />
        <Popup isOpen={this.state.isOpen} onClose={this.handleClose}>
          <MultiSelectItems>
            {this.props.items.map(item =>
              <MultiSelectItem
                key={item.value}
                {...item}
                onChange={this.handleItemChange}
                checked={this.state.value.includes(item.value)}
              />,
            )}
          </MultiSelectItems>
        </Popup>
      </Container>
    );
  }

  constructor(props) {
    super(props);
    this.state = { isOpen: false, value: props.value };
  }

  handleItemChange = ({ checked, value }) => {
    const newValue = checked
      ? [...this.state.value, value]
      : this.state.value.filter(v => v !== value);
    this.setState({ value: newValue });
    if (!isMobile()) this.props.onChange(newValue);
  };

  handleOpenClose = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
    if (this.state.value !== this.props.value)
      this.props.onChange(this.state.value);
  };
}

const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

const Container = styled.div``;
