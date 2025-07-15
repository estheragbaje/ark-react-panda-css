import { Accordion } from '@ark-ui/react/accordion';
import type { StoryObj } from '@storybook/react-vite';
import { ChevronDown } from 'lucide-react';
import { accordionSlotRecipe } from '../../recipes/accordion';
import { buttonRecipe } from '../../recipes/button';

const meta = {
  title: 'Accordion',
  parameters: {
    layout: 'centered',
  },
};

const AccordionItemBody = (props: React.ComponentProps<'div'>) => (
  <div data-scope='accordion' data-part='item-body' {...props} />
);

export const Size: Story = {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          width: '480px',
        }}
      >
        {(['sm', 'md', 'lg'] as const).map((size) => {
          const accordionClasses = accordionSlotRecipe({ size });

          return (
            <Accordion.Root
              key={size}
              defaultValue={['React']}
              collapsible
              className={accordionClasses.root}
            >
              {['React', 'Solid', 'Vue'].map((item) => (
                <Accordion.Item
                  key={item}
                  value={item}
                  className={accordionClasses.item}
                >
                  <Accordion.ItemTrigger
                    className={accordionClasses.itemTrigger}
                  >
                    What is {item}?
                    <Accordion.ItemIndicator
                      className={accordionClasses.itemIndicator}
                    >
                      <ChevronDown />
                    </Accordion.ItemIndicator>
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent
                    className={accordionClasses.itemContent}
                  >
                    <AccordionItemBody className={accordionClasses.itemBody}>
                      {item} is a JavaScript library for building user
                      interfaces.
                    </AccordionItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          );
        })}
      </div>
    );
  },
};

export const Variants: Story = {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          width: '480px',
        }}
      >
        {(['outline', 'subtle', 'enclosed'] as const).map((variant) => {
          const accordionClasses = accordionSlotRecipe({ variant });

          return (
            <Accordion.Root
              key={variant}
              defaultValue={['React']}
              collapsible
              className={accordionClasses.root}
            >
              {['React', 'Solid', 'Vue'].map((item) => (
                <Accordion.Item
                  key={item}
                  value={item}
                  className={accordionClasses.item}
                >
                  <Accordion.ItemTrigger
                    className={accordionClasses.itemTrigger}
                  >
                    What is {item}?
                    <Accordion.ItemIndicator
                      className={accordionClasses.itemIndicator}
                    >
                      <ChevronDown />
                    </Accordion.ItemIndicator>
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent
                    className={accordionClasses.itemContent}
                  >
                    <AccordionItemBody className={accordionClasses.itemBody}>
                      {item} is a JavaScript library for building user
                      interfaces.
                    </AccordionItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          );
        })}
      </div>
    );
  },
};

export const DisabledItem: Story = {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          width: '480px',
        }}
      >
        {(['subtle', 'enclosed'] as const).map((variant) => {
          const accordionClasses = accordionSlotRecipe({ variant });

          return (
            <Accordion.Root
              key={variant}
              defaultValue={['React']}
              collapsible
              className={accordionClasses.root}
            >
              {['React', 'Solid', 'Vue'].map((item) => {
                const isDisabled =
                  (variant === 'subtle' && item === 'Solid') ||
                  (variant === 'enclosed' && item === 'Vue');

                return (
                  <Accordion.Item
                    key={item}
                    value={item}
                    className={accordionClasses.item}
                    disabled={isDisabled}
                  >
                    <Accordion.ItemTrigger
                      className={accordionClasses.itemTrigger}
                    >
                      What is {item}?
                      <Accordion.ItemIndicator
                        className={accordionClasses.itemIndicator}
                      >
                        <ChevronDown />
                      </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent
                      className={accordionClasses.itemContent}
                    >
                      <AccordionItemBody className={accordionClasses.itemBody}>
                        {item} is a JavaScript library for building user
                        interfaces.
                      </AccordionItemBody>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                );
              })}
            </Accordion.Root>
          );
        })}
      </div>
    );
  },
};

export const WithAction: Story = {
  render() {
    const accordionClasses = accordionSlotRecipe({
      size: 'sm',
      variant: 'outline',
    });

    const actionButtonClass = buttonRecipe({
      size: 'sm',
      variant: 'outline',
    });

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          width: '480px',
        }}
      >
        <Accordion.Root
          defaultValue={['React']}
          collapsible
          className={accordionClasses.root}
        >
          {['React', 'Solid', 'Vue'].map((item) => (
            <Accordion.Item
              key={item}
              value={item}
              className={accordionClasses.item}
            >
              <Accordion.ItemTrigger className={accordionClasses.itemTrigger}>
                What is {item}?<div className={actionButtonClass}>Action</div>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent className={accordionClasses.itemContent}>
                <AccordionItemBody className={accordionClasses.itemBody}>
                  {item} is a JavaScript library for building user interfaces.
                </AccordionItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
