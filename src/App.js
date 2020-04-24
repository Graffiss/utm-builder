import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MainTemplate from './templates/MainTemplate';
import MainView from './views/MainView';

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  p {
    min-width: 400px;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 30px;
    margin: 10px 0;
  }
`;

const StyledSelect = styled.select`
  height: 50px;
  width: 450px;
  border: 1px solid grey;
  outline: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  font-size: 16px;
  margin-bottom: 20px;
  padding-left: 10px;

  option {
    font-size: 16px;
  }
`;

const StyledInput = styled.input`
  height: 50px;
  width: 450px;
  border: 1px solid grey;
  outline: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  font-size: 16px;
  margin-bottom: 20px;
  padding-left: 10px;

  ::placeholder {
    font-size: 16px;
  }

  ${({ primary }) =>
    primary &&
    css`
      background: #e41e2a;
    `}
`;

const CopyButton = styled.button`
  width: 200px;
  height: 40px;
  background: transparent;
  border: 2px solid #f24e4e;
  border-radius: 10px;
  font-size: 20px;
  color: #f24e4e;
  outline: none;
  cursor: pointer;

  ${({ success }) =>
    success &&
    css`
      background: #f24e4e;
      color: white;
    `}
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResetButton = styled.button`
  width: 80px;
  height: 40px;
  background: transparent;
  border: 2px solid #3cab09;
  border-radius: 10px;
  font-size: 20px;
  color: #3cab09;
  outline: none;
  cursor: pointer;
  margin: 0 10px;
`;

class App extends Component {
  state = {
    result: [],
    website: '',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    utmTerm: '',
    utmContent: '',
    copied: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState((prevState) => ({
      result: [
        prevState.website,
        prevState.utmSource.length > 0 && `?utm_source=${prevState.utmSource}`,
        prevState.utmMedium.length > 0 && `&utm_medium=${prevState.utmMedium}`,
        prevState.utmCampaign.length > 0 && `&utm_campaign=${prevState.utmCampaign}`,
        prevState.utmTerm.length > 0 && `&utm_term=${prevState.utmTerm}`,
        prevState.utmContent.length > 0 && `&utm_content=${prevState.utmContent}`,
      ],
    }));
  };

  resetFields = () => {
    this.setState({
      result: [],
      website: '',
      utmSource: '',
      utmMedium: '',
      utmCampaign: '',
      utmTerm: '',
      utmContent: '',
      copied: false,
    });
  };

  render() {
    const {
      result,
      website,
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
      copied,
    } = this.state;

    return (
      <MainTemplate>
        <MainView>
          <StyledResult>
            <h2>Ze state.result:</h2>
            <p>{result}</p>
          </StyledResult>
          <StyledResult>
            <h1>Your URL:</h1>
            <p>
              {website}
              {utmSource.length > 0 && `?utm_source=${utmSource}`}
              {utmMedium.length > 0 && `&utm_medium=${utmMedium}`}
              {utmCampaign.length > 0 && `&utm_campaign=${utmCampaign}`}
              {utmTerm.length > 0 && `&utm_term=${utmTerm}`}
              {utmContent.length > 0 && `&utm_content=${utmContent}`}
            </p>
            <ButtonsContainer>
              {copied ? (
                <CopyButton success type="button">
                  COPIED!
                </CopyButton>
              ) : (
                <CopyToClipboard
                  text={result.filter((item) => item != false).join('')}
                  onCopy={() => this.setState({ copied: true })}
                >
                  <CopyButton type="button">Copy to clipboard</CopyButton>
                </CopyToClipboard>
              )}
              <ResetButton onClick={this.resetFields}>Reset</ResetButton>
            </ButtonsContainer>
          </StyledResult>
          <p>Website (Required):</p>
          <StyledInput
            type="text"
            name="website"
            value={website}
            onChange={this.handleChange}
            placeholder="https://pl.xtb.com/oil-campaign"
          />
          <p>UTM_Source (Required):</p>
          <StyledSelect value={utmSource} onChange={this.handleChange} name="utmSource">
            <option value={null} />
            <option value="paid">paid</option>
            <option value="email">email</option>
            <option value="affiliate">affiliate</option>
            <option value="social">social</option>
          </StyledSelect>
          <p>UTM_Medium (Required):</p>
          <StyledSelect value={utmMedium} onChange={this.handleChange} name="utmMedium">
            <option value={null} />
            <option value="facebook">facebook</option>
            <option value="google">google</option>
            <option value="newsletter">newsletter</option>
            <option value="workflow">workflow</option>
          </StyledSelect>
          <p>UTM_Campaign (Required):</p>
          <StyledInput
            type="text"
            name="utmCampaign"
            value={utmCampaign}
            onChange={this.handleChange}
            placeholder="awareness"
          />
          <p>UTM_Term:</p>
          <StyledInput
            type="text"
            name="utmTerm"
            value={utmTerm}
            onChange={this.handleChange}
            placeholder="technology"
          />
          <p>UTM_Content:</p>
          <StyledInput
            type="text"
            name="utmContent"
            value={utmContent}
            onChange={this.handleChange}
            placeholder="branding"
          />
        </MainView>
      </MainTemplate>
    );
  }
}

export default App;
