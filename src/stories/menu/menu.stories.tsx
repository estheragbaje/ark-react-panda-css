import { Menu } from '@ark-ui/react/menu';
import { menuSlotRecipe } from '../../recipes/menu';
import { buttonRecipe } from '../../recipes/button';
import type { StoryObj } from '@storybook/react-vite';
import {
  CheckIcon,
  ChevronRight,
  LucideClipboardPaste,
  LucideCopy,
  LucideScissors,
} from 'lucide-react';
import { useCheckboxGroup } from '@ark-ui/react';
import { useState } from 'react';

const meta = {
  title: 'Menu',
  parameters: {
    layout: 'centered',
  },
};

export const Size: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {sizes.map((size) => {
          const buttonClass = buttonRecipe({ size });
          const menuClasses = menuSlotRecipe({ size });

          return (
            <Menu.Root key={size}>
              <Menu.Trigger className={buttonClass}>Open menu</Menu.Trigger>
              <Menu.Positioner>
                <Menu.Content className={menuClasses.content}>
                  <Menu.Item className={menuClasses.item} value='react'>
                    React
                  </Menu.Item>
                  <Menu.Item className={menuClasses.item} value='solid'>
                    Solid
                  </Menu.Item>
                  <Menu.Item className={menuClasses.item} value='vue'>
                    Vue
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
          );
        })}
      </div>
    );
  },
};

export const ItemDisabled: Story = {
  render: () => {
    const menuClasses = menuSlotRecipe({ size: 'sm' });
    const buttonClass = buttonRecipe({ size: 'sm' });

    return (
      <Menu.Root>
        <Menu.Trigger className={buttonClass}>Open menu</Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content className={menuClasses.content}>
            <Menu.Item className={menuClasses.item} value='react' disabled>
              React
            </Menu.Item>
            <Menu.Item className={menuClasses.item} value='solid'>
              Solid
            </Menu.Item>
            <Menu.Item className={menuClasses.item} value='vue'>
              Vue
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    );
  },
};

export const TriggerWithIndicator: Story = {
  render: () => {
    const menuClasses = menuSlotRecipe({ size: 'sm' });
    const triggerClass = buttonRecipe({ size: 'sm' });

    return (
      <Menu.Root>
        <Menu.Trigger className={triggerClass}>
          Open menu
          <Menu.Indicator className={menuClasses.indicator}>
            <ChevronRight />
          </Menu.Indicator>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content className={menuClasses.content}>
            <Menu.Item className={menuClasses.item} value='react'>
              React
            </Menu.Item>
            <Menu.Item className={menuClasses.item} value='solid'>
              Solid
            </Menu.Item>
            <Menu.Item className={menuClasses.item} value='vue'>
              Vue
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    );
  },
};

export const CheckboxAndRadio: Story = {
  render: () => {
    const checkboxGroup = useCheckboxGroup({ defaultValue: ['react'] });
    const [radioValue, setRadioValue] = useState('react');

    const items = [
      { title: 'React', value: 'react' },
      { title: 'Vue', value: 'vue' },
      { title: 'Solid', value: 'solid' },
    ];

    const menuClasses = menuSlotRecipe({ size: 'sm' });
    const buttonClass = buttonRecipe({ size: 'sm', variant: 'outline' });

    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <Menu.Root>
          <Menu.Trigger className={buttonClass}>Checkbox menu</Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className={menuClasses.content}>
              {items.map(({ title, value }) => (
                <Menu.CheckboxItem
                  key={value}
                  value={value}
                  checked={checkboxGroup.isChecked(value)}
                  onCheckedChange={() => checkboxGroup.toggleValue(value)}
                  className={menuClasses.item}
                >
                  <Menu.ItemIndicator className={menuClasses.itemIndicator}>
                    <CheckIcon />
                  </Menu.ItemIndicator>
                  <Menu.ItemText>{title}</Menu.ItemText>
                </Menu.CheckboxItem>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>

        <Menu.Root>
          <Menu.Trigger className={buttonClass}>Radio menu</Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className={menuClasses.content}>
              <Menu.RadioItemGroup
                value={radioValue}
                onValueChange={(e) => setRadioValue(e.value)}
              >
                {items.map(({ title, value }) => (
                  <Menu.RadioItem
                    key={value}
                    value={value}
                    className={menuClasses.item}
                  >
                    <Menu.ItemIndicator className={menuClasses.itemIndicator}>
                      <CheckIcon />
                    </Menu.ItemIndicator>
                    <Menu.ItemText>{title}</Menu.ItemText>
                  </Menu.RadioItem>
                ))}
              </Menu.RadioItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </div>
    );
  },
};

export const ItemGroup: Story = {
  render() {
    const menu = menuSlotRecipe({ size: 'sm' });
    const buttonClass = buttonRecipe({ variant: 'outline', size: 'sm' });

    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Menu.Root>
          <Menu.Trigger className={buttonClass}>Open menu</Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className={menu.content}>
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel className={menu.itemGroupLabel}>
                  JS Frameworks
                </Menu.ItemGroupLabel>
                <Menu.Item value='react' className={menu.item}>
                  React
                </Menu.Item>
                <Menu.Item value='solid' className={menu.item}>
                  Solid
                </Menu.Item>
                <Menu.Item value='vue' className={menu.item}>
                  Vue
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.Separator className={menu.separator} />
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel className={menu.itemGroupLabel}>
                  CSS Frameworks
                </Menu.ItemGroupLabel>
                <Menu.Item value='panda' className={menu.item}>
                  Panda
                </Menu.Item>
                <Menu.Item value='tailwind' className={menu.item}>
                  Tailwind
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </div>
    );
  },
};

const MenuItemCommand = (props: React.ComponentProps<'span'>) => (
  <span data-scope='menu' data-part='item-command' {...props} />
);

export const IconAndCommand: Story = {
  render() {
    const menu = menuSlotRecipe({ size: 'sm' });
    const buttonClass = buttonRecipe({ variant: 'outline', size: 'sm' });
    const items = [
      { value: 'cut', icon: <LucideScissors />, label: 'Cut', command: '⌘X' },
      { value: 'copy', icon: <LucideCopy />, label: 'Copy', command: '⌘C' },
      {
        value: 'paste',
        icon: <LucideClipboardPaste />,
        label: 'Paste',
        command: '⌘V',
      },
    ];

    return (
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Menu.Root>
          <Menu.Trigger className={buttonClass}>Open menu</Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content className={menu.content}>
              {items.map(({ value, icon, label, command }) => (
                <Menu.Item value={value} className={menu.item} key={value}>
                  {icon}
                  <Menu.ItemText className={menu.itemText}>
                    {label}
                  </Menu.ItemText>
                  <MenuItemCommand className={menu.itemCommand}>
                    {command}
                  </MenuItemCommand>
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
