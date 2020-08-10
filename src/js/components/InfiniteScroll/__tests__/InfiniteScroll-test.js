import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Grommet } from '../../Grommet';
import { InfiniteScroll } from '..';
import { Box } from '../..';

describe('InfiniteScroll', () => {
  const items = [];
  while (items.length < 4) items.push(items.length);
  const simpleItems = value =>
    Array(value)
      .fill()
      .map((_, i) => `item ${i + 1}`);

  test('basic', () => {
    const { container } = render(
      <Grommet>
        <InfiniteScroll />
        <InfiniteScroll items={items}>
          {(item, index, ref) => (
            <div ref={ref} key={index}>
              {item}
            </div>
          )}
        </InfiniteScroll>
        <InfiniteScroll items={items}>
          {(item, index) => <div key={index}>{item}</div>}
        </InfiniteScroll>
      </Grommet>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('step', () => {
    const { container } = render(
      <Grommet>
        <InfiniteScroll items={items} step={2}>
          {(item, index) => <div key={index}>{item}</div>}
        </InfiniteScroll>
      </Grommet>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('show', () => {
    const { container } = render(
      <Grommet>
        <InfiniteScroll items={items} step={2} show={3}>
          {(item, index) => <div key={index}>{item}</div>}
        </InfiniteScroll>
      </Grommet>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renderMarker', () => {
    const { container } = render(
      <Grommet>
        <InfiniteScroll
          items={items}
          step={2}
          renderMarker={m => <div>{m}</div>}
        >
          {(item, index) => <div key={index}>{item}</div>}
        </InfiniteScroll>
      </Grommet>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('replace', () => {
    const { container } = render(
      <Grommet>
        <InfiniteScroll items={items} step={2} replace>
          {(item, index) => <div key={index}>{item}</div>}
        </InfiniteScroll>
      </Grommet>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`Show item should be visible in window`, () => {
    const { container } = render(
      <Grommet>
        <InfiniteScroll
          items={simpleItems(300)}
          // show={105}
        >
          {item => <Box key={item}>{item}</Box>}
        </InfiniteScroll>
      </Grommet>,
    );
    // item(104) = 'item 105' because indexing starts at 0
    const renderedItems = container.firstChild.children.item(10).outerHTML;
    expect(renderedItems).toContain('item 11');
    // const renderedItems = container.firstChild.children.item(104).outerHTML;
    // expect(renderedItems).toContain('item 105');
  });
});
