import { Menu } from '@ark-ui/react/menu';
import { menuSlotRecipe } from '../../recipes/menu';

export const AvatarDemo = () => {
  const classes = menuSlotRecipe();
  return (
    <Menu.Root>
      <Menu.Trigger>
        Open menu <Menu.Indicator>➡️</Menu.Indicator>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content className={classes.content}>
          <Menu.Item value='react'>React</Menu.Item>
          <Menu.Item value='solid'>Solid</Menu.Item>
          <Menu.Item value='vue'>Vue</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
