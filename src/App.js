import React from 'react';
import MultiSelect from './MultiSelect';
import Select from './Select';
import styled from 'styled-components';

export default class App extends React.PureComponent {
  render() {
    return (
      <Container>
        <div style={{ height: 500 }} />
        <MultiSelect
          items={locales}
          value={this.state.locales}
          onChange={this.handleLocalesChange}
        />
        <div style={{ height: 48 }} />
        <Select
          items={sizes}
          value={this.state.size}
          onChange={this.handleSizeChange}
        />
        <div style={{ height: 500 }} />
      </Container>
    );
  }

  state = {
    locales: ['en'],
    size: 'm',
  };

  handleLocalesChange = locales => {
    this.setState({ locales });
    console.log(`MultiSelect: locales state changed`, locales);
  };

  handleSizeChange = size => {
    this.setState({ size });
    console.log(`Select: size state changed`, size);
  };
}

const locales = [
  { value: 'en', label: 'English' },
  { value: 'ar', label: 'Arabic' },
  { value: 'zh', label: 'Chinese' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
];

const sizes = [
  { value: 's', label: 'Small' },
  { value: 'm', label: 'Medium' },
  { value: 'l', label: 'Large' },
  { value: 'xl', label: 'Extra Large' },
  { value: 'xxl', label: 'XX Large' },
];

const Container = styled.div`
  padding: 24px;
  max-width: 300px;
  margin: 0 auto;
`;
