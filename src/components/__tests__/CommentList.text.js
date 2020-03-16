import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let component;

beforeEach(() => {
  const initialState = {
    comments: ['comment 1', 'comment 2']
  };

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one li per comment', () => {
  expect(component.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  expect(component.render().text()).toContain('comment 1');
  expect(component.render().text()).toContain('comment 2');
});
