import React, {useContext} from 'react';
import {AuthContext} from '@context/context';
import en from '@global/language/en';
import mm from '@global/language/mm';

export const useLocal = () => {
  const {lang} = useContext(AuthContext);
  if (lang === 'en') {
    return en;
  } else if (lang == undefined) {
    return en;
  } else {
    return mm;
  }
};
