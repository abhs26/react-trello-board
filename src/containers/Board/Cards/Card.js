import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const galPng = require('../../../assets/images/gal.png');
const delPng = require('../../../assets/images/del.png');


const Card = (props) => {
  const { style, item } = props;

  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <div className="item-name">{item.title}</div>
      <div className="item-container">
        <li className="issue">
          <i className="issue__type fa fa-check-square-o"></i>
          <i className="issue__priority fa fa-angle-up"></i>
          <div className="issue__assignee">
            <img className="image" src="http://placekitten.com/g/48/48" alt={"kitten"} />
          </div>
          <div className="issue__estimate">12</div>
          <a className="issue__number" href="#">ZUI-1328</a>
          <p className="issue__title">Document</p>
        </li>
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
