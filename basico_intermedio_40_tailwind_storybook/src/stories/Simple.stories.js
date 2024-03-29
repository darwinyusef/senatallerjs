import SimpleButton from '../components/SimpleButton'

export default {
  component: SimpleButton,
  title: 'Example/Button Simple',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Principal = {
  argTypes: {
    otherColor: {
      options: ['bg-red-400', 'bg-blue-400','bg-orange-400'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    }
  }
};
