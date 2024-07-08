import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Error } from "./error";

export default {
  title: "UI/Error",
  component: Error,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Error>;

const Template: StoryFn<typeof Error> = ({ children, refetch }) => (
  <Error refetch={refetch}> {children} </Error>
);

export const Default = Template.bind({});
Default.args = {
  refetch: () => {
    alert("refetching....");
  },
  children: "There was a problem with loading the project data",
};
Default.parameters = {
  viewMode: "docs",
};
