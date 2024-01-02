import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  describe('Events', () => {
    test('onClick', async () => {
      const testId = 'h-button-id';
      const onClick = jest.fn();
      let jsx = (
        <Button data-testid={testId} onClick={onClick}>
          Shmallas
        </Button>
      );
      render(jsx);
      const button = screen.getByTestId(testId);
      expect(button).not.toBeNull();
      await userEvents.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
  test('Snapshot', () => {
    let jsx = <Button>Shmallas</Button>;
    const { container } = render(jsx);
    expect(container).toMatchSnapshot();
  });
});
