import React from 'react';
import { AccountBlock } from "../components/__common/account/AccountBlock";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/AccountBlock",
  component: AccountBlock,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};



