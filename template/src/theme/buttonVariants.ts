import { Dimensions } from 'react-native';

export const buttonVariants = {
  defaults: {
    backgroundColor: 'blue',
    borderColor: 'transparent',
    borderRadius: 'rounded',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: 335,
    paddingVertical: 3,
    textStyle: {
      color: 'white',
      fontWeight: '600',
    },
    width: Dimensions.get('window').width - 32,
  },
  secondary: {
    backgroundColor: 'backgroundSecondary',
    borderColor: 'transparent',
    textStyle: {
      color: 'white',
    },
  },
};

export type ButtonVariants = keyof typeof buttonVariants;
