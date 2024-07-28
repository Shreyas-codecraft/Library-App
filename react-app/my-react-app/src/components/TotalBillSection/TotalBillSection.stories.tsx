import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TotalBillSection } from './TotalBillSection';

const meta: Meta<typeof TotalBillSection> = {
  title: 'App/TotalBillSection',
  component: TotalBillSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
 
};
