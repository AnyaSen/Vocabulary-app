import React, {useState} from "react";

import Styles from "./BrowseVocabulary.module.scss";

import InputField from "../InputField/InputField";
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton'


export default function BrowseVocabulary() {
  const [searchWordInput, setSearchWordInput] = useState('');


const searchAndUpdate =()=>{
    console.log('clicked')
}

  const handleSearchWordInputChange = event => {
    setSearchWordInput(event.target.value);
  };

  return (
    <form className={Styles.BrowseVocabulary} onSubmit={searchAndUpdate}>
      <InputField 
      type='text'
      placeholder='Enter a word'
      value={searchWordInput}
      onChange={handleSearchWordInputChange}/>

       <SecondaryButton
              type="submit"
              value="submit"
              buttonMessage="Search"
            />
    </form>
  );
}
