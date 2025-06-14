import { sva } from '../../styled-system/css';
import { menuAnatomy } from '@ark-ui/react/menu';

export const menuSlotRecipe = sva({
  slots: [...menuAnatomy.keys(), 'itemCommand'],
  className: 'menu',
  base: {
    content: {
      outline: '0',
      bg: 'bg.panel',
      boxShadow: 'md',
      color: 'fg',
      zIndex: 'dropdown',
      borderRadius: 'md',
      overflow: 'hidden',
      overflowY: 'auto',
      minW: '8rem',
      maxHeight: '300px',
      padding: 'var(--menu-content-padding)',
      _open: {
        animation: 'slide-fade-in 150ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      _closed: {
        animation: 'slide-fade-out 100ms cubic-bezier(0.4, 0, 1, 1)',
      },
    },
    item: {
      textDecoration: 'none',
      color: 'fg',
      userSelect: 'none',
      borderRadius: 'sm',
      width: '100%',
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
      textAlign: 'start',
      position: 'relative',
      flex: '0 0 auto',
      outline: '0',
      transition: 'background 0.2s',
      gap: 'var(--menu-item-gap)',
      fontSize: 'var(--menu-item-font-size)',
      padding: 'var(--menu-item-padding)',
      _highlighted: {
        bg: 'bg.muted',
      },
      _disabled: {
        color: 'fg.subtle',
        cursor: 'not-allowed',
        opacity: '0.6',
        pointerEvents: 'none',
      },
      _checked: {
        fontWeight: 'medium',
      },
      '&[data-type]': {
        paddingInlineStart: 'var(--menu-option-offset)',
      },
      _icon: {
        width: 'var(--menu-item-icon-size)',
        height: 'var(--menu-item-icon-size)',
      },
    },
    indicator: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      transition: 'transform 0.2s',
      _open: {
        transform: 'rotate(90deg)',
      },
    },
    itemGroupLabel: {
      paddingInline: '2',
      paddingBlock: '1.5',
      fontSize: 'var(--menu-item-font-size)',
      fontWeight: '500',
    },
    separator: {
      height: '1px',
      borderColor: 'border',
      marginBlock: 'var(--menu-content-padding)',
      marginInline: 'calc(-1 * var(--menu-content-padding))',
    },
    itemText: {
      flex: '1',
    },
    itemIndicator: {
      position: 'absolute',
      insetInlineStart: '1',
    },
    itemCommand: {
      opacity: '0.6',
      fontSize: 'xs',
      marginInlineStart: 'auto',
      paddingInlineStart: '4',
      letterSpacing: 'widest',
      fontFamily: 'inherit',
    },
  },

  variants: {
    size: {
      sm: {
        content: {
          '--menu-content-padding': '0.25rem',
          '--menu-item-gap': '0.25rem',
          '--menu-item-font-size': '0.875rem',
          '--menu-item-padding': '0.25rem 0.75rem',
          '--menu-item-icon-size': '1rem',
          '--menu-option-offset': '1.5rem',
        },
      },
      md: {
        content: {
          '--menu-content-padding': '0.25rem',
          '--menu-item-gap': '0.5rem',
          '--menu-item-font-size': '0.925rem',
          '--menu-item-padding': '0.25rem 0.75rem',
          '--menu-item-icon-size': '2rem',
          '--menu-option-offset': '1.5rem',
        },
      },
      lg: {
        content: {
          '--menu-content-padding': '0.5rem',
          '--menu-item-gap': '0.5rem',
          '--menu-item-font-size': '1rem',
          '--menu-item-padding': '0.5rem 0.925rem',
          '--menu-item-icon-size': '2.5rem',
          '--menu-option-offset': '1.5rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
