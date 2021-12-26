import { render, screen } from '@testing-library/react';
import SummayPage from '../SummaryPage';

test('checkbox and button', () => {
  render(<SummayPage />);
  const checkbox = screen.getByRole('checkbox', {
    name: '주문하려는 것을 확인하셨나요?',
  });
  expect(checkbox.checked).toEqual(false);

  const confirmButton = screen.getByRole('button', { name: '주문 확인' });
  expect(confirmButton.disabled).toBeTruthy();
})