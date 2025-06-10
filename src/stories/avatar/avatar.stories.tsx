import { Avatar } from '@ark-ui/react/avatar';
import { avatarSlotRecipe } from '../../recipes/avatar';
import type { StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Avatar',
  parameters: {
    layout: 'centered',
  },
};

export const Size: Story = {
  render() {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {sizes.map((size) => {
          const classes = avatarSlotRecipe({ size });
          return (
            <Avatar.Root key={size} className={classes.root}>
              <Avatar.Fallback className={classes.fallback}>AB</Avatar.Fallback>
              <Avatar.Image
                className={classes.image}
                src='https://i.pravatar.cc/300'
                alt='avatar'
              />
            </Avatar.Root>
          );
        })}
      </div>
    );
  },
};

export const Variants: Story = {
  render() {
    const variants = ['subtle', 'solid', 'outline'] as const;

    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {variants.map((variant) => {
          const classes = avatarSlotRecipe({ variant, size: 'xl' });
          return (
            <Avatar.Root key={variant} className={classes.root}>
              <Avatar.Fallback className={classes.fallback}>AB</Avatar.Fallback>
              <Avatar.Image className={classes.image} alt='avatar' />
            </Avatar.Root>
          );
        })}
      </div>
    );
  },
};

export const Shape: Story = {
  render() {
    const shapes = ['rounded', 'square', 'full'] as const;

    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {shapes.map((shape) => {
          const classes = avatarSlotRecipe({ shape, size: 'xl' });
          return (
            <Avatar.Root key={shape} className={classes.root}>
              <Avatar.Fallback className={classes.fallback}>AB</Avatar.Fallback>
              <Avatar.Image
                className={classes.image}
                src='https://i.pravatar.cc/300'
                alt='avatar'
              />
            </Avatar.Root>
          );
        })}
      </div>
    );
  },
};

export const AvatarDemo: Story = {
  render() {
    const class1 = avatarSlotRecipe({
      size: 'sm',
      variant: 'subtle',
      shape: 'square',
    });

    const class2 = avatarSlotRecipe({
      size: 'lg',
      variant: 'outline',
      shape: 'rounded',
    });

    const class3 = avatarSlotRecipe({
      size: 'xl',
      variant: 'solid',
      shape: 'full',
    });
    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Avatar.Root className={class1.root}>
          <Avatar.Fallback className={class1.fallback}>AB</Avatar.Fallback>
          <Avatar.Image
            className={class1.image}
            src='https://i.pravatar.cc/300'
            alt='avatar'
          />
        </Avatar.Root>

        <Avatar.Root className={class2.root}>
          <Avatar.Fallback className={class2.fallback}>AB</Avatar.Fallback>
          <Avatar.Image
            className={class2.image}
            src='https://i.pravatar.cc/300'
            alt='avatar'
          />
        </Avatar.Root>

        <Avatar.Root className={class3.root}>
          <Avatar.Fallback className={class3.fallback}>AB</Avatar.Fallback>
          <Avatar.Image
            className={class3.image}
            src='https://i.pravatar.cc/300'
            alt='avatar'
          />
        </Avatar.Root>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
