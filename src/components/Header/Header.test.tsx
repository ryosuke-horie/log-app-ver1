import { render, fireEvent, screen } from '@testing-library/react';
import Header from './index';

describe('Header', () => {
  test('displays the correct text', () => {
    render(<Header onMenuClose={() => {}} />);
    const headerText = screen.getByText('MyLogApp Ver.1');
    expect(headerText).toBeInTheDocument();
  });

  test('clicking the button opens the modal', () => {
    render(<Header onMenuClose={() => {}} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const modalTitle = screen.getByText('メニュー');
    expect(modalTitle).toBeInTheDocument();
  });

  test('clicking the close button closes the modal', () => {
    render(<Header onMenuClose={() => {}} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const closeButton = screen.getByText('閉じる');
    fireEvent.click(closeButton);
    const modalTitle = screen.queryByText('メニュー');
    expect(modalTitle).toBeNull();
  });

  test('closing the modal calls onMenuClose', () => {
    const onMenuClose = jest.fn();
    render(<Header onMenuClose={onMenuClose} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const closeButton = screen.getByText('閉じる');
    fireEvent.click(closeButton);
    expect(onMenuClose).toHaveBeenCalled();
  });
});
