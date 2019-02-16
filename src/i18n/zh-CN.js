/**
 * Created by XUQIANG on 2017/03/14.
 */
/* eslint-disable */
import { default as index } from './zh_CN/index';

export default Object.assign(
  {
    locale: 'zh_CN',
    pluralRuleFunction: () => {
      return 'other';
    },
  },
  index,
);
/* eslint-enable */
