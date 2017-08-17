import React from 'react';
import MultiSelect from './MultiSelect';
import styled from 'styled-components';

export default class App extends React.PureComponent {
  render() {
    return (
      <Container>
        <MultiSelect
          items={items}
          value={this.state.locales}
          onChange={this.handleLocalesChange}
        />
      </Container>
    );
  }

  state = {
    locales: ['en'],
  };

  handleLocalesChange = locales => {
    this.setState({ locales });
    console.log(`MultiSelect: locales state changed`, locales);
  };
}

const items = [
  { value: 'en', label: 'English' },
  { value: 'ar', label: 'Arabic' },
  { value: 'zh', label: 'Chinese' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
];

const Container = styled.div`
  padding: 24px;
  max-width: 300px;
  margin: 0 auto;
`;
