import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import { CheckboxSize } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Defaults: Story = {
  args: {
    label: "Label",
    checkboxSize: CheckboxSize.Medium,
  },
};

export const Small: Story = {
  args: {
    ...Defaults.args,
    checkboxSize: CheckboxSize.Small,
  },
};

export const Medium: Story = {
  args: {
    ...Defaults.args,
    checkboxSize: CheckboxSize.Medium,
  },
};

export const Disabled: Story = {
  args: {
    ...Defaults.args,
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    ...Defaults.args,
    checked: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    ...Defaults.args,
    checked: true,
    disabled: true,
  },
};

export const Indeterminate: Story = {
  args: {
    ...Defaults.args,
    indeterminate: true,
  },
};

export const IndeterminateDisabled: Story = {
  args: {
    ...Defaults.args,
    indeterminate: true,
    disabled: true,
  },
};
