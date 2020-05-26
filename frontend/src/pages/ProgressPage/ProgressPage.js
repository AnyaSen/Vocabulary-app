import React from "react";

import PageLayout from "../../components/PageLayout/PageLayout";
import ArrowBack from "../../components/Buttons/ArrowBack/ArrowBack";

export default function ProgressPage() {
  return (
    <div>
      <PageLayout header="PROGRESS" subHeader="Here you will see your progress">
        <ArrowBack linkTo="/home" />

        <p>New word</p>
        <p>Words in learing process</p>
        <p>Learned words</p>
      </PageLayout>
    </div>
  );
}
