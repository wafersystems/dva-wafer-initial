import React from 'react';
import { Select } from './Example';

/**
 * Created : vincent
 * Date : 2019-02-16  15:23
 * Email : wangxiao@wafersystems.com
 */
const mySelect = () => {
  return Com => {
    return class extends React.Component {
      constructor() {
        super();
        Select.myFunction = this.myFunction.bind(this);
      }

      componentDidMount() {
        Select.myFunction = this.myFunction;
      }

      onChange(e) {
        const { options, onChange } = this.props;
        const { filter } = options;
        const target = filter(op => String(op.value) === e.target.value)[0] || {};
        onChange(e, target);
      }

      myFunction = e => {
        window.console.log(`new : ${e}`);
      };

      render() {
        return (
          <Com
            {...this.props}
            onChange={e => {
              this.onChange(e);
            }}
            ref={r => {
              this.s = r;
            }}
          />
        );
      }
    };
  };
};

const MySelect = mySelect()(Select);

export default MySelect;
