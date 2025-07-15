import { sva } from '../../styled-system/css';
import { accordionAnatomy } from '@ark-ui/react/accordion';

export const accordionSlotRecipe = sva({
  slots: [...accordionAnatomy.keys(), 'itemBody'],
  className: 'accordion',
  base: {
    root: {
      width: 'full',
      borderRadius: 'var(--accordion-radius)',
    },
    item: {
      overflowAnchor: 'none',
    },
    itemTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'start',
      width: 'full',
      outline: 0,
      gap: '3',
      fontWeight: 'medium',
      borderRadius: 'var(--accordion-radius)',
      padding: 'var(--accordion-padding-y) var(--accordion-padding-x)',
      background: 'transparent',
      _focusVisible: {
        outline: '2px solid var(--accordion-focus-ring, #3b82f6)',
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    itemContent: {
      overflow: 'hidden',
      borderRadius: 'var(--accordion-radius)',
      paddingInline: 'var(--accordion-padding-x)',
      _open: {
        animationName: 'expand-height, fade-in',
        animationDuration: '200ms',
      },
      _closed: {
        animationName: 'collapse-height, fade-out',
        animationDuration: '200ms',
      },
    },
    itemBody: {
      paddingTop: 'var(--accordion-padding-y)',
      paddingBottom: 'calc(var(--accordion-padding-y) * 2)',
    },
    itemIndicator: {
      transition: 'rotate 0.2s',
      transformOrigin: 'center',
      color: 'fg.subtle',
      _open: {
        transform: 'rotate(180deg)',
      },
      _icon: {
        width: '1.2em',
        height: '1.2em',
      },
    },
  },
  variants: {
    variant: {
      outline: {
        item: {
          borderBottom: '1px solid',
          borderColor: 'border',
        },
      },

      subtle: {
        itemTrigger: {
          paddingInline: 'var(--accordion-padding-x)',
        },
        itemContent: {
          paddingInline: 'var(--accordion-padding-x)',
        },
        item: {
          borderRadius: 'var(--accordion-radius)',
          _open: {
            background: 'bg.muted',
          },
        },
      },

      enclosed: {
        root: {
          border: '1px solid',
          borderColor: 'border',
          borderRadius: 'var(--accordion-radius)',
          overflow: 'hidden',
        },
        itemTrigger: {
          paddingInline: 'var(--accordion-padding-x)',
        },
        itemContent: {
          paddingInline: 'var(--accordion-padding-x)',
        },
        item: {
          '& + &': {
            borderTop: '1px solid',
            borderColor: 'border',
          },
          _open: {
            background: 'bg.subtle',
          },
        },
      },
    },
    size: {
      sm: {
        root: {
          '--accordion-padding-x': '0.75rem',
          '--accordion-padding-y': '0.5rem',
          '--accordion-radius': '0.25rem',
        },
        itemTrigger: {
          fontSize: 'sm',
        },
      },
      md: {
        root: {
          '--accordion-padding-x': '1rem',
          '--accordion-padding-y': '0.5rem',
          '--accordion-radius': '0.375rem',
        },
        itemTrigger: {
          fontSize: 'md',
        },
      },
      lg: {
        root: {
          '--accordion-padding-x': '1.5rem',
          '--accordion-padding-y': '0.75rem',
          '--accordion-radius': '0.5rem',
        },
        itemTrigger: {
          fontSize: 'lg',
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
    variant: 'outline',
  },
});
