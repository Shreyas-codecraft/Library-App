import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FinalForm } from './FinalForm';

const meta: Meta<typeof FinalForm> = {
  title: 'App/FinalForm',
  component: FinalForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
 
};
