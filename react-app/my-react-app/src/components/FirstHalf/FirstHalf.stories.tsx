import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FirstHalf } from './FirstHalf';

const meta: Meta<typeof FirstHalf> = {
  title: 'App/FirstHalf',
  component: FirstHalf,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    inputValues: { bill: '50', people: '4' },
    setInputValues: () => {},
    errorMessages: { bill: '', people: '' },
    setErrorMessages: () => {},
  }
};
