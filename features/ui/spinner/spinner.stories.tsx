import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Spinner } from "./spinner";

export default {
  title: "UI/Spinner",
  component: Spinner,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = () => <Spinner />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  viewMode: "docs",
};
