/**
 * Created by XUQIANG on 2017/03/14.
 */
/* eslint-disable */
import { default as index } from './en_US/index';

export default Object.assign(
  {
    locale: 'en_US',
    pluralRuleFunction: () => {
      return 'other';
    },
  },
  index,
);
/* eslint-enable */
