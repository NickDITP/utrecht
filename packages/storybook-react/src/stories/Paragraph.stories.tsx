import readme from '@nl-design-system-unstable/documentation/componenten/_paragraph.md?raw';
import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@utrecht/component-library-react';
import tokensDefinition from '@utrecht/components/paragraph/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';

export const Default: Meta<typeof Paragraph> = {
  title: 'React Component/Paragraph',
  component: Paragraph,
  args: {
    lead: false,
    small: false,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  parameters: {
    tokensPrefix: 'utrecht-paragraph',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default Default;
type Story = StoryObj<typeof Paragraph>;

export const Lead: Story = {
  args: {
    ...Default.args,
    lead: true,
  },
};
export const Small: Story = {
  args: {
    ...Default.args,
    small: true,
  },
};
