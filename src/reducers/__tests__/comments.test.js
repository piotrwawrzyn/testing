import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

const sampleComment = 'New comment';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: sampleComment
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([sampleComment]);
});

it('does not throw error when it gets an action with unknown type', () => {
  const newState = commentsReducer([], { type: 'some action' });

  expect(newState).toEqual([]);
});
