import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TipOptionsPanel } from './TipOptionsPanel';

const meta: Meta<typeof TipOptionsPanel> = {
  title: 'App/TipOptionsPanel',
  component: TipOptionsPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    chooseTipText:"Select Tip %"
  }
 
};
