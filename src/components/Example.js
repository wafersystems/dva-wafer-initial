import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import MySelect from './MySelect';

export class Select extends PureComponent {
  static myFunction(e) {
    window.console.log(e);
  }

  constructor() {
    super();
    Select.myFunction = Select.myFunction.bind(this);
  }

  render() {
    const { options = [], onChange } = this.props;
    return (
      <select
        onChange={e => {
          if (onChange) {
            onChange(e);
          }
          Select.myFunction(e.target.value);
        }}
        ref={r => {
          this.select = r;
        }}
      >
        {options.map(option => {
          return (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    );
  }
}

const Example = ({ dispatch }) => {
  return (
    <div>
      <FormattedMessage id="example.test" />
      <div>Dva 2.X</div>
      {dispatch && (
        <div>
          <br />
          This page can get dispatch...
        </div>
      )}

      <div>
        <MySelect
          options={[{ id: 1, value: 1, label: 'example' }, { id: 2, value: 3, label: 'test' }]}
          onChange={(e, v) => window.console.log(e.target.value, v)}
        />
      </div>
    </div>
  );
};

Example.propTypes = {};

export default Example;
