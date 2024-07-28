import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TipAndTotalInput } from './TipAndTotalInput';

const meta: Meta<typeof TipAndTotalInput> = {
  title: 'App/TipAndTotalInput',
  component: TipAndTotalInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Tip: Story = {
 args:{
  value:"0.00",
  label:"Tip Amount"
 }
};

export const Total: Story = {
  args:{
   value:"0.00",
   label:"Total Amount"
  }
 };
