import * as fromCourseState from './course-state.reducer';
import { selectCourseStateState } from './course-state.selectors';

describe('CourseState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCourseStateState({
      [fromCourseState.courseStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
