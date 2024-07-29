import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from './NumberInput';
import person from "../../assets/personLogo.svg"

const meta: Meta<typeof NumberInput> = {
  title: 'App/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Dollar: Story = {
  args: {
    value: 10,
    label:"Bill",
    typeOfIcon:"person"
  },
};

export const Person: Story = {
  args: {
    value: 10,
    label:"Bill",
    typeOfIcon:"dollar"
  },
};
