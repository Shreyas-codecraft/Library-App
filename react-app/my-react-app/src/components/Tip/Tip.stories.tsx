import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tip } from './Tip';

const meta: Meta<typeof Tip> = {
  title: 'App/Tip',
  component: Tip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Five: Story = {
 args:{
  value:5
 }
};

export const Ten: Story = {
  args:{
   value:10
  }
 };
 export const Fifteen: Story = {
  args:{
   value:15
  }
 };

 
export const Twentyfive: Story = {
  args:{
   value:25
  }
 };

 
export const Fifty: Story = {
  args:{
   value:50
  }
 };