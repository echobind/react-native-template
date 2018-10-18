import styled from '@emotion/native';
import React, { Component } from 'react';
import { View, ViewStyle } from 'react-native';
import { Text } from '../../components/Text';
import { Screen } from '../../components/Screen';
import { colors } from '../../styles';

interface Props {
  style?: ViewStyle;
}

export class IntroScreen extends Component<Props> {
  public render() {
    return (
      <Screen backgroundColor={colors.gray} style={this.props.style}>
        <Text>Login Screen!</Text>
      </Screen>
    );
  }
}
