import React from 'react';

//style
import LinearGradient from 'react-native-linear-gradient';
import styles from './Style';

const GradientOverlay = props => {
  return (
    <LinearGradient colors={styles.gradientColor} style={styles.gradient}>
      {props.children}
    </LinearGradient>
  );
};

export default GradientOverlay;
