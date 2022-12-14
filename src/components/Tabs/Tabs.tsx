import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './Tabs.scss';

export const Tabs = (props: any) => {
  const { titles, className = '', children } = props;
  const { theme } = useContext(ThemeContext);

  const addIds = (array: [], copyId? : any) => {
    return array.map((item, index) => ({
      id: copyId ? copyId[index].id : index + 1,
      data: item,
    }));
  };

  const titlesWithIds = addIds(titles);
  const childrenWithIds = addIds(children, titlesWithIds);
  const [activeId, setActiveId] = useState(titlesWithIds[0].id);

  return (
    <div className={`tabs ${theme}-mode ${className}`}>
      <div className='tab_list'>
        {titlesWithIds.map(({ id, data }) => (
          <button
            key={id}
            className={`tabs-button ${
              activeId === id ? 'activated' : 'disabled'
            }`}
            onClick={() => setActiveId(id)}
          >
            <span className='vertical_text'>{data}</span>
          </button>
        ))}
      </div>
      <div className='tab_panel'>
        {childrenWithIds.map(({ id, data }) => (
          <div
            key={id}
            className={`tab ${activeId === id ? 'visible' : 'hidden'}`}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  );
};

// Tabs.propTypes = {
//   titles: PropTypes.arrayOf(PropTypes.string),
//   className: PropTypes.string,
// };
