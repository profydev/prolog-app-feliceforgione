import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonColor, ButtonVariant, ButtonIcon } from ".";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Defaults: Story = {
  args: {
    children: "Button CTA",
    disabled: false,
  },
  argTypes: {
    color: {
      control: "select",
      options: Object.values(ButtonColor),
    },
  },
};

export const Small: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    size: ButtonSize.sm,
  },
};

export const Medium: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    size: ButtonSize.md,
  },
};
export const Large: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    size: ButtonSize.lg,
  },
};

export const XLarge: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    size: ButtonSize.xl,
  },
};

export const Primary: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    color: ButtonColor.Primary,
  },
};

export const Secondary: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    color: ButtonColor.Secondary,
  },
};

export const Gray: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    color: ButtonColor.Gray,
  },
};

export const Error: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    color: ButtonColor.Error,
  },
};

export const PrimaryEmpty: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    color: ButtonColor.Primary,
    variant: ButtonVariant.Empty,
  },
};

export const GrayEmpty: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    color: ButtonColor.Gray,
    variant: ButtonVariant.Empty,
  },
};

export const ErrorEmpty: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    color: ButtonColor.Error,
    variant: ButtonVariant.Empty,
  },
};

export const IconLeading: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
  },
  render: (args) => (
    <Button {...args}>
      <ButtonIcon src={"/icons/alert-circle.svg"} /> Button CTA
    </Button>
  ),
};

export const IconTrailing: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    children: (
      <>
        Button CTA <ButtonIcon src={"/icons/alert-circle.svg"} />
      </>
    ),
  },
};

export const IconOnly: Story = {
  ...Defaults,
  args: {
    ...Defaults.args,
    children: <ButtonIcon src={"/icons/alert-circle.svg"} />,
    variant: ButtonVariant.IconOnly,
  },
};
