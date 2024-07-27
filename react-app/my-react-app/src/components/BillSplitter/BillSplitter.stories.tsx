import React from 'react';
import { Story, Meta } from '@storybook/react';
import BillSplitter, { BillSplitterProps } from './BillSplitter';

const meta: Meta<BillSplitterProps> = {
  title: 'Components/BillSplitter',
  component: BillSplitter,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    /* Arg types here */
  },
};

export default meta;
type Story = StoryObj<BillSplitterProps>;

export const Default: Story = {
  args: {
    /* Args here */
  },
};
