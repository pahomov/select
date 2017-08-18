import React from 'react';
import SelectInput from './SelectInput';
import SelectItem from './SelectItem';
import SelectItems from './SelectItems';
import Popup from './Popup';

export default class MultiSelect extends React.PureComponent {
  render() {
    return (
      <Popup isOpen={this.state.isOpen} onReject={this.handleReject}>
        <SelectInput
          value={this.props.value}
          items={this.props.items}
          onClick={this.handleOpenClose}
        />
        <SelectItems>
          {this.props.items.map(item =>
            <SelectItem
              key={item.value}
              {...item}
              onSelect={this.handleItemSelect}
              selected={this.state.value === item.value}
            />,
          )}
        </SelectItems>
      </Popup>
    );
  }

  constructor(props) {
    super(props);
    this.state = { isOpen: false, value: props.value };
  }

  handleItemSelect = value => {
    this.setState({ isOpen: false, value });
    this.props.onChange(value);
  };

  handleOpenClose = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleReject = () => {
    this.setState({ isOpen: false, value: this.props.value });
  };
}
