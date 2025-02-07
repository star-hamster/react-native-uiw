import 'react-native';
import React from 'react';
import NoticeBar from '../lib/NoticeBar';
import Marquee from '../lib/NoticeBar/Marquee';
import { Text, Image } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import { keys, toObject } from '../utils';

const MODES: keys = {
  closable: '×',
  link: '∟',
};

describe('NoticeBar', () => {
  describe.each`
    mode
    ${'closable'}
    ${'link'}
  `('$mode', ({ mode }) => {
    it(`should display mode ${mode} noticeBar`, () => {
      const { getByText } = render(<NoticeBar mode={mode} />);
      expect(getByText(MODES[mode])).toBeTruthy();
    });
  });

  it('icon', () => {
    const source = {
      uri: 'https://zos.alipayobjects.com/rmsportal/bRnouywfdRsCcLU.png',
    };
    const customIcon = <Image source={source} style={{ width: 12, height: 12 }} />;
    const { UNSAFE_getByType } = render(<NoticeBar icon={customIcon} />);
    const component = UNSAFE_getByType(Image);
    expect(component.props.source).toMatchObject(source);
  });

  it('marqueeProps', () => {
    const { UNSAFE_getByType } = render(<NoticeBar marqueeProps={{ style: { fontSize: 12 } }} />);
    const component = UNSAFE_getByType(Marquee);
    expect(component.props.style).toMatchObject({ fontSize: 12 });
  });

  // it('onPress', () => {
  //   const fn = jest.fn();
  //   const { getByTestId } = render(<NoticeBar onPress={fn}>onPress</NoticeBar>);
  //   const component = getByTestId('RNE__NoticeBar__wrap');
  //   fireEvent(component, 'press');
  //   expect(fn).toHaveBeenCalled();
  // });

  // it('action', () => {
  //   const { getByText } = render(<NoticeBar action={<Text>去看看</Text>} />);
  //   expect(getByText('去看看')).toBeTruthy();
  // });

  // it('style', () => {
  //   const { getByTestId } = render(<NoticeBar style={{ height: 50 }} />);
  //   const component = getByTestId('RNE__NoticeBar__wrap');
  //   const styles = toObject(component.props.style);
  //   expect(styles.height).toBe(50);
  // });

  // it('textStyle', () => {
  //   const { getByTestId } = render(<NoticeBar textStyle={{ fontSize: 20 }} />);
  //   const component = getByTestId('RNE__NoticeBar__div');
  //   const styles = toObject(component.props.style);
  //   expect(styles.fontSize).toBe(20);
  // });
});
