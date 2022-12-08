import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../components/ThemeContext';
import './Tabs.scss';

export const Tabs = (props) => {
  const { titles, className = '', children } = props;
  const {theme} = useContext(ThemeContext);

  const addIds = (array, copyIndex) => {
    return array.map((item, index) => ({
      id: copyIndex ? copyIndex[index].id : index + 1,
      data: item,
    }));
  };
  const titlesWithIds = addIds(titles);
  const childrenWithIds = addIds(children, titlesWithIds);
  const [ activeId, setActiveId ] = useState(titlesWithIds[0].id)

  const onHandleClick = (id) => {
    setActiveId(id)
  };

  return (
    <div className={`tabs ${theme}-mode ${className}`}>
      <div className='tab_list'>
        {titlesWithIds.map(({ id, data }) => (
          <button
            key={id}
            className={`tabs-button ${activeId === id ? 'activated' : 'disabled'}`}
            onClick={() => onHandleClick(id)}
          ><span className='vertical_text'>{data}</span>
          </button>
        ))}
      </div>
      <div className='tab_panel'>
        {childrenWithIds.map(({ id, data }) => (
          <div key={id} className={`tab ${activeId === id ? 'visible' : 'hidden'}`}>
            {data}
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  titles: PropTypes.array,
  className: PropTypes.string,
};
