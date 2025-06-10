import { Avatar } from '@ark-ui/react/avatar';
import { avatarSlotRecipe } from '../../recipes/avatar';

export const AvatarDemo = () => {
  const classes = avatarSlotRecipe();
  return (
    <div>
      <Avatar.Root className={classes.root}>
        <Avatar.Fallback className={classes.fallback}>PA</Avatar.Fallback>
        <Avatar.Image
          className={classes.image}
          src='https://i.pravatar.cc/300'
          alt='avatar'
        />
      </Avatar.Root>
    </div>
  );
};
