import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import Root from 'Root';

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it('has a text area and 2 buttons', () => {
  expect(component.find('textarea').length).toEqual(1);
  expect(component.find('button').length).toEqual(2);
});

describe('the text area', () => {
  const sampleComment = 'some text';

  beforeEach(() => {
    component
      .find('textarea')
      .simulate('change', { target: { value: sampleComment } });
    component.update();
  });
  it('users can type in text area', () => {
    expect(component.find('textarea').prop('value')).toEqual(sampleComment);
  });

  it('when form is submited, text area gets emptied', () => {
    component.find('form').simulate('submit');
    component.update();

    expect(component.find('textarea').prop('value')).toEqual('');
  });
});
