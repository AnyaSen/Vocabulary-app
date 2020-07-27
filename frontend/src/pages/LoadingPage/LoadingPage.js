import React from "react";

import Styles from "./LoadingPage.module.scss";

import Loader from "../../components/shared/Loader/Loader";

export default function LoadingPage() {
  return (
    <div className={Styles.LoadingPage}>
      <Loader />
    </div>
  );
}
