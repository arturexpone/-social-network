import React, {useEffect} from 'react';
import {withRouter} from 'react-router';

const ScrollToTop = (props) => {
  const {children, location} = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  return children;
};

export default withRouter(ScrollToTop)