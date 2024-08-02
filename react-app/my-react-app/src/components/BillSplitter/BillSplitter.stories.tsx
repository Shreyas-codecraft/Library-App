import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BillSplitter } from './BillSplitter';

const meta: Meta<typeof BillSplitter> = {
  title: 'App/BillSplitter',
  component: BillSplitter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
 
};
