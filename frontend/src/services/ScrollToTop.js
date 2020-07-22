import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  useEffect(() => {
    const scroll = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      scroll();
    };
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
