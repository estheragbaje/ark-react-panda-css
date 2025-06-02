import { sva } from '../../styled-system/css';

export const avatarSlotRecipe = sva({
  slots: ['root', 'image', 'fallback'],
  className: 'avatar',
  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      fontWeight: 'medium',
      userSelect: 'none',
      flexShrink: '0',
      verticalAlign: 'top',
      w: '10',
      h: '10',
      fontSize: 'md',
      borderRadius: 'full',
    },
    image: {
      w: 'full',
      h: 'full',
      objectFit: 'cover',
      borderRadius: 'inherit',
    },
    fallback: {
      lineHeight: '1',
      fontWeight: 'medium',
      textTransform: 'uppercase',
      fontSize: 'md',
      borderRadius: 'inherit',
    },
  },
  variants: {
    size: {
      xs: {
        root: { w: '8', h: '8', fontSize: 'xs' },
      },
      sm: {
        root: { w: '9', h: '9', fontSize: 'sm' },
      },
      md: {
        root: { w: '10', h: '10', fontSize: 'md' },
      },
      lg: {
        root: { w: '14', h: '14', fontSize: 'lg' },
      },
      xl: {
        root: { w: '16', h: '16', fontSize: 'xl' },
      },
    },
    shape: {
      rounded: {
        root: { borderRadius: 'lg' },
      },
      square: {
        root: { borderRadius: '0' },
      },
      full: {
        root: { borderRadius: 'full' },
      },
    },
    variant: {
      subtle: {
        root: { bg: 'indigo.100', color: 'indigo.600' },
      },
      solid: {
        root: {
          bg: 'indigo.600',
          color: 'white',
        },
      },
      outline: {
        root: {
          bg: 'transparent',
          color: 'indigo.600',
          border: '1px solid #e0e7ff',
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    shape: 'full',
    variant: 'subtle',
  },
});
